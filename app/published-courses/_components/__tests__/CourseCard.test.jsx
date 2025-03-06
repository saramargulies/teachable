import "@testing-library/jest-dom";
import { render, screen } from "@testing-library/react";
import { CourseCard } from "../CourseCard";

let course = {
  id: 2002430,
  description: null,
  name: "Trees and Arboreous Concerns",
  heading:
    "Grow Your Knowledge of Trees and Arboreous Concerns - Learn From the Expert!",
  is_published: true,
  image_url: "https://cdn.filestackcontent.com/HfhcrIRZKEyvND8blEXA",
};



describe('CourseCard', () => {
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
  it('renders a title', () => {
    render(<CourseCard course={course} />)
 
    const title = screen.getByText("Trees and Arboreous Concerns")
 
    expect(title).toBeInTheDocument()
  })
  it('renders a heading', () => {
    render(<CourseCard course={course} />)
 
    const title = screen.getByText("Grow Your Knowledge of Trees and Arboreous Concerns - Learn From the Expert!")
 
    expect(title).toBeInTheDocument()
  })
})
