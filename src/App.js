import React , {useEffect , useState} from 'react'
import Recipe from './Recipe';
import './App.css';

const App = () => {
    const APP_ID = '5a220453';
    const APP_KEY = '9ceae850e98b2d926828228fa75da8c8';
    const [recipes , setRecipes] = useState([]);
    const [search , setSearch] = useState("");
    const [query , setQuery] = useState("");

    useEffect(() => {
        fetchRecipes();
    } , [query])

    const fetchRecipes = async () => {
        const response = await fetch(`https://api.edamam.com/search?q=${query}&app_id=${APP_ID}&app_key=${APP_KEY}&from=0&to=3&calories=591-722&health=alcohol-free`);
        const data = await response.json();
        setRecipes(data.hits);
        console.log(data.hits);
    }

    const updateSearch = e => {
        setSearch(e.target.value);
    }

    const getSearch = (e) => {
        e.preventDefault();
        setQuery(search);
        setSearch('');
    }

    return (
        <div className='app'>
            <h1>Recipe App</h1>
            <form className='search-form' onSubmit={getSearch}>
                <input className='search-bar' type="text" value={search} onChange={updateSearch}/>
                <button className='search-btn' type="submit">Search</button>
            </form>
    
            <div className='container'>
                {
                    recipes.map( recipe => (
                        <Recipe 
                            key={recipe.recipe.label}
                            title={recipe.recipe.label}
                            calories={recipe.recipe.calories}
                            img={recipe.recipe.image}
                            ingredients={recipe.recipe.ingredients}
                            mealType={recipe.recipe.mealType}
                        />
                    ))
                }
            </div>
            
        </div>
    )
}

export default App;