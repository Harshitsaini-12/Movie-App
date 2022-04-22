import React from 'react';

function InputBox(props) {
  let [searchText, setSearchText] = React.useState("");
  let [numberOfItems, setNumberOfItems] = React.useState(0);

  const handleText=(e)=>{
    //local input change karta hai
    setSearchText(e.target.value);
    //send to parent 
    props.setGlobalSearchText(e.target.value);
  }
  const handleCount = (e) => {
    setNumberOfItems(e.target.value);
    props.setGlobalCount(e.target.value);
  }
  return (
    <>
      <button className="bg-blue-500 hover:bg-blue-700 text-white 
      font-bold py-2 px-4 rounded">New</button>
      <input  className="border rounded py-1 px-1 mx-2 font-bold" 
      type="text" value={searchText} onChange={handleText}></input>
      <input type="number" className="border rounded py-1 px-1 mx-2 font-bold" 
      value={numberOfItems} onChange={handleCount}></input>
    </>
  )
}

export default InputBox