// retorna a key referente ao status de pagamento

/**
 *
 * @param { integer } status - código da transação
 * @returns string com o valor do tipo de transação validada
 */
function validStatusPayment (status) {
    // status de pagamento
    const transactionsStatus = {
        NotFinished: 0,
        Authorized: 1,
        PaymentConfirmed: 2,
        Denied: 3,
        Voided: 10,
        Refunded: 11,
        Pending: 12,
        Aborted: 13,
        Scheduled: 20
    };
    // obtem a chave de acordo com o código passado
    const property = Object
        .getOwnPropertyNames(transactionsStatus)
        .filter(transaction => transactionsStatus[transaction] === status)
        .toString()

    // valida se retorna
    if (!Object.values(transactionsStatus).includes(status)) {
        const error = new Error('O código informado não reflete a uma transação existente!')
        console.error({
            type: error.name,
            function: 'validStatusPayment',
            message: error.message,
        })
    } else {
        return property
    }
}

console.log(validStatusPayment(1));
