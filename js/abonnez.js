

   var codeV, villeV, emailV, numberV, nameV, pnameV;

function envoyer() {
    nameV = document.getElementById('lname').value;
     pnameV = document.getElementById('fname').value;
     codeV = document.getElementById('code').value;
     emailV = document.getElementById('email').value;
     numberV = document.getElementById('number').value;
     villeV = document.getElementById('ville').value;
   
  if(nameV == ""){
    $("#lname").css("border","2px solid red");
  }else if(pnameV == ""){
    $("#fname").css("border","2px solid red");
  }else if(codeV == ""){
    $("#code").css("border","2px solid red");
 }else if(villeV == ""){
    $("#ville").css("border","2px solid red");
  }else{
    firebase.database().ref('VotreProf/' + numberV).set({
        ANAME: nameV + pnameV,
        Email: emailV,
        NUMBER: (codeV) + numberV,
    });
    document.getElementById('lname').value = '';
    document.getElementById('fname').value = '';
    document.getElementById('ville').value = '';
    document.getElementById('email').value = '';
    document.getElementById('number').value = '';
    
  }
 }