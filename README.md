# vue-test-code

## Project setup
```
yarn install
```

### Compiles and hot-reloads for development
```
yarn serve
```

### Compiles and minifies for production
```
yarn build
```

### Lints and fixes files
```
yarn lint
```

### Customize configuration
See [Configuration Reference](https://cli.vuejs.org/config/).

Expected Output :
![expected](./src/assets/Expected.png)


### Bug
Get Api tidak bisa mengembalikan hasil request untuk di tampilkan ke component yang menggunakannya 


### Analitic
store tidak mengembalikan value dari hasil get api


### Solution
- untuk melakukan request sebaiknya menggunakan Asynchronous system

- untuk pengkodean REST API sebaiknya di lakukan di dalam store
- jika pada saat get api tidak ada perubahan bisa menggunakan hasil dari action, namun data bisa di simpan di store.