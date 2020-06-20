import express from 'express';
import Size from '../Controllers/SizeController';
import { error } from '../returnFunc';
import JWT from 'jsonwebtoken';

export const anonymeRouteSize = express.Router();
export const adminRouteSize = express.Router();

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

adminRouteSize.route('/')
    .post(async (req, res) => {
        const decode = await JWT.decode(req.headers['x-access-token'], {complete: true});
        const { role } = decode.payload;

        if (role.indexOf('ROLE_ADMIN') !== -1){
            const create = await Size.createSize(req.body);
            res.json(create)
        }else {
            error('You are not an admin')
        }
    })