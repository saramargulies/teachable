import "@testing-library/jest-dom";
import { render, screen } from "@testing-library/react";
import { StudentTable } from "../StudentTable";

let students = {
  enrolledUsers: [
    {
      email: "kristin.moser@teachable.com",
      name: "Ms. Frizzle",
      id: 88958558,
    },
    {
      email: "valeriefrizzle@test.com",
      name: "Valerie Frizzle",
      id: 89125156,
    },
    { email: "wandali@test.com", name: "Wanda Li", id: 89125157 },
  ],
};



describe('StudentTable', () => {
  Object.defineProperty(window, 'matchMedia', {
      writable: true,
      value: jest.fn().mockImplementation(query => ({
        matches: false,
        media: query,
        onchange: null,
        addListener: jest.fn(), // Deprecated
        removeListener: jest.fn(), // Deprecated
        addEventListener: jest.fn(),
        removeEventListener: jest.fn(),
        dispatchEvent: jest.fn(),
      })),
    });
  it('renders a table', () => {
    render(<StudentTable students={students} />)
 
    const table = screen.getByRole("table")
 
    expect(table).toBeInTheDocument()
  })

})
