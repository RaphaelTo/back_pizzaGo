const { prisma } = require('../../src/generated/prisma-client');

async function orderFixture() {
    await prisma.createOrder({
        id: 'ckbzqunu301x4092841mx87b4',
        price: 12,
        status: 2,
        user: {
            connect: {
                id: 'ckbzqunu301x4092841mxl1v8'
            }
        },
        content: { pizza: {} },
        promo: {
            connect: {
                id: 'ckbzqprmy01u80928gubu3xa5'
            }
        },
    })
    await prisma.createOrder({
        id: 'ckbvdhe5301x4092841mx87b4',
        price: 25,
        status: 5,
        user: {
            connect: {
                id: 'ckbzqunu301x4092841mxl1v8'
            }
        },
        content: { pizza: {} },
        promo: {
            connect: {
                id: 'ckbzqprmy98g80928gubu3rt3'
            }
        },
    })

}
orderFixture().catch(e => console.error(e));
