import React from 'react';
import propTypes from 'prop-types';

const UNKNOWN_AVATAR_URL = `${
  process.env.PUBLIC_URL
  }/images/unknown-avatar.png`;


const CharactersCards = ({ characters }) => 
  characters.map(
    ({ name, image = UNKNOWN_AVATAR_URL, species, gender }) => (
      <div className="id-card-wrapper" key={name}>
        <div className="id-card">
          <div className="profile-row">
            <div className="profile-row__avatar">
              <img
                className="avatar__image"
                src={image}
                alt={`${name}'s avatar`}
              />
            </div>
            <div className="profile-row__desc">
              <h1 className="desc__name">{name}</h1>
              <p>Species: {species}</p>
              <p>Gender: {gender}</p>
            </div>
          </div>
        </div>
      </div>
    ),
  );


CharactersCards.propTypes = {
  characters: propTypes.arrayOf(propTypes.shape({
    gender: propTypes.string,
    image: propTypes.string,
    name: propTypes.string,
    species: propTypes.string,
  }))
}

export default CharactersCards;