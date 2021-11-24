

   var codeV, emailV, numberV, nameV;

function envoyer() {
    nameV = document.getElementById('name').value;
     codeV = document.getElementById('code').value;
     emailV = document.getElementById('email').value;
     numberV = document.getElementById('number').value;
   
  if(nameV == ""){
    alert('nom');
    
  }else if(emailV == ""){
    alert('email');
  }else if(codeV == ""){
    alert('code');
 }else if(numberV == ""){
  alert('number');
  }else{
    firebase.database().ref('VotreProf/' + nameV).set({
        ANAME: nameV,
        Email: emailV,
        NUMBER: (codeV) + numberV,
    });
    document.getElementById('name').value = '';
    document.getElementById('email').value = '';
    document.getElementById('number').value = '';
    
  }
 }


 document.getElementById('signup').style.display = 'block';
function salle(){
    document.getElementById('signup').style.display = 'block';
    document.getElementById('home-home').style.display = 'none';
}

function fermer(){
    document.getElementById('signup').style.display = 'none';
    document.getElementById('home-home').style.display = 'block';
}

 