import React from 'react';
import Nutrition from './Nutrition';
import style from './recipe.module.css'

const Recipe = ({title, calories, image, ingredients, nutritions}) => {
	return (
		<div className={style.recipe}>
			<div className={style.recipe__head}>
				<h1>{title}</h1>
			</div>

			<div className={style.recipe__body}>
				<div className={style.recipe__content}>
					<h2>Ingredients</h2>

					<ul>
						{ingredients.map((ingredient, i) => (
							<li key={`${ingredient} ${i}`}>{ingredient}</li>
						))}
					</ul>
				</div>

				<div className={style.recipe__image}>
					<img src={image} alt=""/>
				</div>
			</div>

			<div className={style.recipe__foot}>
				<h2>Nutrition facts</h2>

				<ul>
					{nutritions.map((nutrition, i) => {
						if (i <= 2)
						return (
							<Nutrition
								key={`${nutrition.label}-${nutrition.total}`}
								label={nutrition.label}
								total={nutrition.total}
							/>
						);
					})}
				</ul>

				<h3>Total calories: {calories}</h3>
			</div>
		</div>
	);
};

export default Recipe;
