import 'jsdom-global/register';
import Header from '../../components/header/Header'
import Dashboard from '../../components/dashboard/Dashboard'
import {shallow} from 'enzyme'
import { Provider } from 'react-redux'

let wrapped

beforeEach(()=>{
    wrapped=mount(
        <Provider store={store}>
            <Dashboard />
        </Provider>
    )
})
test('check if component exists',()=>{
     wrapped = shallow(<Dashboard/>)

    expect(wrapped.find(Header))
})