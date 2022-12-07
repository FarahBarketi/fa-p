import React, { useState } from "react";
import Form from "react-bootstrap/Form";
import { useDispatch } from "react-redux";


import { add_article } from "../Redux/Action/articleAction";
import {  Link, useNavigate } from "react-router-dom";
import { useRef } from "react";
import  {useSelector} from "react-redux"
import { FaAngellist } from "react-icons/fa";
const Add = () => {
    const dispatch = useDispatch();

  
    const navigate = useNavigate();
    
    const [title, setTitle] = useState("");
    const [location, setLocation] = useState("");
    const [description, setDescription] = useState("");
    const [price, setPrice] = useState(0);
    const [image, setImage] = useState("");
    const [role, setRole] = useState("");
    const inputRef=useRef()
    const [file,setFile]=useState (null)
    const user = useSelector((state) => state.authReducer.user);
  const validation=  user?.role==="Baladia"
    // const editAddArticle=async(e)=>{
    // const config={
    //   headers:{
    //     token:localStorage.getItem('token')
    //   }}
    //   const data=new FormData ()
    //   data.append("image",e.target.files[0])
    //   try {
    //     await axios.put('/articles/uploadimage',data,config)
    // dispatch(get_articles())
    //   }catch (error){
    // console.log(error);
    //     }}
    const handleSubmit = (e) => {
      e.preventDefault();
      const added=user?.role
      dispatch(
        add_article({ title, location, description, price,image,role ,added}),
       (role==="article"||role==="traitement"||role==="accessoire"||role==="nourriture")?
        navigate("/articles"):
        navigate("/accouplement")
      );
    };
    console.log(role)
  return (
    <div  style={{
        margin: " 4rem auto ",
        marginLeft:'15rem'
      }}><div className="signup-container">
      <div className="left-container">
      <i>
       <h2>
        <FaAngellist/> Hello My Besties <FaAngellist/>
       </h2>
       
      </i>
      <div className="puppy">
        <img src="https://s3-us-west-2.amazonaws.com/s.cdpn.io/38816/image-from-rawpixel-id-542207-jpeg.png" />
      </div>
    </div>
    <div className="right-container">
      <header>
        <h2>Add your choice to sell </h2>
        <div className="set">
          <div className="pets-name">
            <label htmlFor="pets-name">Title</label>
            <input id="pets-name"  type="text"  placeholder="title"
                onChange={(e) => setTitle(e.target.value)}
                value={title}/>
          </div>
          <div className="pets-photo" style={{display:"block",margin:"0 5px 0 0"}}>
          <label htmlFor="pets-name" >image</label>
             <input id="pets-name"  type="text"  placeholder="image"
                style={{marginTop:"5px"}}
                onChange={(e) => setImage(e.target.value)}
                value={image}/>
          </div>
        </div>
        <div className="set">
          <div className="pets-breed">
            <label htmlFor="pets-breed">Price</label>
            <input id="pets-breed" type="Number" placeholder="price"
                onChange={(e) => setPrice(e.target.value)}
                value={price} />
          </div>
          <div className="pets-birthday">
            <label htmlFor="pets-birthday">location</label>
            <input id="pets-birthday"  type="text" placeholder="location"
                onChange={(e) => setLocation(e.target.value)}
                value={location} />
          </div>
        </div>
        <div className="set">
          <div className="pets-gender">
            <label htmlFor="pet-gender-female">Descreption</label>
            <div className="radio-container">
              <input
                id="pet-gender-female"
                name="pet-gender"
                type="textarea"
                rows={3}
                onChange={(e) => setDescription(e.target.value)}
                value={description}
              />
               
             
            </div>
          </div>
         
        </div>
        <Form.Label>Role</Form.Label>
            <Form.Select onChange={(e) => setRole(e.target.value)} value={role}>
              <option>choose your role</option>
              {!validation && (   <option>article</option>)}            
           <option>dressage</option>
              <option>accouplement</option>
              <option>vaccination</option>
              {!validation && (   <option>traitement</option>)}
              {!validation && (   <option>nourriture</option>)}
              {!validation && (   <option>accessoire</option>)}

             
              <option>achat</option>            
            </Form.Select>
      
      </header>
      <footer>
        <div className="set">
          <button id="back" ><Link to="/home">Back</Link></button>
          <button id="next" onClick={handleSubmit}>Save</button>
        </div>
      </footer>
    </div>
  </div>
  </div>
  )
}

export default Add