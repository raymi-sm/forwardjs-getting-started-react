const jsContainer = document.getElementById('js');
const reactContainer = document.getElementById('react');

let counter = 0;
jsContainer.innerHTML = `
  <div>
    <div>Hello JS</div>
    <div>${new Date()}</div>
    <p id='counter'>${counter}</p >
    <input />
    </div>
`;
setInterval(() => {
  document.getElementById('counter').innerHTML = counter;
  counter++
// Creating an Element with the React API
  ReactDOM.render(
    React.createElement('div', {},
      React.createElement('div', {}, 'Hello React'),
      React.createElement('div', {}, new Date().toString()),
      React.createElement('input', {}),
      React.createElement('div', {id: 'counter'}, counter)
    ),
    reactContainer
  )
}, 1000)
