import { prisma } from '../generated/prisma-client';
import { success, error } from '../returnFunc';

class PromoController {
    async checkId(param) {
        let check  = false;
        await this.getPromoById(param).then(resp => {
             switch (resp.status) {
                 case 'success':
                     check = true;
                 break;
                 case 'error' :
                     check = false;
                 break;
                 default :
                 check = false;
                 break;
             }
         });
         return check;
    }

    getAllPromo() {
        return new Promise(async (next) => {
            const Promos = await prisma.promoes()
            if (Promos.length > 0) {
                next(success(Promos));
            } else {
                next(success('no Promo'));
            }
        })
    }

    getPromoById(id) {
        return new Promise(async (next) => {
            const Promo = await prisma.promo(id);
            if (Promo) {
                next(success(Promo));
            } else {
                next(error('No Promo found for this id'));
            }
        })
    }

    addPromo(param) {
        return new Promise(async (next) => {
            if (param.price && param.name) {
                const Promos = await prisma.createPromo(param);
                next(success(Promos));
            } else {
                next(success('Empty fields'));
            }
        });
    }

    async deletePromo(param) {
        let check = this.checkId(param);

        return new Promise(async (next) => {
            if (await check) {
                const Promo = await prisma.deletePromo(param);
                next(success('The Promo has beed deleted'));
            } else {
                next(error('No Promo with this id'));
            }
        });
    }

    async updatePromo(param) {
        return new Promise(async (next) => {
            if (param.where.id && param.data.name && param.data.price) {
                const Promos = await prisma.updatePromo(param);
                next(success(Promos));
            } else {
                next(success('Empty fields. Please check all fields.'));
            }
        });
    }
}

export default new PromoController();