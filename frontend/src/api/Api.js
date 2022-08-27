import axios from 'axios'

export default function Api(handleSetVeiculos){
    

    return {
        
        pegarVeiculos: () => {
        
            axios.get('http://localhost:3333/veiculos')
            .then(res => res.data)
            .then(data => handleSetVeiculos(data))
            .catch(err => console.log(err))

        },   
        pegarVeiculo: (id, setVeiculo) => {
            
            axios.get(`http://localhost:3333/veiculos/${id}`)
            .then(res => res.data)
            .then(data => setVeiculo(data[0]))
            .catch(err => console.log(err))
        }, 

        adicionarVeiculo: (veiculo) => {
            
            axios.post('http://localhost:3333/veiculos', {
                headers: {
                    'Content-Type': 'application/json'
                },
                data: veiculo
            })
            .then(res => console.log(res))
            .catch(err => console.log(err))
        },

        excluirVeiculo(id){
            axios.delete(`http://localhost:3333/veiculos/${id}`)
            .then((res) => {
                console.log(res)
            })
            .catch(err => console.log(err))
        },
        
        atualizarVeiculo(veiculo){
            axios.patch(`http://localhost:3333/veiculos/${veiculo.id}`, {
                headers: {
                    'Content-Type': 'application/json'
                },
                data: veiculo
            })

        }
    }
}



