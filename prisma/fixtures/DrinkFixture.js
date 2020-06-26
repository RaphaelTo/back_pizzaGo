const { prisma } = require('../../src/generated/prisma-client');

async function drinkFixture() {
    await prisma.createDrink({
        price: 1.50,
        img: 'https://www.staples.fr/content/images/product/72255-00H_1_xnl.jpg',
        name: 'Coca-Cola',
        oz: 2.5,
    })

    await prisma.createDrink({
        price: 2.50,
        img: 'https://www.centraleboissons.com/19610-large_default/orangina-vp25cl-x32.jpg',
        name: 'Orangina',
        oz: 1.5,
    })

    await prisma.createDrink({
        price: 0.50,
        img: 'https://www.staples.fr/content/images/product/74510-00H_1_xnl.jpg',
        name: 'Evian',
        oz: 1.0,
    })

    await prisma.createDrink({
        price: 3.00,
        img: 'https://www.philpizz.fr/168-thickbox_default/red-bull-25-cl.jpg',
        name: 'RedBull',
        oz: 1.25,
    })
}
drinkFixture().catch(e => console.error(e));
