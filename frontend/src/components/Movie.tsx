import Col from "react-bootstrap/Col";
import Image from "react-bootstrap/Image";
import Button from "react-bootstrap/Button";
import { useNavigate } from "react-router-dom";

export default function Movie({ movie } : any) {
  console.log(movie);

  let navigate = useNavigate();
  const handleEditclick = () => {
    let path = `/movies/${movie._id}`;
    navigate(path, { state: { movie: movie } });
  };

  const refreshPage = () => {
    window.location.reload();
  };

  const handleDeleteClick = async (event:any) => {
    event.preventDefault();

    try {
      const response = await fetch(
        `http://localhost:3003/movies/${movie._id}`,
        {
          method: "DELETE",
          headers: {
            "Content-Type": "application/json",
          },
        }
      );

      const responseData = await response.json();
      console.log("Response from server:", responseData);
      refreshPage();
    } catch (error) {
      console.error("Error sending data:", error);
    }
  };

  return (
    <Col xs={6} md={4}>
      <br></br>
      <Image
        style={{ width: "80%", margin: "0 auto" }}
        src={movie.image}
        rounded
      />
      <Button variant="primary" onClick={handleEditclick}>
        Edit Movie
      </Button>
      <Button variant="danger" onClick={handleDeleteClick}>
        Delete Movie
      </Button>
    </Col>
  );
}
