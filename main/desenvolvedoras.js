'use scrict'

async function getListarDesenvolvedoras () {
    const url = 'http://localhost:8080/v1/controle-desenvolvedoras/desenvolvedora'
    const response = await fetch(url)
    const data = await response.json()
    console.log (data)
    return data
}

console.log(getListarDesenvolvedoras)

async function getBuscarDesenvolvedoras(id) {
   const url = `http://localhost:8080/v1/controle-desenvolvedoras/desenvolvedora/${id}`
    const response = await fetch(url)
    const data = await response.json()
    console.log(data)
}

async function postInserirDesenvolvedoras (desenvolvedora){
    const url = 'http://localhost:8080/v1/controle-desenvolvedoras/desenvolvedora'
    const options = {
        method: 'POST',
        headers: {
         'Content-Type': 'application/json'

        },
        body: JSON.stringify(desenvolvedora)
    }
        const response = await fetch (url, options)

        console.log(response)

        if(response.status == 201){
            alert('postagem Criada')
        }

        return response.ok 
}


async function  putAtualizarDesenvolvedora(id, desenvolvedora){
    const url = `http://localhost:8080/v1/controle-desenvolvedoras/desenvolvedora/${id}`
    const options = {
        method: 'PUT',
        headers: {
         'Content-Type': 'application/json'
        },
        body: JSON.stringify(desenvolvedora)
    }
        const response = await fetch (url, options)

        return response.ok 
}

// console.log(putAtualizarDesenvolvedoras(1, novaDesenvolvedora))

const novaDesenvolvedora= {
    "data_fundacao": "2000-04-15"
}   

// deleteExcluirDesenvolvedora(6)

async function deleteExcluirDesenvolvedora(id) {
    const url = `http://localhost:8080/v1/controle-desenvolvedoras/desenvolvedora/${id}`
    const options = {
        method: 'DELETE'
    }    
    const response = await fetch(url, options)
    return response.ok
}