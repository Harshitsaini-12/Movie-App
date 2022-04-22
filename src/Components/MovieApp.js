import React, { useState } from 'react'
import InputBox from './InputBox'
import MoviesTable from './MoviesTable';
import Pagination from "./Pagination";

function Movies() {
 let [searchText,setSearchText]=useState("");
 let [moviesCount,setCount]=useState(9);
  
 const setGlobalSearchText=(searchText)=>{
  setSearchText(searchText);
 }

 const setGlobalCount=(moviesCount)=>{
  setCount(moviesCount);
 }

  return (<div >
    <InputBox setGlobalText={setGlobalSearchText} setGlobalCount={setGlobalCount}></InputBox>
    <MoviesTable searchText={searchText} moviesCount={moviesCount}></MoviesTable>
    <Pagination></Pagination>
  </div>
    )
}

export default Movies;