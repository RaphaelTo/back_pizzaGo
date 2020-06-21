const { prisma } = require('../../src/generated/prisma-client');

async function orderFixture() {
    await prisma.createOrder({
        price: 12,
        status: 2,
        user: {
            connect: {
                id: 'ckbo6bsa900320777miy7ecvg'
            }
        },
        content: {pizza: {}},
        promo: {
            connect: {
                id: 'ckbo6bcst002r0777q7r8bsrf'
            }
        },
    })
    await prisma.createOrder({
        price: 25,
        status: 5,
        user: {
            connect: {
                id: 'ckbo6bsa900320777miy7ecvg'
            }
        },
        content: {pizza: {}},
        promo: {
            connect: {
                id: 'ckbo6bcst002r0777q7r8bsrf'
            }
        },
    })

}
orderFixture().catch(e => console.error(e));
