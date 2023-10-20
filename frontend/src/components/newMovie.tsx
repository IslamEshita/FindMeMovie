import NavBar from "./NavBar";
import Button from "react-bootstrap/esm/Button";
import React, { useState } from "react";

export default function NewForm(data: any) {
  let message:any = "";
  if (data.message) {
    message = <h4 className="alert-danger">{data.message}</h4>;
  }
  const [formData, setFormData] = useState({
    movie_name: "",
    movie_description: "",
    release_year: 2023,
    genre: "",
    image: "",
    main_actor: "",
    runtime_minutes: 90,
  });

  const handleSubmit = async (event:any) => {
    event.preventDefault();

    try {
      const response = await fetch("http://localhost:3003/movies", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });

      const responseData = await response.json();
      console.log("Response from server:", responseData);
    } catch (error) {
      console.error("Error sending data:", error);
    }

    window.alert("Movie successfully added!");
  };

  return (
    <>
      <NavBar />
      <main>
        <h1>Add a New Movie</h1>
        {message}
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
              onChange={(event) =>
                setFormData((prevData) => ({
                  ...prevData,
                  release_year: parseInt(event.target.value, 10),
                }))
              }
            />
          </div>
          <input className="btn btn-primary" type="submit" value="Add Movie" />
        </form>
      </main>
    </>
  );
}
