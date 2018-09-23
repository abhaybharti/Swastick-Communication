import React from 'react';
import { shallow } from 'enzyme';
import toJson from 'enzyme-to-json';
import configureStore from 'redux-mock-store'; // Smart components
import About from '../../src/containers/about/index' //component to be tested

describe('<About />', () =>{
  describe('render()',() =>{
      test('render the component', () =>{
        const wrapper = shallow(<About/>);
        const component = wrapper.dive();
        expect(toJson(component)).toMatchSnapshot();
      });
  });
});