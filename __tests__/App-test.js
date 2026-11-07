/**
 * @format
 */

import 'react-native';
import React from 'react';
import App from '../Source/App';

// Note: test renderer must be required after react-native.
import renderer, {act} from 'react-test-renderer';

jest.mock('react-native/Libraries/Animated/src/NativeAnimatedHelper');

it('renders correctly', () => {
  let tree;
  act(() => {
    tree = renderer.create(<App />);
  });
  act(() => {
    tree.unmount();
  });
});
