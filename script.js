var firebaseConfig = {
  apiKey: "AIzaSyDRb4ldiu7U1xLYQv8VqlaaUnULFfYJvX8",
  authDomain: "writearn-674ec.firebaseapp.com",
  databaseURL: "https://writearn-674ec-default-rtdb.firebaseio.com",
  projectId: "writearn-674ec",
  storageBucket: "writearn-674ec.appspot.com",
  messagingSenderId: "60590819233",
  appId: "1:60590819233:web:1a7e9cdf381d536751ade0",
  measurementId: "G-3NMDG3TSWQ"
};
  // Initialize Firebase
firebase.initializeApp(firebaseConfig);
// console.log(firebase)
  
  const phno = window.location.href;
  let orph = phno.split("/")
  let final = orph[5]
  // console.log(final)
  
  
 document.getElementById("phno").innerHTML = final;
  
  function save(){
   var name = document.getElementById("name").value;
   var pne = document.getElementById("phone").value;
  
   firebase.database().ref("/").child("DEMATACCOUNTOPENED").child("UPSTOX").child(final).update({
    [pne] : name
   })

   document.getElementById("name").value = null;
   document.getElementById("phone").value = null;

alert("Your Register has been submitted!")
  }
  
