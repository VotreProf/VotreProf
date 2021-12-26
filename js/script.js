function rejoin(){
    document.getElementById('forum').style.display = 'block';
    document.getElementById('forum').style.display = 'flex';
}
function closeForum(){
    document.getElementById('forum').style.display = 'none';
    document.getElementById('forum').style.display = 'none';
}


   var nameV, codeV, emailV, numberV;
//le formulaire forum de mon site ici
function inscritForum() {
    nameV = document.getElementById('name').value;
     codeV = document.getElementById('code').value;
     emailV = document.getElementById('email').value;
     numberV = document.getElementById('number').value;
  if(nameV == ""){
    document.getElementById('message').innerHTML ="Votre nom";
    document.getElementById('message').style.color = '#fff';
    document.getElementById('message').style.background ="red";
  }else if (emailV == ""){
    document.getElementById('message').innerHTML ="Votre email";
    document.getElementById('message').style.color = '#fff';
    document.getElementById('message').style.background ="red";
  }else if(codeV == ""){
    document.getElementById('message').innerHTML ="Area code";
    document.getElementById('message').style.color = '#fff';
    document.getElementById('message').style.background ="red";
  }else if(numberV == ""){
    document.getElementById('message').innerHTML ="Votre numéro";
    document.getElementById('message').style.color = '#fff';
    document.getElementById('message').style.background ="red";
  }else{
    firebase.database().ref('COMMUNAUTE WHATSAPP/' + nameV).set({
        NAME: nameV,
        Email: emailV,
        NUMBER: (codeV) + numberV,
    });
    document.getElementById('message').innerHTML ="Vous etes maimtenant abonnée";
    document.getElementById('message').style.color = '#fff';
    document.getElementById('message').style.background ="blue";
    document.getElementById('name').value = '';
    document.getElementById('email').value = '';
    document.getElementById('number').value = '';
  }
 }
 //fin formulaire forum de mon site