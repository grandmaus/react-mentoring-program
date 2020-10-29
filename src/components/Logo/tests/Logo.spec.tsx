import React from 'react';
import { BrowserRouter as Router } from 'react-router-dom';
import renderer from 'react-test-renderer';
import Logo from '../Logo';

describe('Logo', () => {
  it('should render correctly', () => {
    const tree = renderer
      .create(
        <Router>
          <Logo url="https://www.page.com" />
        </Router>,
      )
      .toJSON();
    expect(tree).toMatchSnapshot();
  });
});
