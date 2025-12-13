import React from 'react';
import { render } from '@testing-library/react-native';
import Dashboard from '../../app/(main)/dashboard';

describe('Dashboard Screen', () => {
  it('exibe o título', () => {
    const { getByText } = render(<Dashboard />);
    expect(getByText(/dashboard/i)).toBeTruthy();
  });
});
