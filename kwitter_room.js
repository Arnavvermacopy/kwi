const firebaseConfig = {
      apiKey: "AIzaSyAkJUXOYcJKb1SaacDSI0JqN0qajO__3Zc",
      authDomain: "kwiter-6e283.firebaseapp.com",
      databaseURL: "https://kwiter-6e283-default-rtdb.firebaseio.com",
      projectId: "kwiter-6e283",
      storageBucket: "kwiter-6e283.appspot.com",
      messagingSenderId: "747657759563",
      appId: "1:747657759563:web:005d6e34ab5acc691676ce",
      measurementId: "G-G6W1SV7VP4"
};
firebase.initializeApp(firebaseConfig);

username=localStorage.getItem("username");
document.getElementById("username").innerHTML="welcome "+username+" !";


function addroom(){
     roomname=document.getElementById("roomname").value;
     firebase.database().ref("/").child(roomname).update({
           purpose:"addroomname"  
     });
     localStorage.setItem("roomname",roomname);
     window.location="kwitter_page.html";
}

function getData() {
      firebase.database().ref("/").on('value', function (snapshot) {
            document.getElementById("output").innerHTML = "";
            snapshot.forEach(function (childSnapshot) {
                  childKey = childSnapshot.key;
                  Room_names = childKey;
                  //Start code
 console.log("roomnames "+Room_names);
 row="<div class='room_name' id="+Room_names+" onclick='redirectToRoomName(this.id)'>#"+Room_names+" </div> <hr>";
 document.getElementById("output").innerHTML+=row;
                  //End code
            });
      });
}
getData();

function redirectToRoomName(name){
      window.location="kwitter_page.html";
localStorage.setItem("roomname",name);
console.log("roomname "+name);
}

function logout(){
      window.location="kwiier.html";
      localStorage.removeItem("roomname");
      localStorage.removeItem("username");
}
