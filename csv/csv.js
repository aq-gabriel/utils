// script feito para ler uma planilha do cliente e transformar em um payload de orders com itens agrupados
const neatCsv = require('neat-csv')

const fs = require('fs')

fs.readFile('./assets/itens.csv', async (err, data) => {
    if (err) throw err
    // cria objetos de acordo com as linhas do csv
    const results = await neatCsv(data)
    // remove os itens com valor total zerado
    const noZero = results.filter(({ VALORERRADO, VALORTOTAL }) => VALORERRADO === '1' && VALORTOTAL !== 'R$ 0,00')
    // separa somente o id da ordem de forma ordenada
    const allOrdersId = noZero.map(({ ORDERID }) => ORDERID).sort((a, b) => b - a)
    // remove itens duplicados
    const ordersId = [... new Set(allOrdersId)]
    // agrupa o objecto da order em um array com itens com a mesma order
    const ordersGrouped = ordersId.map(id => noZero.filter(({ ORDERID }) => ORDERID === id).map(item => item))

    // percorre o array de orders
    const groupOrders = ordersGrouped.map((group) => {
        // itens da order
        const itens = formatItens(group);

        // calcula o valor total da order
        const total = itens.map(item => item.winthorPrice).reduce((acc, cur) => acc + cur);

        // retorna o objeto da order
        return {
            "orderId": getIdOrder(group),
            "status": 'APPROVED',
            "total": Number(total.toFixed(2)),
            "updateOrder": true,
            "captureAmount": false,
            "items": itens
        }
    })
    // grava o payload no arquivo
    file('./assets/payload.json', JSON.stringify({ groupOrders }))

})

/**
 *
 * @param {*} absolutePath path da maquina
 * @param {*} data dados a serem gravados
 */
const file = (absolutePath, data) => {
    fs.writeFile(absolutePath, data, (err) => {
        if (err) throw err

        return console.log(`O arquivo ${absolutePath} foi criado`)
    })
}

/**
 *
 * @param {string} valortotal string com o valor do item "R$ 12,01"
 * @returns number 1.
 */
function formatValue (valortotal) {
    // prepara o valor total para conversar de number
    valortotal = valortotal.replace('R$ ', '')
    // valor total do item
    return valortotal.includes('.')
        ? valortotal.replace(/\./, '').replace(',', '.')
        : valortotal.replace(',', '.')
}

/**
 *
 * @param {Array} group orders ordenadas
 * @returns array de objetos
 */
function formatItens (group) {
    // separa todos os itens do grupo
    return group.map(({ ITEMID, QUANTIDADETOTAL, VALORTOTAL }) => ({
        id: ITEMID,
        quantity: 1,
        multiple: QUANTIDADETOTAL.replace(',', '.'),
        winthorPrice: Number(formatValue(VALORTOTAL))
    }))
}

/**
 *
 * @param {*} group orders
 * @returns id da order
 */
function getIdOrder (group) {
    // separa o id order do grupo
    return [... new Set(group.map(order => order.ORDERID))][0];
}
