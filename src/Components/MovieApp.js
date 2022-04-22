import React, { useState } from 'react'
import InputBox from './InputBox'
import MoviesTable from './MoviesTable';
import Pagination from "./Pagination";

function Movies() {
 let [searchText,setSearchText]=useState("");
  
 const setGlobalSearchText=(searchText)=>{
  setSearchText(searchText);
 }

  return (<div >
    <InputBox setGlobalText={setGlobalSearchText} ></InputBox>
    <MoviesTable searchText={searchText}></MoviesTable>
    <Pagination></Pagination>
  </div>
    )
}

export default Movies;