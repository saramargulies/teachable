import "@testing-library/jest-dom";
import { render, screen } from "@testing-library/react";
import StudentTable from "../_components/StudentTable";
import { Suspense } from "react";
import { useRouter } from 'next/router';

let course = {params: 2002430}

jest.mock('next/router', () => ({
  useRouter: jest.fn(),
 }));

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
  // it('renders a title', () => {
  //   render(<Suspense><StudentTable params={{courseId: 2002430}} /></Suspense>)
 
  //   const title = screen.getByText("Trees and Arboreous Concerns")
  //   const enrollments = screen.getByText("Enrollments")
 
  //   expect(title).toBeInTheDocument()
  //   expect(enrollments).toBeInTheDocument()
  // })
  it('renders product details with dynamic ID', () => {
    useRouter.mockReturnValue({params:{courseId:2002430}});
   
  
    render(<StudentTable />);})
  
})
