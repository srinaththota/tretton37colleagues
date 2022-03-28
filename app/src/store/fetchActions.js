import * as actionTypes from './actionTypes'
export const fetchData=()=>{
    console.log("fetch data is called")
    return dispatch=>{
       // const url=process.env.PUBLIC_URL
        const url = "http://api-dev.1337co.de/v3/employees"
        let headers = {"Content-Type": "application/json"};
        let token = process.env.TOKEN
        //let token = ' 
        
            if (token) {
            headers["Authorization"] = `${token}`;
            }
        fetch(url).then(res=> res.json()).then(data=>{

            dispatch({
                type:actionTypes.FETCH,
                payload:data
            }) 
        }).catch(err=>{
            dispatch({
                type:actionTypes.ERROR,
                payload:err.message
            })  
        }); 
       
    }
}

export default fetchData;