import { useEffect, useState } from 'react';
import axios from 'axios';
import Card from './Card'; 

function App() {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get('https://pokeapi.co/api/v2/pokemon');
        setData(response.data.results); // Set data to the results array
        console.log(response.data.results); // Log the fetched data
      } catch (err) {
        console.log(err);
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, []);

  if (loading) return <p className="text-center">Loading...</p>;

  return (
    <>
      <h1 className="text-2xl font-bold text-center mb-6">Pokémon List</h1>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 px-4">
        {data.map((pokemon) => (
          <Card 
            key={pokemon.name} 
            movieName={pokemon.name} 
            imdbUrl={pokemon.url} 
          />
        ))}
      </div>
    </>
  );
}

export default App;
