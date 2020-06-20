const { prisma } = require('../../src/generated/prisma-client');

async function sizeFixture() {
    await prisma.createSize({
        name:"S",
        size: "S"
    })

    await prisma.createSize({
        name:"M",
        size: "M"
    })

    await prisma.createSize({
        name:"L",
        size: "L"
    })

    await prisma.createSize({
        name:"XL",
        size: "XL"
    })
}
sizeFixture().catch(e => console.error(e));
