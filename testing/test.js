//Write Enzyme tests here
require("@babel/polyfill");
const React = require("react");
const { shallow, mount, render } = require("enzyme");

const App = require("../client/Components/App/App.jsx");

// const wrapper = shallow(<App />);

describe("Hoping App.js pass test", () => {
  it("should render App", () => {
    const component = shallow(<App />);
    expect(component).toMatchSnapshot();
  });
});
