var firebaseConfig = {
    apiKey: "AIzaSyCscMPbXuoredN9uNEXPwQmE2jJqxkWMwI",
    authDomain: "kwitter-2-1f7b1.firebaseapp.com",
    databaseURL: "https://kwitter-2-1f7b1-default-rtdb.firebaseio.com",
    projectId: "kwitter-2-1f7b1",
    storageBucket: "kwitter-2-1f7b1.appspot.com",
    messagingSenderId: "1059118079895",
    appId: "1:1059118079895:web:497d01d56bce2325e5eed2"
  };
  
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);
  
    user_name = localStorage.getItem("user_name");
    document.getElementById("user_name").innerHTML = "Welcome " + user_name + "!";

function addroom()
{
    room_name = document.getElementById("room_name").value;
    firebase.database().ref("/").child(room_name).update({
        purpose : "adding room"
    });

    localStorage.setItem("room_name", room_name);
    window.location ="kwitter_page.html";
}

function getData() {firebase.database().ref("/").on('value', function(snapshot) {document.getElementById("output").innerHTML ="";snapshot.forEach(function(childSnapshot) { childKey = childSnapshot.key;
Room_names = childkey;

console.log("Room Name - " + Room_names);
row = "<div class='room_name' id="+Room_names+" onclick='redirectToRoomName(this.id)' >#"+ Room_names +"</div><hr>";
document.getElementById("output").innerHTML += row;

});});}
getData();

function redirectToRoomName(name)
{
      console.log(name);
      localStorage.setItem("room_name", name);
      window.location = "kwitterpage.html";
}

function logout()
{
      localStorage.removeItem("user_name");
      localStorage.removeItem("room_name");
      window.location = index.html;
}
