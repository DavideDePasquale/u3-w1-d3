import { Component } from "react";
import { Card, Container } from "react-bootstrap";

class SingleBook extends Component {
  state = {
    selected: false
  };
  render() {
    return (
      <Container>
        <Card
          className={this.state.selected ? "border-danger" : "border-light"}
        >
          <Card.Img
            variant="top"
            src={this.props.book.img}
            onClick={() => this.setState({ selected: !this.state.selected })}
          />
          <Card.Body>
            <Card.Title>{this.props.book.title}</Card.Title>
          </Card.Body>
        </Card>
      </Container>
    );
  }
}
export default SingleBook;
