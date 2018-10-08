import React from 'react';
import ReactDOM from 'react-dom';
import App from '../../App';
import { shallow, mount} from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import { configure } from 'enzyme';
configure({ adapter: new Adapter() });

describe('App', () => {
  let wrapper;

  beforeEach(() => {
    wrapper = shallow(<App />)
  })

  it('renders without crashing', () => {
    const div = document.createElement('div');
    ReactDOM.render(<App />, div);
  });

  it('matches the snapshot', () => {
    expect(wrapper).toMatchSnapshot()
  })

  it('addSelectedDistrict adds a district to selectedDistricts in state', () => {
    const initialState = [];
    const mockDistrict = {location: 'Colorado', stats: { 2014: 1 }, state: true}
    const expected = [{location: 'Colorado', stats: { 2014: 1 }, state: true}]
    const addSelectedDistrict = jest.fn()

    wrapper.setState({ selectedDistricts: initialState })
    wrapper.instance().addSelectedDistrict(mockDistrict)

    expect(wrapper.state('selectedDistricts')).toEqual(expected)
    expect(wrapper.state('selectedDistricts').length).toEqual(1)
  })

  it('removeSelectedDistrict removes a selectedDistrict from state', () => {
    const mockDistrict = {location: 'Colorado', stats: { 2014: 1 }, state: true}
    const initialState = [{location: 'Colorado', stats: { 2014: 1 }, state: true}]
    const expected = []

    wrapper.setState({ selectedDistricts: initialState })
    wrapper.instance().removeSelectedDistrict(mockDistrict)

    expect(wrapper.state('selectedDistricts')).toEqual(expected)
  })
})
