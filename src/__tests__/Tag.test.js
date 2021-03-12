import { shallow } from 'enzyme';


import Tags from '../components/Tags';

it('renders tag passed with props', () => {
    const wrapper = shallow(<Tags tags = 'jeden,dwa,trzydziesci dwadziescia' />);
    const checker = 'dwa';
    expect(wrapper.contains(checker)).toEqual(true);
});