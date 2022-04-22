import React from 'react';
import { useEffect } from 'react';

function MoviesTable(props) {
  const [isLoaded, setLoaded] = React.useState(true);
  const [content, setContent] = React.useState([]);

  useEffect(async function () {
    let response =await fetch('https://react-backend101.herokuapp.com/movies');
    response = await response.json();

    setLoaded(false);
    setContent(response);
  }, []);

  let filteredContent=[];

  if(props.searchText!==""){
    filteredContent=content.movies.filter((movie)=>{
      return movie.title.toLowerCase().includes(props.searchText.toLowerCase());
    });

  }else{
    filteredContent=content.movies;
  }

  if(content.movies){
    filteredContent=filteredContent.slice(0,props.moviesCount);
  }

  return (
    <div>{isLoaded === true ? <div className="font-bold"> Loading...</div> :
      <table className="table-auto">
        <thead>
          <tr>
            <th className="px-2">#</th>
            <th className="px-2 "> Title</th>
            <th className="px-2">Genre</th>
            <th className="px-2">Stock</th>
            <th className="px-2">Rate</th>
            <th></th>
          </tr>
        </thead>
        <tbody>
          {filteredContent.map(
            function (movie,idx) {
            return <tr >
              <td className="px-2 text-center">{idx+1}</td>
              <td className="px-2 text-center">{movie.title}</td>
              <td className="px-4 text-center">{movie.genre.name}</td>
              <td className="px-2 text-center">{movie.numberInStock}</td>
              <td className="px-2 text-center">{movie.dailyRentalRate}</td>
              <td><button className="bg-red-500 hover:bg-red-700 text-white 
              font-bold py-2 px-4 rounded">DELETE</button></td>
            </tr>
          })}
        </tbody>
      </table>

    
    }
    </div>
  )
}
export default MoviesTable