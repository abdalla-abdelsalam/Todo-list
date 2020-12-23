import {shallow} from 'enzyme'
import React from 'react'
import Form from './Form'
import Enzyme from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';

Enzyme.configure({ adapter: new Adapter() });

it('expect to render Form component',()=>{
    expect(shallow(<Form/>)).toMatchSnapshot();
})