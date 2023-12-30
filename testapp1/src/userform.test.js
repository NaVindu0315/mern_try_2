import React from 'react';
import { render, screen } from '@testing-library/react';
import Userform from './userform';

test('renders initial state with empty fields', () => {
  render(<Userform />);

  const idInput = screen.getByLabelText('ID');
  const nameInput = screen.getByLabelText('Name');
  const addButton = screen.getByText('add');

  expect(idInput).toHaveValue('0');
  expect(nameInput).toHaveValue('');
  expect(addButton).toBeInTheDocument();
  expect(screen.queryByText('update')).not.toBeInTheDocument();
});
