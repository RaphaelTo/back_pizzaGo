import express from 'express';
import Ingredient from '../Controllers/IngredientController';

export const anonymeRouteIngredient = express.Router();

anonymeRouteIngredient.route('/')
    .get(async (req, res) => {
        const Ingredients = await Ingredient.getAllIngredient();
        res.json(Ingredients);
    })

anonymeRouteIngredient.route('/add')
    .post(async (req, res) => {
        const param = {
            price: req.body.price,
            name: req.body.name,
            oz: req.body.oz
        };
        const Ingredients = await Ingredient.addIngredient(param);
        res.json(Ingredients);
    })

anonymeRouteIngredient.route('/delete/:id')
    .delete(async (req, res) => {
        const param = {
            id: req.params.id
        };
        const Ingredients = await Ingredient.deleteIngredient(param);
        res.json(Ingredients);
    })

anonymeRouteIngredient.route('/:id')
    .get(async (req, res) => {
        const param = {
            id: req.params.id
        }
        const Ingredients = await Ingredient.getIngredientById(param);
        res.json(Ingredients);
    })

anonymeRouteIngredient.route('/update')
    .put(async (req, res) => {
        const param = {
            where: { id: req.body.id },
            data: {
                price: req.body.price,
                name: req.body.name,
                oz: req.body.oz
            }
        }
        const Ingredients = await Ingredient.updateIngredient(param);
        res.json(Ingredients);
    })