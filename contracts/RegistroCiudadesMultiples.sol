// SPDX-License-Identifier: UNLICENSED
pragma solidity ^0.8.9;

import "@openzeppelin/contracts/access/Ownable.sol";

/**
    En este contrato se pueden registrar multiples ciudades en cada
    pais, la unica restriccion es que no se puede repetir una ciudad
    en un mismo pais
 */
contract RegistroCiudadesMultiples is Ownable {
    struct Pais {
        Ciudad[] ciudades;
        mapping (string => uint) nombreCiudadACiudadId;
    }

    struct Ciudad {
        uint poblacion;
        uint tamanho;
        string gentilicio;
    }

    mapping (string => Pais) private paises;

    function registrar(
        uint _poblacion,
        uint _tamanho,
        string memory _gentilicio,
        string memory _pais
    ) external onlyOwner {
        require(paises[_pais].nombreCiudadACiudadId[_gentilicio] == 0, "No se puede repetir la ciudad");

        paises[_pais].nombreCiudadACiudadId[_gentilicio] = paises[_pais].ciudades.length + 1;
        paises[_pais].ciudades.push(Ciudad(_poblacion, _tamanho, _gentilicio));
    }

    function consultar(string memory _pais) external view returns (Ciudad[] memory) {
        return paises[_pais].ciudades;
    }

    function consultarCiudad(
        string memory _pais, 
        string memory _ciudad
    ) external view returns (Ciudad memory) {
        
        if (paises[_pais].ciudades.length == 0) {
            return Ciudad(0, 0, "");
        }

        return paises[_pais].ciudades[paises[_pais].nombreCiudadACiudadId[_ciudad] - 1];
    }
}