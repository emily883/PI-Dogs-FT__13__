import React from 'react';
import { Link } from 'react-router-dom';
import { configure, shallow } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';

import Navbar from './navbar';

configure({adapter: new Adapter()});

describe('<Navbar />', () => {
  let wrapper
  beforeEach(() => {
    wrapper = shallow(<Navbar />)
  })

  it('Deberia renderizar tres <Link />', () => {
    expect(wrapper.find(Link)).toHaveLength(3);
  });
  it('El segundo Link debe tener el texto "Home" y cambiar la ruta hacia "/home".', () => {
    expect(wrapper.find(Link).at(1).prop('to')).toEqual('/home');
    expect(wrapper.find(Link).at(1).text()).toEqual('Home');
  });
  it('El tercer Link debe tener el texto "Create breed" y cambiar la ruta hacia "/create"', () => {
    expect(wrapper.find(Link).at(2).prop('to')).toEqual('/create');
    expect(wrapper.find(Link).at(2).text()).toEqual('Create breed');
  });
})