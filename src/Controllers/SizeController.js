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
}

export default new SizeController;
