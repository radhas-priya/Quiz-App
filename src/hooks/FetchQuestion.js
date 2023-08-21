    import { useState ,useEffect } from "react";
import data,{answers} from "../database/data";
// import { questions,answers } from "../../../server/database/data";
import * as Action from "../redux/question_reducer"
import { useDispatch } from "react-redux";
import { getServerData } from "../helper/helper";
    /* fetchquestion hook to fetch api data and sety value to store */

    export const useFetchQuestion=()=>{
        const dispatch = useDispatch();
       const [getData,setGetData] = useState({isLoading:false,apiData:[],serverError:null});
       useEffect(() => {
        setGetData(prev => ({ ...prev, isLoading: true }));
      
        // async function fetch backend data
        (async () => {
          try {
            
            const [{questions,answers}]= await getServerData(`${process.env.REACT_APP_SERVER_HOSTNAME}/api/questions`, (data) => data);
            console.log({questions,answers}); // Log specific properties or values here, not the entire response object
            
            if (questions.length > 0) {
              setGetData(prev => ({
                ...prev,
                isLoading: false,
                apiData: {questions}
              }));
              // dispatch an action
              dispatch(Action.startExamAction({question:questions, answers}));

            } else {
              throw new Error("No question Available");
            }
          } catch (error) {
            setGetData(prev => ({
              ...prev,
              isLoading: false,
              serverError: error,
            }));
          }
        })();
      },[dispatch,data]);
     
      
       return[getData,setGetData]
    }
    


    export const moveNextQuestion = () => async(dispatch)=>{
      try{
           dispatch(Action.moveNextAction());

      }catch(error){
        console.log(error)
      }
    }
    export const movePrevQuestion = () => async(dispatch)=>{
      try{
           dispatch(Action.movePrevAction()); /**it is going to decrease the trace value */

      }catch(error){
        console.log(error)
      }
    }


