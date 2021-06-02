import React, { useEffect, useState } from "react";

const Characters = () => {
  //estados
  const [character, setcharacter] = useState([]);

  useEffect(() => {
    fetch("https://rickandmortyapi.com/api/character")
      .then((Response) => Response.json())
      .then((data) => setcharacter(data.results));
  }, []);
  return (
    <div className="container">
      <div className="characters">
        {character.map((item) => (
          <div className="box" key={item.id}>
            <img src={item.image} alt={item.name} />
            <div className="character">
              <h3 className="name">{item.name}</h3>
              <p className="especie">{item.species}</p>
              <p className="status">{item.status}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Characters;
