const { prisma } = require('../../src/generated/prisma-client');

async function pizzaFixture() {

    await prisma.createPizza({
        name: 'La cannibale',
        composition: {
            sauce: 'tomato',
            cheese: true
        },
        size:{
            connect: {
                id: 'ckbo9eit200g40759dhumypx2'
            }
        },
        category: {
            connect: {
                id: 'ckbodlnip00kx0759qsin9irc'
            }
        }
    })

    await prisma.createPizza({
        name: 'La vegetarienne',
        composition: {
            sauce: 'tomato',
            cheese: true,
            viande: 'poulet'
        },
        size:{
            connect: {
                id: 'ckbo9eit200g40759dhumypx2'
            }
        },
        category: {
            connect: {
                id: 'ckbodlnip00kx0759qsin9irc'
            }
        }
    })
}
pizzaFixture().catch(e => console.error(e));