import {shallow} from 'enzyme'
import React from 'react'
import Header from './Header'
import Enzyme from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';

Enzyme.configure({ adapter: new Adapter() });

it('expect to render Header component',()=>{
    expect(shallow(<Header/>)).toMatchSnapshot();
})