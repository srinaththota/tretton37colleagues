
import { useState } from 'react';
import Grid from '@mui/material/Grid';
import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';
import FilterListIcon from '@mui/icons-material/FilterList';

const Header = props => {
    const [name,setName] = useState('')
    
    const handleNameFilter =(e)=>{
        setName(e.target.value)
    }
    const filterOnClick=()=>{
        props.nameFilter(name)
    }
    const sortHander=() =>{
        props.sort()
    }
    return(
        
        <Grid container direction="row" spacing={{ xs: 2, md: 3}} columns={{ xs: 4, sm: 12, md: 12 }}>
            <Grid item xs={2} sm={3} md={3}>
            <TextField id="outlined-multiline-flexible"variant="standard" value={name} onChange={handleNameFilter}
             />
            </Grid >
            <Grid item xs={1} sm={3} md={3}>
            <Button onClick={filterOnClick} style={{fontSize:10,alignItems:'center'}}><FilterListIcon/></Button>
            </Grid>
            <Grid item xs={1} sm={3} md={3}>
            <Button onClick={sortHander}>Sort</Button>
            </Grid>
            
        
         </Grid>
        
    )
}

export default Header