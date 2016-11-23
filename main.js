const jsContainer = document.getElementById('js');
const reactContainer = document.getElementById('react');

let counter = 0;

jsContainer.innerHTML = `
  <div>
    <div>Hello JS</div>
    <p id='counter'>${counter}</p >
    <input />
  </div>
`;
setInterval(() => {
// Creating an Element with the React API
  document.getElementById('counter').innerHTML = counter;
  counter++;
  ReactDOM.render(
    React.createElement('div', {},
      React.createElement('div', {}, 'Hello React'),
      React.createElement('input', {}),
      React.createElement('div', {id: 'counter'}, counter)
    ),
    reactContainer
  )
}, 1000)
