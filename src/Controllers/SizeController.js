import { prisma } from '../generated/prisma-client';
import { success, error } from '../returnFunc';

class SizeController {
    getAllSize() {
        return new Promise(async (next) => {
            const Sizes = await prisma.sizes();
            if (Sizes.length > 0) {
                next(success(Sizes));
            } else {
                next(success('no Size'));
            }
        })
    }

    getSizeById(id) {
        return new Promise(async (next) => {
            const Size = await prisma.size(id)
            
            if (Size) {
                next(success(Size));
            }else {
                next(error('Id not found'));
            }
        })
    }
}

export default new SizeController;
