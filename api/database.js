const json = require('../utils/test.json');
const obj = json.time
const array = obj;

function getSearch(search) {

    const nome = array.find(element => element.nome = search)
    return nome;

}
function getId(id) {

    const findId = array.filter((response) => {

        if (response.id == id) {
            return id;
        }
    })
    return findId
}

function getTest() {
    return obj
}

module.exports = {
    getTest,
    getId,
    getSearch
}