import React, {useEffect, useState} from 'react';
import './App.css';
import Recipe from './Recipe';
import style from './search.module.css'

const App = () => {

	const APP_ID = '173df23d';
	const APP_KEY = '45122742ec271df627ec68e9470cee55';

	const [recipes, setRecipes] = useState([]);
	const [search, setSearch] = useState('');
	const [query, setQuery] = useState('chicken');

	useEffect(() => {
		getRecipes();
	}, [query]);

	const getRecipes = async () => {
		const response = await fetch(`https://api.edamam.com/search?q=${query}&app_id=${APP_ID}&app_key=${APP_KEY}`);

		const data = await response.json();
		setRecipes(data.hits);
	}

	const updateSearch = e => {
		setSearch(e.target.value);
	}

	const getSearch = e => {
		e.preventDefault();
		setQuery(search);
	}

	return (
		<div className="App">
			<div className="App__container">
				<form onSubmit={getSearch} className={style.search}>
					<input placeholder="Search a recipe" type="text" className={style.search__input} value={search} onChange={updateSearch}/>

					<button className={style.search__btn} type="submit">Search</button>
				</form>

				{recipes.map((recipe, i) => (
					<Recipe
						key={`${recipe.recipe.label}${i}`}
						title={recipe.recipe.label}
						calories={Math.floor(recipe.recipe.calories)}
						image={recipe.recipe.image}
						ingredients={recipe.recipe.ingredientLines}
						nutritions={recipe.recipe.digest}
					/>
				))}
			</div>
		</div>
	);
}

export default App;
