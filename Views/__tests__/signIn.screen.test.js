import React from 'react';
import {render, fireEvent} from '@testing-library/react-native';
import SignIn from '../SignIn';

// Unit testing for signInButton in SignIn page
test('SignIn Screen', () => {
  it('Should go to News Home page'),
    () => {
      const navigation = {navigate: () => {}};
      spyOn(navigation, 'navigate');
      const page = render(<SignIn />);
      const signInButton = page.getByTestId('SignInButton');
      fireEvent.press(signInButton);
      expect(navigation.navigate).toHaveBeenCalledWith('Home');
    };
});
