import React from 'react';
import { render, fireEvent } from '@testing-library/react';
import UsersTable from './UsersTable';

describe('UsersTable Component', () => {
  const rowsWithData = [
    { id: 1, name: 'User 1' },
    { id: 2, name: 'User 2' },
  ];

  const emptyRows = [];

  it('renders table with data', () => {
    const { getByText, getAllByRole } = render(
      <UsersTable rows={rowsWithData} />
    );

    // Check if the table headers are present
    expect(getByText('ID')).toBeInTheDocument();
    expect(getByText('Name')).toBeInTheDocument();
    expect(getByText('Actions')).toBeInTheDocument();

    // Check if rows with data are rendered
    const tableRows = getAllByRole('row');
    expect(tableRows.length).toBe(rowsWithData.length + 1); // +1 for table header row
  });

  it('renders table with no data', () => {
    const { getByText } = render(<UsersTable rows={emptyRows} />);

    // Check if "No Data" message is displayed
    expect(getByText('No Data')).toBeInTheDocument();
  });

  it('calls selectedUser function when Update button is clicked', () => {
    const selectedUserMock = jest.fn();

    const { getByText } = render(
      <UsersTable rows={rowsWithData} selectedUser={selectedUserMock} />
    );

    const updateButtons = getAllByText('Update');
    fireEvent.click(updateButtons[0]); // Click the first Update button

    // Check if the selectedUser function is called with the correct arguments
    expect(selectedUserMock).toHaveBeenCalledWith({
      id: rowsWithData[0].id,
      name: rowsWithData[0].name,
    });
  });

  it('calls deleteUser function when Delete button is clicked', () => {
    const deleteUserMock = jest.fn();

    const { getAllByText } = render(
      <UsersTable rows={rowsWithData} deleteUser={deleteUserMock} />
    );

    const deleteButtons = getAllByText('Delete');
    fireEvent.click(deleteButtons[0]); // Click the first Delete button

    // Check if the deleteUser function is called with the correct arguments
    expect(deleteUserMock).toHaveBeenCalledWith({
      id: rowsWithData[0].id,
    });
  });
});
