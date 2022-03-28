import  ReactDOM  from 'react-dom';
import Header from '../../components/header/Header'

test("it shows elements to DOM",()=>{
    const div = document.createElement('div')
    ReactDOM.render(<Header />,div)
    ReactDOM.unmountComponentAtNode(div)
  })