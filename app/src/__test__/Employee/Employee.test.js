import Employee from '../../components/employee/Employee'
import {shallow} from 'enzyme'
import Box from '@mui/material/Box'

test('check if component exists',()=>{
    const wrapped = shallow(<Employee/>)
    expect(wrapped.find(Box))
})