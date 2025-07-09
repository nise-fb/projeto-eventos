# 📱 App de Eventos (React Native + Firebase)

Este é um projeto de aplicação mobile desenvolvido com **React Native** via **Expo**, focado em permitir que utilizadores visualizem, participem e favoritem eventos. Inclui um sistema completo de autenticação, visualização de detalhes dos eventos, gerenciamento de favoritos com campo de busca por data, nome e local.

---

## ✨ Funcionalidades

### Autenticação de Utilizadores:
- Registo de novos utilizadores com validação de campos.
- Login via e-mail e password.
- Logout de utilizadores.
- Verificação de autenticação para proteger rotas privadas (como favoritos e perfil).

### Listagem e Interação com Eventos:
- Listagem dinâmica de eventos a partir do Firebase Firestore.
- Visualização dos detalhes de cada evento.
- Participação em eventos com atualização no Firestore.
- Cancelamento de participação.

### Favoritos:
- Marcar e desmarcar eventos como favoritos.
- Tela dedicada para visualizar apenas os eventos favoritos.

### Perfil:
- Exibição do e-mail do utilizador logado.
- Logout com um clique.

  ### Campo de Busca
  - Pesuqisa por nome, data e local.

---

## 🔧 Tecnologias Utilizadas

- **Frontend:** React Native (via Expo)
- **Autenticação & Base de Dados:** Firebase (Auth + Firestore)
- **Navegação:** React Navigation (Stack & Bottom Tabs)
- **Estilo e UI:** React Native Paper, React Native Vector Icons
- **Outros:** Expo Router (opcional), AsyncStorage

---

## 🚀 Link do Projeto no Expo

👉 [Acesse o App no Expo.dev] (https://snack.expo.dev/@denisebezerra/projeto-eventos-1)

---

## 🧩 Estrutura de Pastas

├── App.js
├── firebaseConfig.js
├── context/
│ └── AuthContext.js
├── screens/
│ ├── Login.js
│ ├── Signup.js
│ ├── Home.js
│ ├── EventDetails.js
│ ├── Favorites.js
│ └── Profile.js


---

## 🛠️ Instalação e Execução

### Requisitos do Sistema

- Node.js (recomendado: ≥ 18.x)
- Expo CLI (`npm install -g expo-cli`)
- Conta gratuita no Firebase
- Emulador Android/iOS ou Expo Go no celular

### Passos

1. **Clonar o Repositório**

git clone https://github.com/seu-usuario/nome-do-repositorio.git
cd nome-do-repositorio

2. Instalar as dependências

npm install
# ou
yarn install

3.Configurar o Firebase

Crie um projeto no Firebase Console

Ative o Authentication > Email/Password

Crie as coleções users e events no Firestore

Copie as credenciais e crie o arquivo firebaseConfig.js:

import firebase from 'firebase/compat/app';
import 'firebase/compat/auth';
import 'firebase/compat/firestore';

const firebaseConfig = {
  apiKey: "SUA_API_KEY",
  authDomain: "SEU_DOMINIO",
  projectId: "SEU_PROJECT_ID",
  storageBucket: "SEU_BUCKET",
  messagingSenderId: "SEU_SENDER_ID",
  appId: "SEU_APP_ID"
};

if (!firebase.apps.length) {
  firebase.initializeApp(firebaseConfig);
}

export const auth = firebase.auth();
export const database = firebase.firestore();

4.Iniciar o projeto

npx expo start

Base de Dados Firebase (Coleções Recomendadas)
Coleção: events

{
  "id": "ID único",
  "titulo": "Nome do Evento",
  "descricao": "Descrição completa",
  "data": "2025-07-15",
  "local": "Localização do evento"
}

Coleção: users
{
  "uid": "ID do usuário",
  "favoritos": ["eventId1", "eventId2"],
  "participando": ["eventId1"]
}

Testes e Debug
O app foi testado no Expo Go (Android e iOS) e em emuladores Android Studio.

Utiliza console.log para debug local.

Status da autenticação e rotas protegidas são tratadas via contexto global (AuthContext.js).

