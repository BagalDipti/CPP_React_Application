import React from 'react';
import App from './App';
import ReactDOM from 'react-dom';
import Header from './Header' ;
import { render, screen } from '@testing-library/react';


it('renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(<App />, div);
  ReactDOM.unmountComponentAtNode(div);
});


it('renders without crashing', () => {
  const Grid = document.createElement('Grid');
  ReactDOM.render(<App />, Grid);
  ReactDOM.unmountComponentAtNode(Grid);
});

it('renders message', () => {
  render(<App />);
  expect(screen.getByText('Learn React')).toBeInTheDocument();
});

/*test(" deleted the record it is given", () => {
  const startState = [{ id: 1, done: false }];

  const finState = delete(startState, 1);

  expect(finState).toEqual([]);
});*/

describe("App Component Testing", () => {
  it("Renders Employee Details Title", () => {
    //
  });
});






