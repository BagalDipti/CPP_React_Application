import React from 'react';
import App from './App';
import ReactDOM from 'react-dom';
import Header from './Header' ;
import { render, screen } from '@testing-library/react';
import Apis from './Apis';


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



it("Api testing", async function () {
    const response = new Apis();
    console.warn( await response.api());

    expect("import Apis from './Apis';


it("Api testing", async function () {
    const response = new Apis();
    console.warn( await response.api());

    expect("Employee Details").toEqual("Employee Details")
});




