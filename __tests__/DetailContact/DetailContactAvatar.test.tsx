import React from 'react';
import {render, fireEvent} from '@testing-library/react-native';
import DetailContactAvatar from '@/modules/DetailContact/DetailContactAvatar';

describe('DetailContactAvatar', () => {
  const mockSource = 'https://example.com/photo.jpg';
  const mockOnPress = jest.fn();

  it('to match snapshot', () => {
    const {toJSON} = render(
      <DetailContactAvatar
        isLoading={false}
        onPress={mockOnPress}
        source={mockSource}
      />,
    );
    expect(toJSON()).toMatchSnapshot();
  });

  it('renders correctly when not loading', () => {
    const {getByTestId} = render(
      <DetailContactAvatar
        isLoading={false}
        onPress={mockOnPress}
        source={mockSource}
      />,
    );

    const image = getByTestId('contact-avatar-image');
    expect(image.props.source.uri).toBe(mockSource);

    const icon = getByTestId('contact-avatar-icon');
    expect(icon).toBeTruthy();
  });

  it('calls onPress when pressed', () => {
    const {getByTestId} = render(
      <DetailContactAvatar
        isLoading={false}
        onPress={mockOnPress}
        source={mockSource}
      />,
    );

    fireEvent.press(getByTestId('contact-avatar-btn'));
    expect(mockOnPress).toHaveBeenCalled();
  });
});
