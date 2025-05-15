'use scrict'

async function getListarGenero () {
    const url = 'http://localhost:8080/v1/controle-generos/genero'
    const response = await fetch(url)
    const data = await response.json()
    console.log (data)
    return data
}

console.log(getListarGenero)

async function getBuscarGenero(id) {
   const url = `http://localhost:8080/v1/controle-generos/genero/${id}`
    const response = await fetch(url)
    const data = await response.json()
    console.log(data)
}

async function postInserirGenero (genero){
    const url = 'http://localhost:8080/v1/controle-generos/genero'
    const options = {
        method: 'POST',
        headers: {
         'Content-Type': 'application/json'

        },
        body: JSON.stringify(genero)
    }
        const response = await fetch (url, options)

        console.log(response)

        if(response.status == 201){
            alert('postagem Criada')
        }

        return response.ok 
}


async function  putAtualizarGenero (id, genero){
    const url = `http://localhost:8080/v1/controle-generos/genero/${id}`
    const options = {
        method: 'PUT',
        headers: {
         'Content-Type': 'application/json'
        },
        body: JSON.stringify(genero)
    }
        const response = await fetch (url, options)

        return response.ok 
}

// console.log(putAtualizarGenero(1, novoGenero))

const novoGenero = {
	"nome_genero": "Ação",
	"descricao_genero": "Gênero com foco em cenas intensas e adrenalina, como lutas e perseguições."
}   

// deleteExcluirGenero(6)

async function deleteExcluirGenero(id) {
    const url = `http://localhost:8080/v1/controle-generos/genero/delete/${id}`
    const options = {
        method: 'DELETE'
    }    
    const response = await fetch(url, options)
    return response.ok
}
