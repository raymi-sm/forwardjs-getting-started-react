const reactContainer = document.getElementById('react');
/*
React takes all the "attributes" that you pass on your componenent ( in this case in <Counter /> and saves them inside a props object )

const Counter = (props) => {
  return (
    <div>
      <span>{props.id}</span>: <span>{props.x}</span>
    </div>
  );
}

But instead of constanly calling the props object we can destructured the variables and call them directly. This is also called atribute destructuring

const Counter = (props) => {
  let {id, x} = props
  return (
    <div>
      <span>{id}</span>: <span>{x}</span>
    </div>
  );
}

Shortcut way of doing this

const Counter = ({ id, x }) => {
  return (
    <div>
      <span>{id}</span>: <span>{x}</span>
    </div>
  );
}

*/

// Creating a React component: First Way, the stateless function

/*const Counter = ({ id, x }) => {
  return (
    <div>
      <span>{id}</span>: <span>{x}</span>
    </div>
  );
}*/

// Creating a React component: Second Way

const Counter = React.createClass({
  render: function(){
    let {id, x} = this.props;
    return (
      <div>
        <span>{id}</span>: <span>{x}</span>
      </div>
    );
  }
})

let x = 0;
setInterval(() => {
  x++
  ReactDOM.render(
    <div>
      <div>Hello React</div>
      <input />
      <Counter id="a6" x={x} />
    </div>
    ,
    reactContainer
  )
}, 1000);
