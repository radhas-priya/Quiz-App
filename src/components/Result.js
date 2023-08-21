import React, { useEffect } from 'react'
import { Link } from 'react-router-dom'
import ResultTable from './ResultTable'
import "../styles/Result.css";
import { useDispatch } from 'react-redux';
import { useSelector } from 'react-redux'
import { attemptsNumber, earnPointsNumber ,flagResult} from '../helper/helper';
// import actions

import { resetAllAction } from '../redux/question_reducer';
import { resetResultAction } from '../redux/result_reducer';
function Result() {
  const dispatch = useDispatch();
 const { questions:{queue,answers}, result: {result,userId}}= useSelector(state => state);
     useEffect(()=>{
        console.log(flag);
     })
   const totalPoints = queue.length *10;
   const attempts = attemptsNumber(result);
   const earnPoints= earnPointsNumber(result,answers,10);
   const flag = flagResult(totalPoints,earnPoints)
    function onRestart(){
        dispatch(resetAllAction());
        dispatch(resetResultAction());
    }
  return (
    <>
     <div className="container">
        <h1 className="title text-light">....</h1>
        <div className= "result flex-center">
            <div className="flex">
                <span>Username</span>
                <span className='bold'>quiz hub</span>
            </div>
        </div>

        <div className= "result flex-center">
            <div className="flex">
                <span>Total quiz points:</span>
                <span className='bold'>{totalPoints || 0}</span>
            </div>
            <div className="flex">
                <span>Total Questions</span>
                <span className='bold'>{queue.length || 0}</span>
            </div>
            <div className="flex">
                <span>Total Attempts</span>
                <span className='bold'>{attempts || 0 }</span>
            </div>
            <div className="flex">
                <span>Total Earn points</span>
                <span className='bold'>{earnPoints || 0}</span>
            </div>
            <div className="flex">
                <span>Quiz result</span>
                <span style={{color:`${flag? "green":"red"}`}} className='bold'>{flag ? "passed" : "Failed"}</span>
            </div>
            

        </div>
        <div className="start">
            <Link className='btn' to={'/'} onClick={onRestart}>Restart</Link>
        </div>
        <div className="container">
            {/* result table*/}
            <ResultTable></ResultTable>
        </div>
     </div>

      
    </>
  )
}

export default Result
