Como no tenia muy claro si en el smart contract solo se puede registrar una ciudad
por cada pais o si en cada pais no se puede repetir la ciudad, he decidido crear
las dos versiones.

La primera sería la de los archivos RegistroCiudades.sol y scriptRegistroCiudades.js
La segunda sería la de los archivos RegistroCiudadesMultiples.sol y scriptRegistroCiudadesMultiples.js

Antes de ejecutar cualquier version hay que instalar las dependencias con el siguiente comando:
```
    npm install
```

Para ejecutar la primera version, utilizar el siguiente comando:
```
    tsc -p tsconfig.json
    node scripts/scriptRegistroCiudades.js
```

Para ejecutar la segunda version, utilizar el siguiente comando:
```
    tsc -p tsconfig.json
    node scripts/scriptRegistroCiudadesMultiples.js
```