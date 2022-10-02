import abi from '../abis/RegistroCiudades.json'
import { BigNumber, ethers } from 'ethers'

const FANTOM_TESNET_RPC = "https://rpc.testnet.fantom.network/"
const FANTOM_TESNET_RPC_2 = "https://rpc.ankr.com/fantom_testnet"	
const CONTRACT_ADDRESS = "0xa75AcC251699AD682e4F33A520DFe31d9fb2A515"
const RANDOM_PRIVATE_KEY = '009afec3d726e24ca3207c7bd80ad89e9942f65018910a2802a4e6213153d3aa'

interface Ciudad {
    poblacion: BigNumber
    tamanho: BigNumber
    gentilicio: string
}

const ejemplo = {
    poblacion: 3000000,
    tamanho: 100,
    gentilicio: "Lyon",
    pais: "Francia"
}

const Main = async () => {

    try {
        const provider = new ethers.providers.JsonRpcProvider(FANTOM_TESNET_RPC)

        const wallet = new ethers.Wallet(RANDOM_PRIVATE_KEY, provider)
    
        const contract = new ethers.Contract(CONTRACT_ADDRESS, abi, wallet)
        
        if ((await consultar(contract, ejemplo.pais)).gentilicio === "") {
            
            await contract.functions.registrar(
                ejemplo.poblacion, 
                ejemplo.tamanho, 
                ejemplo.gentilicio, 
                ejemplo.pais
            )
        }
        else {
            console.log(`
                La funcion de registro no ha sido ejecutada ya que ya
                hay un pais con nombre ${ejemplo.pais} registrado, por 
                lo que al ejecutar la funcion con ese parametro se
                lanzara un error
            `)
        }
    
        const consulta = await consultar(contract, ejemplo.pais)    

        console.log(`Tamaño: ${consulta.tamanho.toString()}`)
        console.log(`Poblacion: ${consulta.poblacion.toString()}`)
        console.log(`Gentilicio: ${consulta.gentilicio}`)
    }
    catch(error) {
        console.log(error)
    }
}

const consultar = async (contract: ethers.Contract, pais: string): Promise<Ciudad> => {
    return (await contract.functions.consultar(pais))[0]
}

Main()

