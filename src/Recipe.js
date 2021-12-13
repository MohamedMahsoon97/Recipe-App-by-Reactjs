import React from 'react'

const Recipe = ({title , calories , img , ingredients , mealType}) => {
      return (
            <div className='meal-content'>
                  <h1>Meal Name : <br />{title}</h1>
                  <h3>Meal Type : {mealType}</h3>
                  <ol>
                        { ingredients.map( ingredient => (
                              <li>{ingredient.text}</li>
                        )) }
                  </ol>
                  <p>Calories : {calories}</p>
                  <img src={img} alt='' />
            </div>
      )
}

export default Recipe;
