const firebaseConfig = {
      apiKey: "AIzaSyBKSL7-AjTwrnGYypnW0tHRDdhvKK28owI",
      authDomain: "kwitter-823ab.firebaseapp.com",
      databaseURL: "https://kwitter-823ab-default-rtdb.firebaseio.com",
      projectId: "kwitter-823ab",
      storageBucket: "kwitter-823ab.appspot.com",
      messagingSenderId: "424287492059",
      appId: "1:424287492059:web:b1c0bbef96fc9b3ccb79fe"
    };
    
    // Initialize Firebase
    firebase.initializeApp(firebaseConfig);
 user_name=localStorage.getItem("user_name");
 document.getElementById("user_name").innerHTML="Welcome "+user_name+"🙋🏿🙋🏿‍♂️";
    function addRoom(){
          room_name = document.getElementById("room_name").value;
          firebase.database().ref("/").child(room_name).update({
                purpose:"adding room name"
          });
          localStorage.setItem("room_name",room_name);
          window.location="kwitter_page.html";

    }
//ADD YOUR FIREBASE LINKS HERE

function getData() {firebase.database().ref("/").on('value', function(snapshot) {document.getElementById("output").innerHTML = "";snapshot.forEach(function(childSnapshot) {childKey  = childSnapshot.key;
       Room_names = childKey;
      //Start code
console.log("room name-"+Room_names);
row="<div class = 'room_name' id = "+Room_names+"onclick='redirectToRoomName(this.id)'>#"+Room_names+"</div><hr>";
document.getElementById("output").innerHTML+=row;
      //End code
      });});}
getData();

function redirectToRoomName(name){
      console.log(name);
      localStorage.setItem("room_name",name);
window.location="kwitter_page.html";
}
function logout(){
      localStorage.removeItem("user_name");
      localStorage.removeItem("room_name");
      window.location="index.html"
}