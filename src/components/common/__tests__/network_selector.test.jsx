jest.mock('react-redux', () => ({
  connect: () => component => component,
}));

import React from 'react';
import { shallow } from 'enzyme';
import toJson from 'enzyme-to-json';

import NetworkSelector from '../network_selector';

const networks = [{
  enabled: true,
}, {
  enabled: false,
}];

describe('<NetworkSelector />', () => {
  test('renders correctly', () => {
    const component = shallow(
      <NetworkSelector
        networks={networks}
      />,
    );

    expect(toJson(component)).toMatchSnapshot();
  });
});
