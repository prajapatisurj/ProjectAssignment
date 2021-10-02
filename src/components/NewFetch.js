import React from "react";
import { useEffect, useState } from "react";
import axios from "axios";
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import Button from '@mui/material/Button';

function App() {
  const [state, setstate] = useState({ pokemon: [] });

  useEffect(() => {
    axios
      .get("https://pokeapi.co/api/v2/pokemon")
      .then((res) => {
        console.log(res.data.pokemon);
        setstate({ pokemon: res.data.results });
      })
      .catch((err) => console.log(err));
  }, []);

  console.log(state.pokemon);

  const pokemons = state.pokemon.map((pokemon) => {
    return (
      <div className="pokemon">
        <Card sx={{ maxWidth: 345 }} style={{margin:'.5rem',display: 'flex',flexWrap:'table',backgroundColor:'black',color:'white'}}>
          <h1>{pokemon.name}</h1>
          <CardActions>
            <Button size="small" style={{backgroundColor:'#e66791'}}>
              <a href={pokemon.url} style={{textDecoration:'none',color:'white'}}>More Details</a>
            </Button>
          </CardActions>
        </Card>
      </div>
    );
  });
  return <div className="App">{pokemons}</div>;
}

export default App;
