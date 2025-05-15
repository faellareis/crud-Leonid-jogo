'use scrict'

async function getListarFabricante () {
    const url = 'http://localhost:8080/v1/controle-fabricantes/fabricante'
    const response = await fetch(url)
    const data = await response.json()
    console.log (data)
    return data
}

console.log(getListarFabricante)

async function getBuscarFabricante(id) {
   const url = `http://localhost:8080/v1/controle-fabricantes/fabricante/${id}`
    const response = await fetch(url)
    const data = await response.json()
    console.log(data)
}

async function postInserirFabricante (fabricante){
    const url = 'http://localhost:8080/v1/controle-fabricantes/fabricante'
    const options = {
        method: 'POST',
        headers: {
         'Content-Type': 'application/json'

        },
        body: JSON.stringify(fabricante)
    }
        const response = await fetch (url, options)

        console.log(response)

        if(response.status == 201){
            alert('postagem Criada')
        }

        return response.ok 
}


async function  putAtualizarFabricante (id, fabricante){
    const url = `http://localhost:8080/v1/controle-fabricantes/fabricante/${id}`
    const options = {
        method: 'PUT',
        headers: {
         'Content-Type': 'application/json'
        },
        body: JSON.stringify(fabricante)
    }
        const response = await fetch (url, options)

        return response.ok 
}

// console.log(putAtualizarFabricante(1, novoFabricante))

const novoFabricante= {
    "nome_fabricante": "Sony"
}   

// deleteExcluirGenero(6)

async function deleteExcluirFabricante(id) {
    const url = `http://localhost:8080/v1/controle-fabricantes/fabricante/${id}`
    const options = {
        method: 'DELETE'
    }    
    const response = await fetch(url, options)
    return response.ok
}