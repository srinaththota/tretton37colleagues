import  ReactDOM  from 'react-dom';
import Header from '../../components/header/Header'
import {shallow} from 'enzyme'
test("it shows elements to DOM",()=>{
    const div = document.createElement('div')
    ReactDOM.render(<Header />,div)
    ReactDOM.unmountComponentAtNode(div)
  })

  test('check if component exists',()=>{
      const wrapped = shallow(<Header/>)
  })