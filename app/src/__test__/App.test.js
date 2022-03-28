import { render, screen } from '@testing-library/react';
import  ReactDOM  from 'react';
import App from '../App';
import { Provider } from 'react-redux';
import configureStore from 'redux-mock-store';
import reducer from '../store/fetchReducer'
import * as reactRedux from 'react-redux'
import {store} from '../store/fetchReducer'
import {dataobj} from '../data';


test('test suite', () => {
  const useSelectorMock = jest.spyOn(reactRedux, 'useSelector')
  const useDispatchMock = jest.spyOn(reactRedux, 'useDispatch')

})
/*
test('reducer check',()=>{
  const initialState = {data:dataobj.smallData, completeData: dataobj.data };
  expect(reducer(initialState, {})).toEqual(initialState);
})
*/
