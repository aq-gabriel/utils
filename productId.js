const commerceItems = [
            {
                "priceInfo": {
                    "amount": 1
                },
                "quantity": 1,
                "productId": "1601",
                "productDisplayName": "#",
                "catalogRefId": "1601"
            },
            {
                "priceInfo": {
                    "amount": 2
                },
                "quantity": 1,
                "productId": "1532",
                "productDisplayName": "#",
                "catalogRefId": "1601"
            }
]
// pegar o id do commerceitens

/**
 *
 * @param {Array} CommercArray objetos do comerce item dentro de um array
 * @returns array com id dos produtos
 */
function commerceFormatItens(CommercArray) {
    // var novoArray = [];
    // //var novoArray = new Array();
    // for (var index = 0; index < CommercArray.length; index++) {
    //     novoArray.push(CommercArray[index].productId)
    // }
    // return novoArray

    return CommercArray.map(({ productId }) => productId)
}

console.log(commerceFormatItens(commerceItems))
