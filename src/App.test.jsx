import { render, screen } from 'react-testing';

describe('App component testing', () => {
  it('Button clicked', () => {
    render(<App />);
    const button = screen.getByRole(button);
    button.click();
    expect(screen.getByText('hello React')).toBeInTheDocument();
  });
});
