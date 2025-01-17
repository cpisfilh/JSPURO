const App = () => {
  return React.createElement(
    "div", 
    null, 
    React.createElement("h1", null, "Hello World"),
    React.createElement("button", {onClick: () => console.log("click"), className: "btn"}, "click"));
}

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(React.createElement(App));