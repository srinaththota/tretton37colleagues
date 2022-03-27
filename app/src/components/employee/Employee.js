
import Grid from '@mui/material/Grid';
import Box from '@mui/material/Box';
import AlternateEmailIcon from '@mui/icons-material/AlternateEmail';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import TwitterIcon from '@mui/icons-material/Twitter';
import ImageList from '@mui/material/ImageList';
import ImageListItem from '@mui/material/ImageListItem';
import Typography from '@mui/material/Typography';

const Employee=props=>{
    
    return(
      <>
      <Box>
        
	   <ImageList sx={{ width:130, height: 80 }} cols={2} rowHeight={90} style={{ overflow: "hidden" }} >
  
      <ImageListItem>
        <img
            src={`${props.img}?w=164&h=164&fit=crop&auto=format`}
            srcSet={`${props.img}?w=164&h=164&fit=crop&auto=format&dpr=2 2x`}
            alt={props.name}
            loading="lazy"
        />
        </ImageListItem>
    </ImageList>
    
    </Box>
    <br/>
    <br/>
      <Grid container rowSpacing={1} columnSpacing={{ xs: 1, sm: 1, md: 1 }}>

  <Grid item xs={6} fontSize="1rem" alignItems="start" >
  <Typography noWrap>{props.name}</Typography>
   office: {props.office}
  </Grid>
  <Grid item xs={6} gridRow={2} alignItems="center" >
    <AlternateEmailIcon style={{ fontSize: 20 }}/>
    <LinkedInIcon style={{ fontSize: 20 }} />
    <TwitterIcon style={{ fontSize: 20 }} />
  </Grid>
 
</Grid>
      
      </>
        )
}
export default Employee