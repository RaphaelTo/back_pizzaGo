const { prisma } = require('../../src/generated/prisma-client');

async function promoFixture() {
    await prisma.createPromo({
        name: 'Bon Plans',
        amount: 10,
    })

    await prisma.createPromo({
        name: 'Hiver chaud',
        amount: 25,
    })
}
promoFixture().catch(e => console.error(e));