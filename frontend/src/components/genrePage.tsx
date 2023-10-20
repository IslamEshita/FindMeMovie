import Movie from "./Movie";
import Container from "react-bootstrap/Container";
import NavBar from "./NavBar";
import Row from "react-bootstrap/Row";

import React, { useState, useEffect } from "react";

const BACKEND_BASE_URL = "http://localhost:3003";

export default function GenrePage({ genre } : any) {
  const [movies, setMovies] = useState<any>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<any>(null);

  function capitalizeFirstLetter(item: string) {
    return item.charAt(0).toUpperCase() + item.slice(1);
  }

  useEffect(() => {
    async function fetchData() {
      try {
        const response = await fetch(
          `${BACKEND_BASE_URL}/movies?genre=${genre}`
        );
        const jsonData = await response.json();
        setMovies(jsonData);
        setLoading(false);
      } catch (error: any) {
        setError(error);
        setLoading(false);
      }
    }

    fetchData();
  }, []);

  if (loading) {
    return <p>Loading...</p>;
  }

  if (error) {
    return <p>Error: {error.message}</p>;
  }

  function getMovies() {
    if(movies != null) {
      movies.map((movie: any) => {
        return <Movie key={movie._id} movie={movie} />;
      })
    }    
  }

  return (
    <>
      <NavBar />
      <div>
        <div>
          <Container>
            <Row>
              {movies.map((movie: any) => {
                return <Movie key={movie._id} movie={movie} />;
              })}
            </Row>
          </Container>
        </div>
      </div>
    </>
  );
}
