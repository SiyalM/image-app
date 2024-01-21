import { useState, useEffect } from "react";
import "./Result.css";
import Navigation from "../Navigation/Navigation";
import Search from "../Search/Search";
import Modal from "../Modal/Modal";
import { useSearch } from "../../context/search-context";
import Spinner from "../Spinner/Spinner";

const API_KEY = process.env.REACT_APP_API_KEY;

const Result = () => {
  const [images, setImages] = useState([]);
  const [selectedImage, setSelectedImage] = useState(null);
  const [showModal, setShowModal] = useState(false);
  const { searchText } = useSearch();
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    const text = searchText.split(" ").join("+");
    getImages(text);
  }, [searchText]);

  async function getImages(text) {
    try {
      setIsLoading(true);
      const res = await fetch(
        `https://pixabay.com/api/?key=${API_KEY}&q=${text}`
      );
      const json = await res.json();
      setImages(json?.hits);
      setIsLoading(false);
    } catch (e) {
      console.error(e);
    }
  }

  function handleImageSelect(image) {
    setSelectedImage(image);
    setShowModal(true);
  }

  function handleCloseModal() {
    setShowModal(false);
  }

  return (
    <div className="result">
      <section className="result-header">
        <Navigation />
        <Search />
        {searchText.length > 0 && (
          <h1 className="hero-text">Results: {searchText}</h1>
        )}
      </section>
      <section className="results-container">
        {isLoading ? (
          <Spinner />
        ) : (
          images?.map((_image) => (
            <div
              className="img"
              key={_image.id}
              onClick={() => handleImageSelect(_image)}
            >
              <img src={_image.largeImageURL} alt="" />
              <div className="tags">
                {_image.tags.split(", ").map((tag, index) => {
                  return (
                    <div className="tag" key={index}>
                      {tag}
                    </div>
                  );
                })}
              </div>
            </div>
          ))
        )}
      </section>
      {selectedImage && showModal && (
        <Modal image={selectedImage} closeModal={handleCloseModal} />
      )}
    </div>
  );
};

export default Result;
