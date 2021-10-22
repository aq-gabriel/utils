
// Preste atenção pois as premissas são verdadeiras
// Sempre vai ser passado array de 0 a 9
// [0, 1, 2, 3, 4, 5, 7, 8, 9]
// Sempre vão ser numeros inteiros
// Sempre vai faltar apenas um numero
const arr = [0, 1, 2, 3, 4, 5, 7, 8, 9]

/**
 *
 * @param {Array} arr array com o indice faltante
 * @param {*} limiter array fixo com todos os itens de 0 a 9
 * @returns numero inteiro que falta no array passado
 */
function cleber (arr, limiter = 45) {
    return limiter - arr.reduce((acc, cur) => acc += cur);
}


/**
 *
 * @param {*} arr array com o indice faltante
 * @param {*} limiter array fixo com todos os itens de 0 a 9
 * @returns numero inteiro que falta no array passado
 */
function darley (arr, limiter = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9]) {
    return limiter.filter(x => !arr.includes(x))[0]
}

// retorne o numero que falta no array
console.log(cleber(arr))
console.log(cleber(arr) < 0)
console.log(cleber([0, 1, 2, 3, 4, 5, 6, 7, 8]))
console.log('-----------------------------------------------')
console.log(darley(arr))
console.log(darley(arr) < 0)
console.log(darley([0, 1, 2, 3, 4, 5, 6, 7, 8]))
