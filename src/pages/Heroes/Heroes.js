import React from 'react';
import axios from 'axios';
import { useState, useEffect } from 'react';
import "./Heroes.css"

const Heroes = () => {
    const [heroes, setHeroes] = useState([]);
    useEffect(() => {
      axios({
        method: 'GET',
        url: 'https://60dff0ba6b689e001788c858.mockapi.io/heroes'
      }).then( response => {
        setHeroes(response.data);
      });
    }, []);

    return (
        <div className="container-fluid">
            {heroes.map(hero => (
                <div key={hero.id}>
                  <span className="spanInfo">{hero.id}</span>
                  <span >{hero.name}</span>
                </div>
            ))}
        </div>
        
    );
};

export default Heroes;