import Nav from "react-bootstrap/Nav";
import Container from "react-bootstrap/Container";
import { Link } from "react-router-dom";
export default function NavBar() {
  return (
    <header>
      <h1 className="title">Welcome to FindMeMovie</h1>

      <div className="navBar">
        <Container>
          <Nav defaultActiveKey="/" variant="tabs" fill>
            <Nav.Item>
              <Nav.Link href="/">
                <Link to="/">Home</Link>
              </Nav.Link>
            </Nav.Item>
            <Nav.Item>
              <Nav.Link eventKey={"actionPage"}>
                <Link to="/actionPage"> Action</Link>
              </Nav.Link>
            </Nav.Item>
            <Nav.Item>
              <Nav.Link eventKey={"dramaPage"}>
                <Link to="/dramaPage">Drama</Link>
              </Nav.Link>
            </Nav.Item>
            <Nav.Item>
              <Nav.Link eventKey={"comedyPage"}>
                <Link to="/comedyPage">Comedy</Link>
              </Nav.Link>
            </Nav.Item>
            <Nav.Item>
              <Nav.Link eventKey={"horrorPage"}>
                <Link to="/horrorPage">Horror</Link>
              </Nav.Link>
            </Nav.Item>
            <Nav.Item>
              <Nav.Link eventKey={"newMovie"}>
                <Link to="/newMovie">Add Movie</Link>
              </Nav.Link>
            </Nav.Item>
          </Nav>
        </Container>
      </div>
    </header>
  );
}
