import { useSelector } from "react-redux";
import { Navigate } from 'react-router-dom';
import axios from "axios"; 




export function attemptsNumber(result){
    return result.filter(r =>r!== undefined).length;
}
export function earnPointsNumber(result,answers){
    return result.map((element,i) => answers[i]===element).filter(i=>i).map(i=>10).reduce((prev,curr)=>prev +curr ,0);
}

export function  flagResult(totalPoints,earnPoints){
    return (totalPoints *50/100)<earnPoints
    // earn 50% for getting passv
}


// .............check user id
export function CheckUserExist({children}){
const auth =useSelector(state=>state.result.userId)
return auth? children : <Navigate to={'/'} replace={true}></Navigate>
}

// get server data
export async function getServerData(url,callback){
 const data = (await axios.get(url))?.data;
 return callback? callback(data):data;
}
getServerData("http://localhost:8080/api/result")

//post server data
// export async function postServerData(url,result,callback){
//     const data = (await axios.post(url,result))?.data;
//     return callback? callback(data):data;
//    }