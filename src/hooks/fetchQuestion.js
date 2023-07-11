import React, { useState } from "react"
/* fetch question from fetch api and set value to store*/

export const useFetchQuestion = () => {
    const [getData,setGetData] = useState({isLoading: false,apiData:[],serverError:null});

    useEffect(() => {
        setGetData(prev => ({...prev,isLoading:true}))

        //async function fetch the backend data
        
        (async () => {
            try{

            }catch(error){
                setGetData(prev => ({...prev,isLoading:true}))
                setGetData(p => ({...prev,serverError:error}))
            }
        })
            
    })
}