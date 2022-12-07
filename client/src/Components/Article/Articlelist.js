import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { get_articles } from "../../Redux/Action/articleAction";
import { useState } from "react";
import Form from 'react-bootstrap/Form';
import InputGroup from 'react-bootstrap/InputGroup';
import ArticleCard from "./ArticleCard";
const Articlelist = () => {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(get_articles());
  }, []);
  const { articles } = useSelector((state) => state.articleReducer);
  const [searchInput, setSearchInput] = useState("");
  const [selectedId, setSelectedId] = useState("article");

  const handleChange = (e) => {
    e.preventDefault();
    setSearchInput(e.target.value);
  };
  const handleSelectChange = (e) => {
    console.log(e.target.value);
    setSelectedId(e.target.value);
  };
  const filtredarticles = articles.filter((el) => {
    //if no input the return the original
    if (searchInput === '') {
        return el;
    }
    //return the item which contains the user input
    else {
      return el.title==searchInput
    }
})
  /*let filtredarticles=articles.filter(item=>item.title===searchInput)
  console.log("fa"+filtredarticles)*/
  if(!searchInput){  return (

    <div> 
      <div style={{display:"flex" ,justifyContent:"center",justifyItems:"center"}}>
      <select onChange={handleSelectChange} name="ids" id="ids" className="customselect" >
     
      <option>article</option>
             
             
              <option vlaue="traitement">traitement</option>
              
              <option value="accessoire">accessoire</option>

              <option value="nourriture">nourriture</option>
      </select>
         <input type="search"  className="searchinput" placeholder="search here by title" onChange={handleChange} value={searchInput} />
         </div>
        <div
          style={{
            display: "flex",
            justifyContent: "space-around",
            flexWrap: "wrap",
          }}
        >
          {articles.map((el) => el.role===String(selectedId) && (
            <div key={el._id}>
              <ArticleCard el={el} added={el.added} />
            </div>
          ))}  
        </div></div>
      )
    }
    else{ return (

      <div> 
        <div style={{display:"flex" ,justifyContent:"center",justifyItems:"center"}}>
        <select onChange={handleSelectChange} name="ids" id="ids" className="customselect" >
       
        <option>article</option>
               
               
                <option vlaue="traitement">traitement</option>
                
                <option value="accessoire">accessoire</option>
  
                <option value="nourriture">nourriture</option>
        </select>
           <input type="search"  className="searchinput" placeholder="search here by title" onChange={handleChange} value={searchInput} />
           </div>
          <div
            style={{
              display: "flex",
              justifyContent: "space-around",
              flexWrap: "wrap",
            }}
          >
            {filtredarticles.map((el) => el.role===String(selectedId) && (
              <div key={el._id}>
                <ArticleCard el={el} added={el.added} />
              </div>
            ))}  
          </div></div>
        )
    }
}
export default Articlelist;
