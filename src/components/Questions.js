import { useEffect, useState } from "react";
import React from 'react';
// import data from "../database/data";
import "../styles/App.css";
import { useDispatch, useSelector } from "react-redux";
// custom hooks
import { useFetchQuestion } from "../hooks/FetchQuestion";
import { updateResult } from "../hooks/setResult";

// ...................................................................................//
function Questions({onChecked}) {
    const [checked, setChecked] = useState(undefined);
    const {trace} = useSelector(state =>state.questions)
    const result = useSelector(state =>state.result.result)
    const[{isLoading,apiData,serverError}] = useFetchQuestion();
    useSelector(state=> console.log(state));

    const questions= useSelector(state =>state.questions.queue[state.questions.trace]);
    const dispatch = useDispatch();

    useEffect(() => {
        console.log({trace,checked})
        dispatch(updateResult({trace,checked}));
      },[checked]);
      
    function onSelect(i) {
        onChecked(i);
        setChecked(i);
        dispatch(updateResult({trace,checked}));

    }
    if(isLoading) return <h3 className='text-light'>isLoading</h3>
    if(serverError) return <h3 className='text-light'>{serverError || "unknown Error"}</h3>
      
    // const question = apiData[0];

    return (
        <>
            <div className="questions">
                <h2 className="text-dark">{questions?.question}</h2>
                <ul key={questions?.id}>
                    {questions?.options.map((q, i) => (
                        <li key={i}>
                            <input
                                type="radio"
                                value={false}
                                name="options"
                                id={`${q}${i}-option`}
                                onChange={()=> onSelect(i)}
                            />
                            <label htmlFor={`q${i}-option`} className="text-primary">{q}</label>
                            <div className={`check ${result[trace]=== i ? 'checked' : ''}`}></div>
                        </li>
                    ))}
                </ul>
            </div>
        </>
    );
}

export default Questions;
