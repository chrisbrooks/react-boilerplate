import React from 'react';
import { shallow } from 'enzyme';
import App from '../App';

describe('<App />', () => {
  it('should check the Default layout is rendered', () => {
    const wrapper = shallow(<App />);
    expect(wrapper.find('.Container').length).toBe(1);
  });
});
