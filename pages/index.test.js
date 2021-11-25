const enzyme = require('enzyme');
const Adapter = require('enzyme-adapter-react-16');

enzyme.configure({ adapter: new Adapter() });

import React from 'react';
import renderer from 'react-test-renderer';

it('renders correctly', () => {
  
});