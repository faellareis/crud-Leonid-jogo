'use scrict'

async function getListarJogo () {
    const url = 'http://localhost:8080/v1/controle-jogos/jogo'
    const response = await fetch(url)
    const data = await response.json()
    console.log (data)
    return data
}

console.log(getListarJogo)

async function getBuscarJogo(id) {
   const url = ` http://localhost:8080/v1/controle-jogos/jogo/${id}`
    const response = await fetch(url)
    const data = await response.json()
    console.log(data)
}

async function postInserirJogo (jogo){
    const url = 'http://localhost:8080/v1/controle-jogos/jogo'
    const options = {
        method: 'POST',
        headers: {
         'Content-Type': 'application/json'

        },
        body: JSON.stringify(jogo)
    }
        const response = await fetch (url, options)

        console.log(response)

        if(response.status == 201){
            alert('postagem Criada')
        }

        return response.ok 
}


async function  putAtualizarJogo (id, jogo){
    const url = `http://localhost:8080/v1/controle-jogos/jogo/${id}`
    const options = {
        method: 'PUT',
        headers: {
         'Content-Type': 'application/json'
        },
        body: JSON.stringify(jogo)
    }
        const response = await fetch (url, options)

        return response.ok 
}

// console.log(putAtualizarJogo(1, novoJogo))

const novoJogo = {
    "nome": "Marío7o Bross",
    "data_lancamento": "1986-06-03",
    "versao": "1.0",
    "tamanho": "500KB",
    "descricao": "Jogos bem legal para diversão",
    "foto_capa": "http://foto.jnp",
    "link": "http://downloadJogo.zip"
}   

// deleteExcluirJogo(6)

async function deleteExcluirJogo(id) {
    const url = `http://localhost:8080/v1/controle-jogos/jogo/delete/${id}`
    const options = {
        method: 'DELETE'
    }    
    const response = await fetch(url, options)
    return response.ok
}
