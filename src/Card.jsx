import React from "react";

const Card = ({ movieName, imdbUrl }) => {
    return (
      <div className="bg-white p-4 rounded-lg shadow-lg">
        <h2 className="text-lg font-semibold">{movieName}</h2>
        <a href={imdbUrl} className="text-blue-500" target="_blank" rel="noopener noreferrer">More Info</a>
      </div>
    );
  };
  
  export default Card;
