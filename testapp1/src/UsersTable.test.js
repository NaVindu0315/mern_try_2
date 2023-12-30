import React from 'react';
import { render, screen } from '@testing-library/react';
import UsersTable from './UsersTable';

test('renders the table with data', () => {
  const rows = [
    { id: 1, name: 'Alice' },
    { id: 2, name: 'Bob' },
  ];
  const selectedUser = jest.fn();
  const deleteUser = jest.fn();

  render(<UsersTable rows={rows} selectedUser={selectedUser} deleteUser={deleteUser} />);

  expect(screen.getByText('ID')).toBeInTheDocument();
  expect(screen.getByText('Name')).toBeInTheDocument();
  expect(screen.getByText('Actions')).toBeInTheDocument();
  expect(screen.getAllByRole('cell', { name: /Alice/i })).toHaveLength(2);
  expect(screen.getAllByRole('cell', { name: /Bob/i })).toHaveLength(2);
});
