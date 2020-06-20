import express from 'express';
import Size from '../Controllers/SizeController';

export const anonymeRouteSize = express.Router();

anonymeRouteSize.route('/')
    .get(async (req, res) => {
        const Sizes = await Size.getAllSize();
        res.json(Sizes);
    })
anonymeRouteSize.route('/:id')
    .get(async (req, res) => {
        const idSize = {id: req.params.id};
        const size = await Size.getSizeById(idSize);
        res.json(size);
    })