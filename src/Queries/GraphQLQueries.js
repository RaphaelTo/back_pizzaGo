export const getPizzaCatIng = `
    fragment getPizzaCatIng on Pizza {
        id
        name
        composition
        size{
            id
            name
            price
        }
        category {
            id
            name
        }
    }
`

export const getPizzaByCat = (name) => {
    return `
        query {
            pizzas(where: {category : {name : "${name}"}}) {
                id
                name
                composition
                size{
                    id
                    name
                    price
                }
                category {
                    id
                    name
                }
            }
        }
    `
} 

export const getOnlyMailUser = (email) => {
    return `
        query {
            users(where : {email : "${email}"}){
                email
            }
        }
    `
}

export const getUser = (email) => {
    return `
        query {
            users(where : {email : "${email}"}){
                email
                password
                role
                tokenActivate
            }
        }
    `
}

export const getOrderWithUser = `
    fragment getOrderWithUser on Order {
        id
        price
        date
        status
        user {
            id
            lastname
            firstname
            tel
        }
        content
        promo {
            id
            name
            amount
        }
    }
`