import {shallow} from 'enzyme'
import React from 'react'
import TodosList from './TodosList'
import Enzyme from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import {useState} from 'react'

Enzyme.configure({ adapter: new Adapter() });

it('expect to render TodoList component',()=>{
    const todos=[{
        id:1,
        title:'first todo',
        completed:false
    },{
        id:2,
        title:'second todo',
        completed:false
    },{
        id:1,
        title:'third todo',
        completed:false
    }]

    expect(shallow(<TodosList todos={todos}
        />)).toMatchSnapshot();
})