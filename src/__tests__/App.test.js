import { render, screen } from '@testing-library/react';
import { shallow } from 'enzyme';


import App from '../App';

it('renders welcome message', () => {
  const wrapper = shallow(<App />);
  const welcome = 'WEBCON Notes';
  expect(wrapper.contains(welcome)).toEqual(true);
});
