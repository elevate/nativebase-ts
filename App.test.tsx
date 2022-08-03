import 'react-native';
import React from 'react';
import renderer, { act, ReactTestRendererJSON } from "react-test-renderer";

import App from './App';

describe('<App />', () => {
  it('has 1 child', () => {

    let tree;
    act(() => {
      const element = renderer.create(<App />);
      tree = element.toJSON();
    });

    // @ts-ignore
    expect(tree.children.length).toBe(1);
  });
});
