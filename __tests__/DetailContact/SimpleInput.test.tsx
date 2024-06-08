import React from 'react';
import {render, fireEvent} from '@testing-library/react-native';
import SimpleInput from '@/modules/DetailContact/SimpleInput';

describe('SimpleInput', () => {
  const mockOnChangeText = jest.fn();

  it('to match snapshot', () => {
    const {toJSON} = render(
      <SimpleInput
        value=""
        onChangeText={mockOnChangeText}
        title="First Name"
        isLoading={true}
        fieldName="testField"
      />,
    );

    expect(toJSON()).toMatchSnapshot();
  });

  it('renders correctly when not loading', () => {
    const {getByPlaceholderText, getByTestId} = render(
      <SimpleInput
        value="Hamal Saefudin"
        onChangeText={mockOnChangeText}
        title="First Name"
        isLoading={false}
        fieldName="firstName"
      />,
    );

    const input = getByPlaceholderText('First Name');
    expect(input.props.value).toBe('Hamal Saefudin');

    const icon = getByTestId('icon-pencil');
    expect(icon).toBeTruthy();
  });

  it('calls onChangeText', () => {
    const {getByPlaceholderText} = render(
      <SimpleInput
        value=""
        onChangeText={mockOnChangeText}
        title="First Name"
        isLoading={false}
        fieldName="firstName"
      />,
    );

    const input = getByPlaceholderText('First Name');
    fireEvent.changeText(input, 'New Value');
    expect(mockOnChangeText).toHaveBeenCalledWith('New Value', 'firstName');
  });
});
