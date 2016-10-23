##CORDOVA

1. Instalação
2. Configuração
3. Criando um projeto
4. Adicionando plataformas - web
5. Adicionando plataformas - android

### Instalação

Para instalar o cordova é necessario ter o npm instalado. Para mais instruções veja o site oficial: https://www.npmjs.com/get-npm.
Após instalação do npm, digite o comando abaixo:

```
npm install -g cordova
```

### Configuração

Para criar apps para android ou outra plataforma, veja a pagina de configuração do cordova em https://cordova.apache.org/docs/en/latest/guide/cli/index.html.

### Criando um projeto

Para criar um projeto digite o comando

```
cordova create [caminho-onde-o-app-será-criado]
```

Por exemplo:

```
cordova create ./Cordova
```

O conteudo (html, css e js), deve ficar dentro da pasta www.

### Adicionando plataformas - web

Plataforma pode ser: android, IOS, blackberry, WP ou um browser. 
Existem outras plataformas e você pode checar no site oficial em: https://cordova.apache.org/docs/en/latest/guide/cli/index.html

Para fazer com que seu app rode em um browser digite: 

```
cordova platform add browser
```

Para rodar use o seguinte comando:

```
cordova run browser
```

### Adicionando plataformas - android

Para fazer com que seu app rode no android: 

```
cordova platform add android
```

Para rodar use o seguinte comando:

```
cordova run android
```