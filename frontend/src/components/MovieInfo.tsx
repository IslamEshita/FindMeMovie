import { useLocation, useNavigate } from "react-router-dom";
import { Button } from "react-bootstrap";
import Container from "react-bootstrap/Container";
import Image from "react-bootstrap/Image";
import Row from "react-bootstrap/Row";
import NavBar from "./NavBar";
import React, { useState } from "react";

export default function MovieInfo() {
  const { state } = useLocation();
  const { movie } = state;
  const [formData, setFormData] = useState({
    movie_name: movie.movie_name,
    movie_description: movie.movie_description,
    release_year: movie.release_year,
    genre: movie.genre,
    image: movie.image,
    main_actor: movie.main_actor,
    runtime_minutes: movie.runtime_minutes,
  });

  const handleSubmit = async (event : any) => {
    event.preventDefault();

    try {
      const response = await fetch(
        `http://localhost:3003/movies/${movie._id}`,
        {
          method: "PUT",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(formData),
        }
      );

      const responseData = await response.json();
      console.log("Response from server:", responseData);
    } catch (error) {
      console.error("Error sending data:", error);
    }
  };

  return (
    <>
      <NavBar />
      <div className="infoPage">
        <Container>
          <Row>
            <Image
              style={{ width: "30%", margin: "0 auto" }}
              src={movie.image}
              rounded
            />
          </Row>
        </Container>

        <h2>Movie Name: {movie.movie_name}</h2>
        <h3>Genre: {movie.genre}</h3>
        <h3>Main Actor: {movie.main_actor}</h3>
        <h5>{movie.movie_description}</h5>
      </div>

      <main>
        <hr />
        <h2>Edit the Movie Information</h2>
        <hr />
        <form onSubmit={(e) => handleSubmit(e)}>
          <div className="form-group">
            <label htmlFor="movie_name">Movie Name</label>
            <input
              className="form-control"
              id="movie_name"
              name="movie_name"
              type="text"
              value={formData.movie_name}
              onChange={(event) =>
                setFormData((prevData) => ({
                  ...prevData,
                  movie_name: event.target.value,
                }))
              }
              required
            />
          </div>
          <div className="form-group">
            <label htmlFor="movie_description">Movie Description</label>
            <input
              className="form-control"
              id="movie_description"
              name="movie_description"
              type="text"
              value={formData.movie_description}
              onChange={(event) =>
                setFormData((prevData) => ({
                  ...prevData,
                  movie_description: event.target.value,
                }))
              }
              required
            />
          </div>
          <div className="form-group">
            <label htmlFor="image">Movie Picture</label>
            <input
              className="form-control"
              type="url"
              id="image"
              name="image"
              value={formData.image}
              onChange={(event) =>
                setFormData((prevData) => ({
                  ...prevData,
                  image: event.target.value,
                }))
              }
            />
          </div>
          <div className="form-group">
            <label htmlFor="genre">Genre</label>
            <input
              className="form-control"
              id="genre"
              name="genre"
              value={formData.genre}
              onChange={(event) =>
                setFormData((prevData) => ({
                  ...prevData,
                  genre: event.target.value,
                }))
              }
              required
            />
          </div>
          <div className="form-group">
            <label htmlFor="runtime_minutes">Run Time</label>
            <input
              className="form-control"
              type="number"
              id="runTime_minutes"
              value={formData.runtime_minutes}
              onChange={(event) =>
                setFormData((prevData) => ({
                  ...prevData,
                  runtime_minutes: parseInt(event.target.value, 10),
                }))
              }
            />
          </div>
          <div className="form-group">
            <label htmlFor="main_actor">Main Actor</label>
            <input
              className="form-control"
              id="main_actor"
              name="main_actor"
              value={formData.main_actor}
              onChange={(event) =>
                setFormData((prevData) => ({
                  ...prevData,
                  main_actor: event.target.value,
                }))
              }
            />
          </div>
          <div className="form-group">
            <label htmlFor="release_year">Release Year</label>
            <input
              type="number"
              className="form-control"
              id="release_year"
              name="release_year"
              value={formData.release_year}
              onChange={(event) =>
                setFormData((prevData) => ({
                  ...prevData,
                  release_year: parseInt(event.target.value, 10),
                }))
              }
            />
          </div>
          <input
            className="btn btn-primary"
            type="submit"
            value="Update Movie"
          />
        </form>
      </main>
    </>
  );
}
