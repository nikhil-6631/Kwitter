var firebaseConfig = {
    apiKey: "AIzaSyDebulxZJo9yeWkGGMqTcPmc61KrYnARZo",
    authDomain: "firedb-28565.firebaseapp.com",
    databaseURL: "https://firedb-28565-default-rtdb.firebaseio.com",
    projectId: "firedb-28565",
    storageBucket: "firedb-28565.appspot.com",
    messagingSenderId: "801004775252",
    appId: "1:801004775252:web:2ca349bd05eff941918ac1"
};
// Initialize Firebase
firebase.initializeApp(firebaseConfig);

function getData() {
    firebase.database().ref("/").on('value', function(snapshot) {
        document.getElementById("output").innerHTML = "";
        snapshot.forEach(function(childSnapshot) {
            childKey = childSnapshot.key;
            Room_names = childKey;
            //Start code
            console.log("Room Name - " + Room_names);
            row = "<div class = 'room_name' id=" + Room_names + "omclick='redirectToRoomName(this.id)' >#" + Room_names + "</div><hr>";
            document.getElementById("output").innerHTML += row;
            //End code
        });
    });
}
getData();

function addRoom() {
    room_name = document.getElementById("room_name").value;

    firebase.database().ref("/").child(room_name).update({
        purpose: "adding room name"
    });

    localStorage.setItem("room_name", room_name);

    window.location = "kwitter_page.html";
}

function redirectToRoomName(name) {
    console.log(name);
    localStorage.setItem("room_name", name);
    window.location = "kwitter_page.html"
}

function logout() {
    localStorage.removeItem("user_name");
    localStorage.removeItem("room_name");
    window.location = "index.html";
}
