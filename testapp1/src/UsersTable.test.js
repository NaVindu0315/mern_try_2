import UsersTable from "./UsersTable";

describe(UsersTable, () => {
  it("should render correctly", () => {
    const component = shallow(<UsersTable />);

    expect(component).toMatchSnapshot();
  });
});