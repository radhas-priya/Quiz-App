import React, { useEffect } from 'react'
import { useState } from 'react';
import Questions from './Questions'
// redux store inport 
import {useSelector, useDispatch} from "react-redux"
import { moveNextQuestion, movePrevQuestion } from '../hooks/FetchQuestion';
import { pushAnswer } from '../hooks/setResult.js';
import {Navigate} from 'react-router-dom';
function Quiz() {

  const [check, setChecked] = useState(undefined);

  const result = useSelector(state=>state.result.result)
  const {queue,trace} = useSelector(state=>state.questions)
  const dispatch = useDispatch()
  

    //next button event handler
    // update trace value when we click on next function();
   function onNext(){
        console.log("on next click")
        if(trace<queue.length){
          // increase the trace value .
          dispatch(moveNextQuestion());

// insert new value

          if(result.length <= trace) {
            dispatch(pushAnswer(check));
          }
        }
        // reset the value of check variable.
        setChecked(undefined);
    }

    //preview button event handler
    function onPrev(){
        console.log("on preview click")
        if(trace>0){
          dispatch(movePrevQuestion());
          //it will take us to previous question.

        }

    }
    function onChecked(check){
      console.log(check)
      setChecked(check)
    }
    // finished exam 
    if(result.length && result.length >=queue.length){
      return <Navigate to={'/result'} replace={true}></Navigate>  
    }

  return (
    <>
    <div className="container">
        <h1 className="title text-dark ">QUIZ APPLICATION</h1>
    </div>
      
       <Questions onChecked={onChecked}/>
      <div className = "grid">
      
      {trace>0 ? <button className ='btn prev' onClick={onPrev}>Prev</button> : <div></div> }
        <button className='btn next' onClick={onNext}>Next</button>
      </div>

    </>

  )
}

export default Quiz
