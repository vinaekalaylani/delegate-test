const enzyme = require('enzyme');
const Adapter = require('enzyme-adapter-react-16');

enzyme.configure({ adapter: new Adapter() });

import React from 'react';
import renderer from 'react-test-renderer';
import Sidebar from '../components/sidebar'

it('renders correctly', () => {
  const tree = renderer
    .create(<Sidebar />)
    .toJSON();
  expect(tree).toMatchSnapshot();
});