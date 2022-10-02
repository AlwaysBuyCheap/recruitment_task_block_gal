// SPDX-License-Identifier: UNLICENSED
pragma solidity ^0.8.9;

import "@openzeppelin/contracts/access/Ownable.sol";

/**
    En este contrato solo se puede registrar una ciudad por pais
 */
contract RegistroCiudades is Ownable {
    struct Ciudad {
        uint poblacion;
        uint tamanho;
        string gentilicio;
    }

    mapping (string => Ciudad) private paisesACiudades;

    function registrar(
        uint _poblacion,
        uint _tamanho,
        string memory _gentilicio,
        string memory _pais
    ) external onlyOwner {
        require(compareStrings(paisesACiudades[_pais].gentilicio, ""), "No se puede asignar mas de una ciudad por pais");

        paisesACiudades[_pais] = Ciudad(_poblacion, _tamanho, _gentilicio);
    }

    function consultar(string memory _pais) external view returns (Ciudad memory) {
        return paisesACiudades[_pais];
    }

    /**
        No se puede comparar strings directamente en solidity por lo que 
        hay que realizar la comparacion mediante una funcion de hash
     */
    function compareStrings(string memory a, string memory b) private pure returns (bool) {
        return (keccak256(abi.encodePacked((a))) == keccak256(abi.encodePacked((b))));
    }
}