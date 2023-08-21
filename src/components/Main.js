import React, { useRef } from 'react'
import { Link } from 'react-router-dom'
import {useDispatch} from 'react-redux';
import '../styles/App.css';
import { setUserId } from '../redux/result_reducer';
function Main() {
    const inputRef =useRef(null);
    const dispatch = useDispatch();

    function startQuiz(){
        if(inputRef.current?.value){
            dispatch(setUserId(inputRef.current?.value))
        }

    }
  return (
    <>
    <div className='container classContainer'  >
        <h1 className='title'>QUIZ APPLICATION</h1>
        <ol>
            <li>you will be asked 10 questions one after another </li>
            <li>10 points for each correect answer.</li>
            <li>You an review and change answers before the quiz finish </li>
            <li>The result will be declared at the end of the quiz. </li>
        </ol>
        <form id="form">
            <input ref={inputRef} type = "text" placeholder = "Username"/>
        </form>

        <div className = "start">
            <Link className = "btn" to = {'quiz'} onClick={startQuiz} >Start quiz</Link>

        </div>
    </div>
     
    </>
  )
}

export default Main
