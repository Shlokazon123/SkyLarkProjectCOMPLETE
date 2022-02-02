var firebaseConfig = {
  apiKey: "AIzaSyBuTaOmgdk0hKGlDbzkUGk0164fDm_zFvk",
  authDomain: "kwitter-4106e.firebaseapp.com",
  databaseURL: "https://kwitter-4106e-default-rtdb.firebaseio.com",
  projectId: "kwitter-4106e",
  storageBucket: "kwitter-4106e.appspot.com",
  messagingSenderId: "763759003413",
  appId: "1:763759003413:web:6561976c1ee16d8a934b1c"
};
// Initialize Firebase
firebase.initializeApp(firebaseConfig);

user_name = localStorage.getItem("UserName");

document.getElementById("Wn1").innerHTML = "Welcome " + user_name + "!";

function addRoom() {
  room_name = document.getElementById("in2").value;
  firebase.database().ref("/").child(room_name).update({
    purpose: "adding room name"
  });

  localStorage.setItem("room_name", room_name);

  window.location = "index3.html";
}

function getData() {
  firebase.database().ref("/").on('value', function (snapshot) {
    document.getElementById("dn1").innerHTML = "";
    snapshot.forEach(function (childSnapshot) {
      childKey = childSnapshot.key;
      Room_names = childKey;
      console.log("Room Name - " + Room_names);
      row = "<div class='room_name' id=" + Room_names + " onclick='redirectToRoomName(this.id)' >#" + Room_names + "</div><hr>";
      document.getElementById("dn1").innerHTML += row;

    });
  });

}

getData();

function redirectToRoomName(name) {
  console.log(name);
  localStorage.setItem("room_name", name);
  window.location = "index3.html";
}

function logout() {
  localStorage.removeItem("user_name");
  localStorage.removeItem("room_name");
  window.location = "index.html";
}