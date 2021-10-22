/**
 * O problema consistia em receber uma data vinda sem o timezone - fuso horario e como as transações
 * são feitas no mesmo instante a solução era substituir o tempo zerado pelo timezone atual de forma
 * mais tranquila e errada, eis a solução, foi necessario esta solução para o front
 *
 */

// data hipotética vinda do serviço
let serviceData = new Date('2021-09-10T00:00:00.00Z')

// result date ok = 2021-09-10T15:40:02.444Z
const correctDate = dateAdjust(serviceData);

// caso queira que traga no formato en - US e / ou pt - BR { pt - BR: '10/09/2021', en - US: '9/10/2021' }
const data = {
    br: `${correctDate.toLocaleDateString("pt-BR")} : ${correctDate.toLocaleTimeString("pt-BR")} `,
    us: `${correctDate.toLocaleDateString("en-US")} : ${correctDate.toLocaleTimeString("en-US")}`
}
/**
 *
 * @param { date } - data , para esse caso sem utc '2021-09-10T00:00:00.00Z'
 * @returns new Date() == 2021-09-10T15:40:02.444Z
 */
function dateAdjust (date) {
    // return [ '2021-09-10', '00:00:00.000Z' ]
    const primeiro = serviceData.toISOString().split('T');

    //return [ '2021-09-13', '15:39:06.433Z' ]
    const segundo = new Date().toISOString().split('T');

    // result date ok = 2021-09-10T15:40:02.444Z
    return new Date(`${primeiro[0]}T${segundo[1]}`);
}

console.log(correctDate) // acredito que até aqui é o que você precisa
// return { br: '10/09/2021 : 12:49:19 ', us: '9/10/2021 : 12:49:19 PM' }
console.log(data)


// Novo jeito de resolver o que foi feito

// data hipotética vinda do serviço
var minhaDate = '2021-09-10T00:00:00.000Z'

//gerenciando o formato da data
var nova = new Date(minhaDate.replace(/-/g, '\/').replace(/T.+/, ''));
// 2021-09-10T03:00:00.000Z
console.log(nova)
