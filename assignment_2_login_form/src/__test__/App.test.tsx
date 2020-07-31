import { mount } from 'enzyme';

import React from 'react';
import App from '../App';

describe('<App />', () => {
    test('render without crashing', () => {
        const wrapper = mount(<App />);
        expect(wrapper.length).toBe(1);
        wrapper.unmount();
    });
});