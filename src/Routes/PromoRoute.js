import express from 'express';
import Promo from '../Controllers/PromoController';

export const anonymeRoutePromo = express.Router();
export const adminRoutePromo = express.Router();


anonymeRoutePromo.route('/')
    .get(async (req, res) => {
        const Promos = await Promo.getAllPromo();
        res.json(Promos);
    })

anonymeRoutePromo.route('/:id')
    .get(async (req, res) => {
        const param = {
            id: req.params.id
        }
        const Promos = await Promo.getPromoById(param);
        res.json(Promos);
    })

adminRoutePromo.route('/add')
    .post(async (req, res) => {
        const param = {
            price: req.body.price,
            name: req.body.name
        };
        const Promos = await Promo.addPromo(param);
        res.json(Promos);
    })

adminRoutePromo.route('/delete/:id')
    .delete(async (req, res) => {
        const param = {
            id: req.params.id
        };
        const Promos = await Promo.deletePromo(param);
        res.json(Promos);
    })

adminRoutePromo.route('/update')
    .put(async (req, res) => {
        const param = {
            where: { id: req.body.id },
            data: {
                price: req.body.price,
                name: req.body.name
            }
        }
        const Promos = await Promo.updatePromo(param);
        res.json(Promos);
    })