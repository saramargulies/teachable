import '@testing-library/jest-dom'
import { render, screen } from '@testing-library/react'
import { SidebarProvider, SidebarTrigger } from '@/components/ui/sidebar'
import { Nav } from '../Nav'
 
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


describe('Nav', () => {
  it('renders a heading', () => {
    render(<SidebarProvider><Nav /><SidebarTrigger /></SidebarProvider>)
 
    const nav = screen.getByRole('navigation')
 
    expect(nav).toBeInTheDocument()

    const published = screen.getByText('Published Courses')

    expect(published).toBeInTheDocument()
  })
})