
import { shallow } from 'enzyme';


import App from '../App';

it('renders welcome message', () => {
  const wrapper = shallow(<App />);
  const checker = 'WEBCON Notes';
  expect(wrapper.contains(checker)).toEqual(true);
});
