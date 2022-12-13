import { config } from '../config'

const getRecipes = async (choice) => {
    var res = await fetch(`http://${config.server_host}:${config.server_port}/recipes/${choice}`, {
        method: 'GET',
    })
    return res.json()
}

const getRecipeById = async (recipeId) => {
    var res = await fetch(`http://${config.server_host}:${config.server_port}/recipe/${recipeId}`, {
        method: 'GET',
    })
    return res.json()
}

const getDefaultRecipes = async () => {
    var res = await fetch(`http://${config.server_host}:${config.server_port}/recipes`, {
        method: 'GET',
    })
    return res.json()
}

const getSimilarRecipes = async (recipeId) => {
    var res = await fetch(`http://${config.server_host}:${config.server_port}/recommendation/${recipeId}`, {
        method: 'GET',
    })
    return res.json();
}

export { getDefaultRecipes, getRecipeById, getSimilarRecipes };

// http://127.0.0.1:8080/recommendation/410347