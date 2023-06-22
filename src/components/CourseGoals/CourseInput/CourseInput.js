import React, { useState } from 'react';

import Button from '../../UI/Button/Button';
import './CourseInput.css';
var content = (
  <p style={{ textAlign: 'center' }}>name field not be empty</p>
);
const CourseInput = props => {
  const [enteredValue, setEnteredValue] = useState('');
  const [enteredAge, setEnteredAge] = useState('');
  const [isValid , setIsValid]  =useState(true);
  const [isAuth , setIsAuth]  =useState(true);

  
  const goalInputChangeHandler = event => {
    if(event.target.value.trim().length>0){
      setIsValid(true);
    }
    setEnteredValue(event.target.value);
  };

  
  const goalInputNumberChangeHandler = event => {
    if(event.target.value.trim().length>0){
      setIsValid(true);
    }
    setEnteredAge(event.target.value);
  };

  const formSubmitHandler = event => {
    event.preventDefault();
    console.log("enterAge===",enteredAge,isAuth)
if(enteredValue.trim().length===0 && enteredAge.trim().length===0){
  content = <p style={{ textAlign: 'center' }}>name and age  field not to be empty</p>
setIsAuth(false);
  setEnteredAge('');
  setEnteredValue('');
  return;
}
    
     if(enteredValue.trim().length===0 ){
      content = <p style={{ textAlign: 'center' }}>name field not be empty</p>
      setIsValid(false);
       setIsAuth(false)
       setEnteredAge('');
       setEnteredValue('');
       return;
     }

     if(enteredAge.trim().length===0 ){
      content = <p style={{ textAlign: 'center' }}>Age field not be empty</p>
      setIsValid(false);
    setIsAuth(false);
    setEnteredAge('');
  setEnteredValue('');
    return;
     }
     if(enteredValue.trim().length>0 && enteredAge.trim()<=0){
        console.log("ageee===", enteredAge);
      content = <p style={{ textAlign: 'center' }}> `age  field  {enteredAge} is invalid</p>
      setEnteredAge('');
      setEnteredValue('');
      setIsAuth(false);
      return;
    }
   
     props.onAddGoal(enteredValue);
  };

  const removeAuth =()=>{
    setIsAuth(true);
  }
   
  return (
    <>
    {!isAuth && (
      <div>
    <div>
      <h3>{content}</h3>
      <input style={{alignContent: 'center', justifyContent: 'center'}} type='button' value="cancel" onClick={removeAuth} />
    </div>
   </div>
    )}
   
    <form onSubmit={formSubmitHandler}>
      <div className={`form-control ${isValid?'': 'invalid'}`} >
        <label>name</label>
        <input  type="text" value={enteredValue} onChange={goalInputChangeHandler} />
        <label>age</label>
        <input value={enteredAge} type="number" onChange={goalInputNumberChangeHandler} />
      
      </div>
      <div className={ `form-control ${isValid?'' :'invalid'}` }>
      <button  
       type="submit">Add Goal</button>
    </div>
    </form>
    </>
  );
};

export default CourseInput;
