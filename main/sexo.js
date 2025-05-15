'use scrict'

async function getListarSexo () {
    const url = 'http://localhost:8080/v1/controle-sexos/sexo'
    const response = await fetch(url)
    const data = await response.json()
    console.log (data)
    return data
}

console.log(getListarSexo)

async function getBuscarSexo(id) {
   const url = `http://localhost:8080/v1/controle-sexos/sexo/${id}`
    const response = await fetch(url)
    const data = await response.json()
    console.log(data)
}

async function postInserirSexo (sexo){
    const url = 'http://localhost:8080/v1/controle-sexos/sexo'
    const options = {
        method: 'POST',
        headers: {
         'Content-Type': 'application/json'

        },
        body: JSON.stringify(sexo)
    }
        const response = await fetch (url, options)

        console.log(response)

        if(response.status == 201){
            alert('postagem Criada')
        }

        return response.ok 
}


async function  putAtualizarSexo(id, sexo){
    const url = `http://localhost:8080/v1/controle-sexos/sexo/${id}`
    const options = {
        method: 'PUT',
        headers: {
         'Content-Type': 'application/json'
        },
        body: JSON.stringify(sexo)
    }
        const response = await fetch (url, options)

        return response.ok 
}

// console.log(putAtualizarSexo(1, novoSexo))

const novoSexo= {
   "sigla": "M",  
   "nome": "Masculino"
}   

// deleteExcluirSexo(6)

async function deleteExcluirSexo(id) {
    const url = `http://localhost:8080/v1/controle-sexos/sexo/delete/${id}`
    const options = {
        method: 'DELETE'
    }    
    const response = await fetch(url, options)
    return response.ok
}