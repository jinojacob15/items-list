import React from 'react';
import {configure,mount} from 'enzyme'
import Adapter from 'enzyme-adapter-react-16';
import { MemoryRouter } from 'react-router';
import App from './App';
import LoginForm from 'pages/LoginPage';
import ItemsList from 'pages/ItemsList';
import CreateItem from 'pages/CreateItem'
import MutationObserver from 'mutation-observer'
import GenericNotFound from 'pages/GenericNotFound';
import ItemsContext from 'context/items-context';

global.MutationObserver = MutationObserver

configure({adapter: new Adapter()});

describe('main app', () => {
  
    
  test('route for login page', () => {
    const wrapper = mount(
      <MemoryRouter initialEntries={[ '/' ]}>
        <App/>
      </MemoryRouter>
    );
    
    expect(wrapper.find(LoginForm)).toHaveLength(1);
  });
  test('route for items list', () => {
    const wrapper = mount(
      <MemoryRouter initialEntries={[ '/items' ]}>
         <ItemsContext.Provider
            value={{
              items:[],
              userName:'admin'
            }}
          >
        <App/>
        </ItemsContext.Provider>
      </MemoryRouter>
    );
  
    expect(wrapper.find(ItemsList)).toHaveLength(1);
  });
  test('route for create page', () => {
    const wrapper = mount(
      <MemoryRouter initialEntries={[ '/create' ]}>
        <App/>
      </MemoryRouter>
    );
    expect(wrapper.find(CreateItem)).toHaveLength(1);
  });
  test('route for edit', () => {
    const wrapper = mount(
      <MemoryRouter initialEntries={[ '/edit/:'+19912882 ]}>
        <App/>
      </MemoryRouter>
    );
    expect(wrapper.find(CreateItem)).toHaveLength(1);
  });
  test('not found', () => {
    const wrapper = mount(
      <MemoryRouter initialEntries={[ '/random' ]}>
        <App/>
      </MemoryRouter>
    );
    
    expect(wrapper.find(GenericNotFound)).toHaveLength(1);
  });
  
});
