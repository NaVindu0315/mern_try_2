import React from 'react';
import { render, screen } from '@testing-library/react';
import Users from './Users'; // Path to your component

test('Initial state should be empty users array', () => {
  render(<Users />);
  const usersTable = screen.getByTestId('users-table');
  expect(usersTable).toBeEmpty();
});
