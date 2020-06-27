const { prisma } = require('../../src/generated/prisma-client');

async function pizzaFixture() {

    await prisma.createPizza({
        name: 'La cannibale',
        img: 'https://www.dominos.fr/ManagedAssets/FR/product/PORI/FR_PORI_fr_hero_3744.png?v-666378964',
        composition: {
            sauce: 'tomato',
            cheese: true
        },
        size:{
            connect: {
                id: 'ckbw8yy2l005p0759t936p4dd'
            }
        },
        category: {
            connect: {
                id: 'ckbw8yrle004v0759ut138hav'
            }
        }
    })

    await prisma.createPizza({
        name: 'Boursin',
        img: 'https://www.dominos.fr/ManagedAssets/FR/product/PBOU/FR_PBOU_fr_hero_4205.jpg?v-650703197',
        composition: {
            sauce: 'tomato',
            cheese: true
        },
        size:{
            connect: {
                id: 'ckbw8yy2l005p0759t936p4dd'
            }
        },
        category: {
            connect: {
                id: 'ckbw8yrmd00500759slwn3g4r'
            }
        }
    })

    await prisma.createPizza({
        name: 'Vegan Peppina',
        img: 'https://www.dominos.fr/ManagedAssets/FR/product/PVPE/FR_PVPE_fr_hero_3117.png?v-550621428',
        composition: {
            sauce: 'tomato',
            cheese: true
        },
        size:{
            connect: {
                id: 'ckbw8yy2l005p0759t936p4dd'
            }
        },
        category: {
            connect: {
                id: 'ckbw8yrmd00500759slwn3g4r'
            }
        }
    })

    await prisma.createPizza({
        name: 'Pepperoni',
        img: 'https://www.dominos.fr/ManagedAssets/FR/product/PDIP/FR_PDIP_fr_hero_3744.png?v1515771323',
        composition: {
            sauce: 'tomato',
            cheese: true
        },
        size:{
            connect: {
                id: 'ckbw8yy2l005p0759t936p4dd'
            }
        },
        category: {
            connect: {
                id: 'ckbw8yrmd00500759slwn3g4r'
            }
        }
    })

    await prisma.createPizza({
        name: 'Kebab',
        img: 'https://www.dominos.fr/ManagedAssets/FR/product/PRYK/FR_PRYK_fr_hero_3555.png?v-1007165671',
        composition: {
            sauce: 'tomato',
            cheese: true
        },
        size:{
            connect: {
                id: 'ckbw8yy2l005p0759t936p4dd'
            }
        },
        category: {
            connect: {
                id: 'ckbw8yrle004v0759ut138hav'
            }
        }
    })

    await prisma.createPizza({
        name: 'Bacon Groovy',
        img: 'https://www.dominos.fr/ManagedAssets/FR/product/PBCG/FR_PBCG_fr_hero_2762.png?v-1641942369',
        composition: {
            sauce: 'tomato',
            cheese: true,
            viande: 'poulet'
        },
        size:{
            connect: {
                id: 'ckbw8yy2l005p0759t936p4dd'
            }
        },
        category: {
            connect: {
                id: 'ckbw8yrle004v0759ut138hav'
            }
        }
    })

    await prisma.createPizza({
        name: 'Savoyarde',
        img: 'https://www.dominos.fr/ManagedAssets/FR/product/PSVY/FR_PSVY_fr_hero_2047.png?v-1921701074',
        composition: {
            sauce: 'tomato',
            cheese: true,
            viande: 'poulet'
        },
        size:{
            connect: {
                id: 'ckbw8yy2l005p0759t936p4dd'
            }
        },
        category: {
            connect: {
                id: 'ckbw8yrle004v0759ut138hav'
            }
        }
    })

    await prisma.createPizza({
        name: 'Saumon',
        img: 'https://www.dominos.fr/ManagedAssets/FR/product/PSSE/FR_PSSE_fr_hero_2142.png?v669834368',
        composition: {
            sauce: 'tomato',
            cheese: true,
            viande: 'poulet'
        },
        size:{
            connect: {
                id: 'ckbw8yy2l005p0759t936p4dd'
            }
        },
        category: {
            connect: {
                id: 'ckbw8yrle004v0759ut138hav'
            }
        }
    })

    await prisma.createPizza({
        name: 'Orientale',
        img: 'https://www.dominos.fr/ManagedAssets/FR/product/PORI/FR_PORI_fr_hero_3744.png?v-666378964',
        composition: {
            sauce: 'tomato',
            cheese: true,
            viande: 'poulet'
        },
        size:{
            connect: {
                id: 'ckbw8yy2l005p0759t936p4dd'
            }
        },
        category: {
            connect: {
                id: 'ckbw8yrle004v0759ut138hav'
            }
        }
    })
}
pizzaFixture().catch(e => console.error(e));