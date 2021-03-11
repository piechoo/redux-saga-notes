import { shallow } from 'enzyme';


import Tags from '../components/Tags';

it('renders welcome message', () => {
    const wrapper = shallow(<Tags tags = 'jeden,dwa,trzydziesci dwadziescia' />);
    const welcome = 'dwa';
    expect(wrapper.contains(welcome)).toEqual(true);
});