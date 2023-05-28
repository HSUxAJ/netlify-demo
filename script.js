const list = document.getElementById('list');
const input = document.getElementById('person-input');
// const addButton = document.getElementById('add-btn');

// 初始化 Firebase
const firebaseConfig = {
  apiKey: "AIzaSyDHP_6Try_QBQri-25_WGUegQn2GiLDxt0",
  authDomain: "line-bot-c9ed0.firebaseapp.com",
  projectId: "line-bot-c9ed0",
  storageBucket: "line-bot-c9ed0.appspot.com",
  messagingSenderId: "880021780854",
  appId: "1:880021780854:web:852f894d6e674fbe70e257",
  measurementId: "G-216V2TNXZ4"
};

firebase.initializeApp(firebaseConfig);

// 取得 Firestore 的實例
const firestore = firebase.firestore();

function createPerson(name) {
  const li = document.createElement('li');
  li.innerText = name;

  const deleteBtn = document.createElement('button');
  deleteBtn.innerText = '刪除';

  deleteBtn.addEventListener('click', () => {
    showConfirmationDialog(name, li);
  });

  li.appendChild(deleteBtn);
  list.appendChild(li);
}

function showConfirmationDialog(name, li) {
  const confirmation = confirm(`確定要刪除 ${name} 嗎？`);
  if (confirmation) {
    li.remove();
  }
}

const personNames = [];

// Retrieve data from Firestore
firestore.collection("Tourist_Guide").get().then((querySnapshot) => {
  querySnapshot.forEach((doc) => {
    var data = doc.data();
    personNames.push(data.name);
    // console.log(data.name);
  });

  // Further operations relying on personNames can be performed here
  console.log(personNames);
  personNames.forEach(name => createPerson(name));
}).catch((error) => {
  console.log("Error fetching collection:", error);
});

