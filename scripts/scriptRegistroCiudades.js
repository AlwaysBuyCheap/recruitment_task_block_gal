"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const RegistroCiudades_json_1 = __importDefault(require("../abis/RegistroCiudades.json"));
const ethers_1 = require("ethers");
const FANTOM_TESNET_RPC = "https://rpc.testnet.fantom.network/";
const FANTOM_TESNET_RPC_2 = "https://rpc.ankr.com/fantom_testnet";
const CONTRACT_ADDRESS = "0xa75AcC251699AD682e4F33A520DFe31d9fb2A515";
const RANDOM_PRIVATE_KEY = '009afec3d726e24ca3207c7bd80ad89e9942f65018910a2802a4e6213153d3aa';
const ejemplo = {
    poblacion: 3000000,
    tamanho: 100,
    gentilicio: "Lyon",
    pais: "Francia"
};
const Main = () => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const provider = new ethers_1.ethers.providers.JsonRpcProvider(FANTOM_TESNET_RPC);
        const wallet = new ethers_1.ethers.Wallet(RANDOM_PRIVATE_KEY, provider);
        const contract = new ethers_1.ethers.Contract(CONTRACT_ADDRESS, RegistroCiudades_json_1.default, wallet);
        if ((yield consultar(contract, ejemplo.pais)).gentilicio === "") {
            yield contract.functions.registrar(ejemplo.poblacion, ejemplo.tamanho, ejemplo.gentilicio, ejemplo.pais);
        }
        else {
            console.log(`
                La funcion de registro no ha sido ejecutada ya que ya
                hay un pais con nombre ${ejemplo.pais} registrado, por 
                lo que al ejecutar la funcion con ese parametro se
                lanzara un error
            `);
        }
        const consulta = yield consultar(contract, ejemplo.pais);
        console.log(`Tamaño: ${consulta.tamanho.toString()}`);
        console.log(`Poblacion: ${consulta.poblacion.toString()}`);
        console.log(`Gentilicio: ${consulta.gentilicio}`);
    }
    catch (error) {
        console.log(error);
    }
});
const consultar = (contract, pais) => __awaiter(void 0, void 0, void 0, function* () {
    return (yield contract.functions.consultar(pais))[0];
});
Main();
