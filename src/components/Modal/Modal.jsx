import React from "react";
import "./Modal.css";

const Modal = ({ image, closeModal }) => {
  const { id, largeImageURL, likes, tags, user, user_id, type, views } = image;

  return (
    <div className="backdrop modal" onClick={closeModal}>
      <div className="container" onClick={(e) => e.stopPropagation()}>
        <div className="header-text">
          <h3>Preview ID: {id}</h3>
          <div className="close" onClick={closeModal}>
            X
          </div>
        </div>
        <div className="container-info">
          <div className="image">
            <img src={largeImageURL} alt="" />
          </div>
          <div className="info">
            <div className="download-info">
              <h3>Download</h3>
              <ul className="download-options">
                <li className="download-option">
                  <div>Small</div>
                  <div>640X980</div>
                </li>
                <li className="download-option">
                  <div>Medium</div>
                  <div>640X980</div>
                </li>
                <li className="download-option">
                  <div>Big</div>
                  <div>640X980</div>
                </li>
                <li className="download-option">
                  <div>Original</div>
                  <div>640X980</div>
                </li>
              </ul>
              <button className="btn-download">Download for free!</button>
            </div>
            <div className="user-info">
              <h3>Information</h3>
              <table>
                <thead>
                  <tr>
                    <th>User</th>
                    <th>User ID</th>
                    <th>Type</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td>{user}</td>
                    <td>{user_id}</td>
                    <td>{type}</td>
                  </tr>
                </tbody>
                <thead>
                  <tr>
                    <th>Views</th>
                    <th>Downloads</th>
                    <th>Likes</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td>{views}</td>
                    <td>{10}</td>
                    <td>{likes}</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
        </div>
        <div className="tags">
          Tags:
          {tags.split(", ").map((tag, index) => {
            return (
              <div className="tag" key={index}>
                {tag}
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default Modal;
