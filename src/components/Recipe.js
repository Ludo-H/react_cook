import React, { Fragment, useState } from 'react';

const Recipe = ({ recipe }) => {

    const [displayModal, setDisplayModal] = useState(false)

    return (
        <Fragment>
            <li onClick={() => setDisplayModal(true)} className='recipe'>
                <img src={recipe.strMealThumb} alt="recipe" />
                <h2>{recipe.strMeal}</h2>
            </li>
            {displayModal &&
                <Fragment>
                    <div className="modal-bcg" onClick={() => setDisplayModal(false)}>

                    </div>
                    <div className='modal'>
                        <img src={recipe.strMealThumb} alt="recipe" />
                        <h2>{recipe.strMeal}</h2>
                        <p>{recipe.strInstructions}</p>
                    </div>
                </Fragment>
            }
        </Fragment>
    );
};

export default Recipe;