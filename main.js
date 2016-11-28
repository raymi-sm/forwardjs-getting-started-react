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

/*const Counter = React.createClass({
  render: function(){
    let {id, x} = this.props;
    return (
      <div>
        <span>{id}</span>: <span>{x}</span>
      </div>
    );
  }
})*/

// Creating a React component: Third Way

/*class Counter extends React.Component {
  idSpan(){
    return(<span>{this.props.id}</span>);
  }
  render(){
    return(
      <div>
        {this.idSpan()}: <span>{this.props.x}</span>
      </div>
    )
  }
}*/

// State

// LifeCycle Methods

class Counter extends React.Component {
  constructor(props) {
    super(props);
    this.state = {currentValue: 1};
    setInterval(() => {
      this.setState({currentValue: this.state.currentValue + 1})
    }, 1000);
  }
  render(){
    //this.state
    return(
      <div>
        <span>{this.state.currentValue}</span>
      </div>
    )
  }
}


ReactDOM.render(
  <div>
    <Counter />
  </div>
  ,
  reactContainer
  )
