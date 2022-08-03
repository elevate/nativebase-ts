import 'react-native-gesture-handler/jestSetup';
import { createDrawerNavigator } from '@react-navigation/drawer';

jest.mock('react-native-reanimated', () => {
  const Reanimated = require('react-native-reanimated/mock');

  // The mock for `call` immediately calls the callback which is incorrect
  // So we override it with a no-op
  Reanimated.default.call = () => {};

  return Reanimated;
});

jest.mock('@react-navigation/drawer', () => {
  jest.mock(
      '@react-navigation/drawer',
      async () =>
        await {
          createDrawerNavigator: jest.fn().mockReturnValue({
            Navigator: ({children}) => <>{children}</>,
            Screen: ({children}) => <>{children}</>,
          }),
        },
    );
});

// Silence the warning: Animated: `useNativeDriver` is not supported because the native animated module is missing
jest.mock('react-native/Libraries/Animated/NativeAnimatedHelper');