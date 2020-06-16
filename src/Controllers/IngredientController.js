import { prisma } from '../generated/prisma-client';
import { success, error } from '../returnFunc';

class IngredientController {
   async checkId(param) {
        let check  = false;
        await this.getIngredientById(param).then(resp => {
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

    getAllIngredient() {
        return new Promise(async (next) => {
            const Ingredients = await prisma.ingredients()
            if (Ingredients.length > 0) {
                next(success(Ingredients));
            } else {
                next(success('no ingredient'));
            }
        })
    }

    getIngredientById(id) {
        return new Promise(async (next) => {
            const Ingredient = await prisma.ingredient(id);
            if (Ingredient) {
                next(success(Ingredient));
            } else {
                next(error('No ingredient found for this id'));
            }
        })
    }

    addIngredient(param) {
        return new Promise(async (next) => {
            if (param.price && param.name && param.oz) {
                const Ingredients = await prisma.createIngredient(param);
                next(success(Ingredients));
            } else {
                next(success('Empty fields'));
            }
        });
    }

   async deleteIngredient(param) {
        let check = this.checkId(param);

        return new Promise(async (next) => {
            if (await check) {
                const Ingredient = await prisma.deleteIngredient(param);
                next(success('The Ingredient has beed deleted'));
            } else {
                next(error('No Ingredient with this id'));
            }
        });
    }

    async updateIngredient(param) {
        return new Promise(async (next) => {
            if (param.where.id && param.data.name && param.data.oz && param.data.price) {
                const Ingredients = await prisma.updateIngredient(param);
                next(success(Ingredients));
            } else {
                next(success('Empty fields. Please check all fields.'));
            }
        });
    }
}

export default new IngredientController();