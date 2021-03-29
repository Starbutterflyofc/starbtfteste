const welcome = (number, groupname) => {
    return `Olá @${number}. Seja Bem-Vindo ao Grupo ${groupname}`
}
exports.welcome = welcome

const bye = (number) => {
    return `Adeus @${number}. Já Vai Tarde 👋`
}
exports.bye = bye