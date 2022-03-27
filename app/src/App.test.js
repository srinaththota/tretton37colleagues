import { render, screen } from '@testing-library/react';
import App from './App';
import { Provider } from 'react-redux';
import configureStore from 'redux-mock-store';
import reducer from './store/fetchReducer'
import * as redux from 'react-redux'
import {store} from './index'
import {dataobj} from './data';
const spy = jest.spyOn(redux, 'useSelector')
spy.mockReturnValue({ username:'test' })

test('renders learn react link', () => {
  const initialState = {data:[20], completeData: [10] };
    
  render(
  <Provider store={store}>
  <App />
  </Provider>);
  
//
});

test('reducer check',()=>{
  const initialState = {data:dataobj.smallData, completeData: dataobj.data };
  expect(reducer(initialState, {})).toEqual(initialState);
})
