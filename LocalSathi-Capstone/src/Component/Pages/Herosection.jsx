import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

const images = [
  "path/to/image1.jpg",
  "path/to/image2.jpg",
  "path/to/image3.jpg",
  "path/to/image4.jpg",
  "path/to/image5.jpg"
];

const HeroSection = () => {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  useEffect(() => {
    const intervalId = setInterval(() => {
      setCurrentImageIndex((prevIndex) => (prevIndex + 1) % images.length);
    }, 3000);

    return () => clearInterval(intervalId);
  }, []);

  const handleNextSlide = () => {
    setCurrentImageIndex((prevIndex) => (prevIndex + 1) % images.length);
  };

  const handlePrevSlide = () => {
    const newIndex = currentImageIndex === 0 ? images.length - 1 : currentImageIndex - 1;
    setCurrentImageIndex(newIndex);
  };

  return (
    <Container>
      <Carousel>
        <ImageWrapper>
          <img src={images[currentImageIndex]} alt="Hero Image" />
        </ImageWrapper>
        <Navigation>
          <Button onClick={handlePrevSlide} disabled={currentImageIndex === 0}>
            <FontAwesomeIcon icon="chevron-left" />
          </Button>
          <Button onClick={handleNextSlide}>
            <FontAwesomeIcon icon="chevron-right" />
          </Button>
        </Navigation>
      </Carousel>

      <Slogan>
        <h2>Explore Like a Local</h2>
        <h1>Discover with LocalSathi</h1>
        <p>Uncover your city's best-kept secrets and dive into local experiences.</p>
      </Slogan>

      <SearchBar>
        <input className="searchInput" type="text" placeholder="Search something" />
        <Link to="/PlacesSearchResult">
          <button className="searchButton">
            <FontAwesomeIcon icon="search" />
          </button>
        </Link>
      </SearchBar>
    </Container>
  );
};

const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 2rem 0;
  background-color: #f5f5f5;
`;

const Carousel = styled.div`
  position: relative;
  overflow: hidden;
  width: 80%;
  height: 300px;
`;

const ImageWrapper = styled.div`
  img {
    width: 100%;
    height: 100%;
    object-fit: cover;
  }
`;

const Navigation = styled.div`
  position: absolute;
  top: 50%;
  transform: translateY(-50%);
  display: flex;
  justify-content: space-between;
  width: 100%;
`;

const Button = styled.button`
  background: none;
  border: none;
  padding: 1rem;
  cursor: pointer;
  color: white;
  font-size: 1.5rem;

  &:hover {
    opacity: 0.7;
  }

  &:disabled {
    opacity: 0.5;
    cursor: default;
  }
`;

const Slogan = styled.div`
  text-align: center;
  padding: 2rem 0;

  h2 {
    font-size: 1.5rem;
    margin-bottom: 0.5rem;
  }

  h1 {
    font-size: 2.5rem;
    margin-bottom: 1rem;
  }

  p {
    color: #777;
  }
`;

const SearchBar = styled.div`
  display: flex;
  align-items: center;
  margin-top: 1rem;

  input.searchInput {
    padding: 0.5rem;
    border: 1px solid #ccc;
    border-radius: 4px;
    font-size: 1rem;
    width: 100%;
    max-width: 300px;
    transition: box-shadow 0.2s ease;

    &:focus {
      outline: none;
      box-shadow: 0 0 5px rgba(0, 123, 255, 0.5);
    }
  }

  button.searchButton {
    background-color: #007bff;
    color: white;
    border: none;
    border-radius: 4px;
    padding: 0.5rem 1rem;
    margin-left: 1rem;
    cursor: pointer;
    transition: background-color 0.2s ease;

    &:hover {
      background-color: #0056bf;
    }
  }
`;

export default HeroSection;
