const { prisma } = require('../../src/generated/prisma-client');

async function dessertFixture() {
    await prisma.createDessert({
        price: 3.50,
        name: 'Tiramisu nutella',
        img: 'https://img.cuisineaz.com/610x610/2016-02-07/i79723-tiramisu-au-nutella.jpg'
    })

    await prisma.createDessert({
        price: 3.50,
        name: 'Tiramisu oreo',
        img: 'https://www.yumelise.fr/wp-content/uploads/2019/08/tiramisu-oreo-2.jpg'
    })

    await prisma.createDessert({
        price: 2.50,
        name: 'Fondant au chocolat',
        img: 'https://i-reg.unimedias.fr/sites/art-de-vivre/files/styles/recipe/public/Import/coulant-fondant-chocolat_ss.jpg?auto=compress%2Cformat&crop=faces%2Cedges&cs=srgb&fit=crop&h=500&w=393'
    })
}
dessertFixture().catch(e => console.error(e));
