// modelo de payload com 2 niveis
const data = {
    name: "Gabriel Anastacio de Aquino",
    age: "26",
    message: "Este é apenas um modelo de payload!",
    sex: "M",
    natural: "Brasilian",
    city: "araraquara",
    favoriteColor: {
        rgb: "#FFFFFF",
        nome: "white",
    },
};

// array com as properties que serão removidas do payload
const remove = [
    "name",
    "age",
    "city",
    "favoriteColor.rgb",
    "favoriteColor.nome",
];

/**
 *
 * @Object objeto utilizado no payload durante as requests
 * @Array args array simples com os elementos de n niveis a serem removidos
 * @returns retorna um novo objeto
 */
const recreatePayload = (payload = {}, args = []) => {
    // cria um objeto vazio
    let obj = {};
    let newArgs = [];

    // obtem todas as chaves do payload
    const keysPayload = Object.keys(payload);

    keysPayload
        .filter((key) => !args.includes(key))
        .forEach((property) => {
            args.forEach((arg) => {
                // verifica a existência de um item correspondente no args de acordo com as properties
                if (arg.indexOf(property) !== -1) {
                    //obtem o item que iremos remover no caso de um
                    //payload apartir do segundo nivel
                    newArgs.push(arg.slice(arg.indexOf(".") + 1, arg.length));
                    // retorna o novo nivel do payload sem o item do novo argumento
                    return (payload[property] = recreatePayload(
                        payload[property],
                        newArgs
                    ));
                }
            });
            // retorna a nova property do payload
            obj[property] = payload[property];
        });
    //retorna o novo objeto
    return obj;
};
console.log(recreatePayload(data, remove));
