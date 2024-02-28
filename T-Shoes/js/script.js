console.log('TShoes')

const getProducts = async () => {
    const response = await fetch('js/products.json')
    const data = await response.json()
    return data
}

const generateCard = async () => {

    const products = await getProducts()

    products.map(product => {
        // console.log(product)
        let card = document.createElement('div')
        card.classList.add('card__produto')
        console.log(card)

})

generateCard()