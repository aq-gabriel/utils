// calculando placar

//player A
const scorePlayerA = [5, 6, 7, 11];
//player B
const scorePlayerB = [3, 6, 10, 12];

/**
 *
 * @param {Array} scorePlayerA com o placar do primeiro jogador
 * @param {Array} scorePlayerB com o placar do segundo jogador
 * @returns objeto com o placar
 */
function name (scorePlayerA, scorePlayerB) {
    // base do placar
    let item = [{a : 0}, {b : 0}];
    // percorre o array do primeiro jogador para comparar a posição do segundo player
    scorePlayerA.forEach((a, i) => {
        if (a !== scorePlayerB[i]) {

            a > scorePlayerB[i] ? item[0].a += 1 : item[1].b += 1;

        }
    });

    // retorna objeto com o placar
    return {
        'Score Player A': item[0].a,
        'Score Player B': item[1].b
    }
}

console.log(name(scorePlayerA, scorePlayerB));
