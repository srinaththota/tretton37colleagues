import { styled } from '@mui/material/styles';
import Paper from '@mui/material/Paper';

export const ImageItem = styled(Paper)(({ theme }) => ({
    backgroundColor: theme.palette.mode === 'dark' ? '#1A2027' : '#fff',
    ...theme.typography.body2,
    padding: theme.spacing(1),
    textAlign: 'center',
    color: theme.palette.text.secondary
  }));
 export const BoxItem = styled(Paper)(({ theme }) => ({
    backgroundColor: theme.palette.mode === 'dark' ? '#1A2027' : '#b4b4b4',
    ...theme.typography.body2,
    padding: theme.spacing(1),
    textAlign: 'center',
    margin:"20px",
    height:80
  }));
 export const Item = styled(Paper)(({ theme }) => ({
    backgroundColor: '#fff',
    fontFamily:'bold',
    fontSize:'.7rem',
  }));
  