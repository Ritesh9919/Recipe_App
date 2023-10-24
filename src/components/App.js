import { Home } from "../pages";
import {useEffect, useState} from 'react';

function App() {
  const [recipes, setRecipes] = useState([]);
  
  
  useEffect(()=> {
   async function fetchRecipe() {
      const response = await fetch('http://localhost:8000/api/recipe', {
        method:'get',
        headers:{
          "Content-Type":"application/json"
        }
      });
      const data = await response.json();
      setRecipes(data.recipes);
   }
   fetchRecipe()
  },[])
  
  return (
    <div className="App">
      <Home recipes={recipes}/>
    </div>
  );
}

export default App;
