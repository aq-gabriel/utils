// função custom de split para o OIC
// const customPaymentProperties = ["paymentType, chosenInstallment"];
const customPaymentProperties = [];

/**
 *
 * @param {Array} data - Contento uma unica posição com uma string com valores separados
 * @param {*} smash - delimitador exemplo , | & % etc..
 * @returns Array com varios itens exemplo [1, 2, 3, 4, 5]
 */
function splits (data, smash) {
    try {
        // não se pode utiizar const nem let dentro do escopo do OIC
        var dataExt = data
        var smashExt = smash

        if (data.length > 0) {
            var newArray = data[data.length - 1].split(`${smash}`);
            return newArray;
        } else {
            throw 'O array repassado, está vazio!'
        }
    } catch (error) {
        console.log(error)
        return data
    }
}

console.log(typeof splits(customPaymentProperties, ","))



