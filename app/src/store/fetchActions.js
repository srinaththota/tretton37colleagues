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
        fetch(url).then(res=>{
            console.log(res.body)
        }); 
        dispatch({
            type:actionTypes.FETCH,
            payload:'defg'
        })
    }
}

export default fetchData;