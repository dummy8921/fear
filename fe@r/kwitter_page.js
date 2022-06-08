var firebaseConfig = {
      apiKey: "AIzaSyCbubRdx5V_pkiVip8bXIVD2WuHmXZnp38",
      authDomain: "water-mellon-4th-april-of-2022.firebaseapp.com",
      databaseURL: "https://water-mellon-4th-april-of-2022-default-rtdb.firebaseio.com",
      projectId: "water-mellon-4th-april-of-2022",
      storageBucket: "water-mellon-4th-april-of-2022.appspot.com",
      messagingSenderId: "317717809254",
      appId: "1:317717809254:web:6dda5f89199a2a571dc5a7"
    };
    
    // Initialize Firebase
     firebase.initializeApp(firebaseConfig);
user_name=localStorage.getItem("user_name");
room_name=localStorage.getItem("room_name");
function send()
{
      msg=document.getElementById("msg").value;
      firebase.database().ref(room_name).push({
name:user_name,
message:msg,
like:0

      });
      document.getElementById("msg").value="";
}
function getData() { firebase.database().ref("/"+room_name).on('value', function(snapshot) { document.getElementById("output").innerHTML = ""; snapshot.forEach(function(childSnapshot) { childKey  = childSnapshot.key; childData = childSnapshot.val(); if(childKey != "purpose") {
         firebase_message_id = childKey;
         message_data = childData;
//S

//End code
      } });  }); }
getData();
