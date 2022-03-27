import { styled } from '@mui/material/styles';
import { makeStyles } from '@mui/styles';
import Paper from '@mui/material/Paper';

export const Item = styled(Paper)(({ theme }) => ({
    backgroundColor: theme.palette.mode === 'dark' ? '#1A2027' : '#fff',
    ...theme.typography.body2,
    padding: theme.spacing(1),
    textAlign: 'center',
    height: 220,
    color: theme.palette.text.secondary,
  }));
 export const HeaderItem = styled(Paper)(({ theme }) => ({
    backgroundColor: theme.palette.mode === 'dark' ? '#1A2027' : '#fff',
    ...theme.typography.body2,
    padding: theme.spacing(1),
    textAlign: 'center',
    marginBottom:"10px",
    height:40,
    color: theme.palette.text.secondary,
  }));
 export const BoxItem = styled(Paper)(({ theme }) => ({
    backgroundColor: theme.palette.mode === 'dark' ? '#1A2027' : '#C9CAC5',
    ...theme.typography.body2,
    padding: theme.spacing(1),
    textAlign: 'center',
    margin:"20px"
  }));
 export const useStyles = makeStyles({
    root: {
      minWidth: 200,
      padding: "20px",    
    },
   boxstyles:{
     backgroundColor:"#b4b4b4",
     boxShadow:"rgba(0, 0, 0, 0.35) 0px 5px 15px;"
   }
  //other styles and classes//
  })