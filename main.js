const reactContainer = document.getElementById('react');
const Counter = (props) => {
  return (
    <p>{props.x}</p>
  );
}

const Counter2 = (props) => {
  return(
    React.createElement('p', null, props.x)
  );
}
let x = 0;
setInterval(() => {
  x++
  ReactDOM.render(
    <div>
      <div>Hello React</div>
      <input />
      <Counter x={x} />
      <Counter2 x={x} />
    </div>
    ,
    reactContainer
  )
}, 1000);
