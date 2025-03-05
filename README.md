# Aplicativo "Trilhas" 🚵🥾

Aplicativo desenvolvido em React Native para a disciplina de Projeto de Interfaces para Dispositivos Móveis do semestre 2024.2 de Design Digital na UFC, Campus Quixadá.

## Como Funciona:

"Trilhas" é um aplicativo voltado para aqueles que desejam registrar e acompanhar seu progresso em trilhas. Utilizando GPS, o app mapeia o percurso em tempo real, contabiliza a distância percorrida e concede pontos por cada quilômetro e trilha concluída. 
Além disso, oferece funcionalidades para monitoramento de desempenho e registro de trilhas favoritas. Ideal para quem busca explorar a natureza de forma prática e gamificada!

Durante o processo de desenvolvimento, serão utilizadas as seguintes ferramentas:

1. **Framework:** React Native.
2. **Linguagem:** JavaScript.
3. **Componentes:** Utilização da biblioteca React Native Paper.
4. **Estilização:** Customização de interfaces usando StyleSheet.
5. **REST-API:** Reqres.

## Equipe do Projeto:

A equipe é composta por três membros, cada um com as respectivas funções:

**Scrum Master:** Emilly dos Anjos.  
**Product Owner:** João Alves.  
**Dev Team:** Rui Fernandes.

## Como Rodar o Aplicativo:

Siga os passos abaixo para rodar o aplicativo em seu ambiente de desenvolvimento, como o VSCode:

1. **Clone o repositório:**
```bash
git clone https://github.com/UFC-Dev-Mobile-2024-2/Trilhas.git
```

2. **Verifique se o Node.js está instalado (caso não esteja, ele pode ser instalado em: https://nodejs.org/pt):**
```bash
node -v
```

3. **Instale o Expo CLI:**
```bash
npm install -g expo-cli
```

4. **Entre na pasta do projeto e instale as suas dependências:**
```bash
cd Trilhas
npm install
```

5. **Inicie o servidor de desenvolvimento:**
```bash
npm start
```

6. **Abra o Expo Go:**
Após executar **_npm start_**, um QR code será gerado. Abra o aplicativo Expo Go no seu celular (disponível na Play Store ou App Store) e escaneie o QR Code para visualizar a aplicação em execução.

Assim, será possível visualizar e interagir com as telas do aplicativo, cuja navegação é gerenciada pelo arquivo **appnavigation.js**.

## Fazendo Login:

Para este projeto, utilizamos a REST-API Reqres para simular o login da aplicação (o cadastro de usuário também é simulado). Portanto, para executar o login e acessar as demais telas do aplicativo, utilize os dados abaixo:

```bash
email: eve.holt@reqres.in
senha: cityslicka
```
