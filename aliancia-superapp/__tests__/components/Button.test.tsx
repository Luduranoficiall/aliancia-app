import React from 'react';
import { render } from '@testing-library/react-native';
import Button from '../src/components/Button';

describe('Button', () => {
  it('renderiza corretamente', () => {
    const { getByText } = render(<Button title="Testar" onPress={() => {}} />);
    expect(getByText('Testar')).toBeTruthy();
  });
});
