import React, { useState } from 'react';
import { AiOutlineMinus, AiOutlinePlus } from 'react-icons/ai';
const Question = (props) => {
  const {title,info}=props;
  const[showInfo,setShowInfo]=useState(false);
  const infoHandler = ()=>{
    setShowInfo(!showInfo);
  }
  return(
    <article className="question">
      <header>
        <h4>{title}</h4>
        <button className="btn" onClick={infoHandler}>{showInfo?<AiOutlineMinus/>:<AiOutlinePlus/>}</button>
      </header>
      {showInfo && <p>{info}</p>}
    </article>
  ); 
};

export default Question;
