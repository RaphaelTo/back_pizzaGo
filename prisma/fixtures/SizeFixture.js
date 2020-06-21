const { prisma } = require('../../src/generated/prisma-client');

async function sizeFixture() {
    await prisma.createSize({
        name: 'S',
        price: 2
    })

    await prisma.createSize({
        name: 'M',
        price: 2
    })
    
    await prisma.createSize({
        name: 'L',
        price: 2
    })
    
    await prisma.createSize({
        name: 'XL',
        price: 2
    })
}
sizeFixture().catch(e => console.error(e));
