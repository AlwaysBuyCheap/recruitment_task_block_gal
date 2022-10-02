Como no tenia muy claro si en el smart contract solo se puede registrar una ciudad
por cada pais o si en cada pais no se puede repetir la ciudad, he decidido crear
las dos versiones.

La primera sería la de los archivos RegistroCiudades.sol y scriptRegistroCiudades.js,
su direccion es: 0xa75AcC251699AD682e4F33A520DFe31d9fb2A515

La segunda sería la de los archivos RegistroCiudadesMultiples.sol y scriptRegistroCiudadesMultiples.js,
su direccion es: 0xc78c26f1546F02Df133e2187ca3756e66E947c52

Antes de ejecutar cualquier version hay que instalar las dependencias con el siguiente comando:
```
    npm install
```

Para ejecutar la primera version, utilizar el siguiente comando:
```
    node scripts/scriptRegistroCiudades.js
```

Para ejecutar la segunda version, utilizar el siguiente comando:
```
    node scripts/scriptRegistroCiudadesMultiples.js
```

Si se realiza algun cambio en los archivos de typescript hay que ejecutar el siguiente comando
para compilarlos:
```
    tsc -p tsconfig.json
```
