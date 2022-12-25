class Car extends React.Component {
  state = {
    name: "Car",
  };

  updateName() {
    this.setState({ name: "Car World" });
  }

  render() {
    return <div>{this.state.name}</div>;
  }
}
