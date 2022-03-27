import { useState,useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux' 
import Grid from '@mui/material/Grid';
import Box from '@mui/material/Box';
import Employee from '../employee/Employee';
import Header from '../header/Header'
import { Item , HeaderItem, BoxItem, useStyles} from './DashboardStyles' 
import InfiniteScroll from 'react-infinite-scroll-component';

import { fetchData } from '../../store/fetchActions'
const Dashboard = props => {
  const [changeView,setChangeView] = useState(true)
  const [direct,setDirect]=useState("row")
  const [count, setCount] = useState({
    prev: 0,
    next: 10
  })
  //const data=useSelector(state=>state.data.data)  
  const data = useSelector(state=>state.data.completeData)
  console.log(data)
  const [defaultData,setData]=useState(data)
  const [current, setCurrent] = useState(data.slice(count.prev, count.next))
  const [hasMore, setHasMore] = useState(true);
  const getMoreData = () => {
    if (current.length === data.length) {
      setHasMore(false);
      return;
    }
    setTimeout(() => {
      setCurrent(current.concat(data.slice(count.prev + 10, count.next + 10)))
    }, 2000)
    setCount((prevState) => ({ prev: prevState.prev + 10, next: prevState.next + 10 }))
  }
  
  
  const fetchDispatch=useDispatch();

    useEffect(()=>{
      async function fetchDataFromserver(){
      await fetchDispatch(fetchData())
      }
      fetchDataFromserver()
    },[fetchDispatch])
    
  console.log(data)
    const classes=useStyles();
   const handleChangeView = ()=>{
     if(changeView){
       setDirect("column")
     }else{
       setDirect("row")
     }
      setChangeView(!changeView)
   }
   const sortDataByName=()=>{
     const newSortedData=[...defaultData]
     setData(newSortedData.sort((a,b)=>{
       if(a.name>b.name){
         return 1
       }else if(a.name < b.name){
         return -1
       }else{
        if(a.office >b.office){
          return 1
        }else{
          return -1;
        }
       } 
    }))
  }
  const nameFilterHandler = (name) => {
    console.log("*",name,"*")
    if(name.trim()===""){
      const newData=[...data]
      setData(newData)
      return  
    }
    const newFilteredData = [...defaultData]
    setData(newFilteredData.filter(a=>a.name === name))
  }

  const loadingHandler = ()=>{
    console.log("Loading")
  }
    return(
      <>
      <h3>The fellowship of tretton37</h3>
      <center onClick={handleChangeView} style={{curser:'pointer'}}>ChangeView</center>
      
      
      <BoxItem>
        <Box className={classes.root}>
          
          <HeaderItem><Header 
                      changeView={handleChangeView} 
                      sort={sortDataByName} 
                      nameFilter={nameFilterHandler}/></HeaderItem>
          <InfiniteScroll
          dataLength={current.length}
          next={getMoreData}
          hasMore={hasMore}
          loader={loadingHandler}>
           
        <Grid container direction={direct} spacing={{ xs: 2, md: 3 }} columns={{ xs: 4, sm: 8, md: 12 }}>
        
    
      
          
        {defaultData.map((rec, index) => (
          <Grid item  xs={2} sm={4} md={3} key={index}>
           <Item><Employee name={rec.name}
                          office={rec.office}
                          img={rec.imagePortraitUrl}>{rec.name}</Employee></Item>
          </Grid>
        ))}
      </Grid>
      </InfiniteScroll>
      </Box>
      </BoxItem>
    
      </>
    )
}

export default Dashboard