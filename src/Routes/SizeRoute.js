import express from 'express';
import Size from '../Controllers/SizeController';

export const anonymeRouteSize = express.Router();

anonymeRouteSize.route('/')
    .get(async (req, res) => {
        const Sizes = await Size.getAllSize();
        res.json(Sizes);
    })