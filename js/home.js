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

 // form de contact de mon site ici//
    var namep, emailp, numberp;
 function contact() {
     namep = document.getElementById('name').value;
     emailp = document.getElementById('email').value;
     numberp = document.getElementById('number').value;
  if(namep == ""){
    document.getElementById('messag').innerHTML ="Votre nom";
    document.getElementById('messag').style.color = '#fff';
    document.getElementById('messag').style.background ="red";
  }else if (emailp == ""){
    document.getElementById('messag').innerHTML ="Votre email";
    document.getElementById('messag').style.color = '#fff';
    document.getElementById('messag').style.background ="red";
  }else if(numberp == ""){
    document.getElementById('messag').innerHTML ="Votre numéro";
    document.getElementById('messag').style.color = '#fff';
    document.getElementById('messag').style.background ="red";
  }else{
    firebase.database().ref('CONTAC MESSAGE/' + namep).set({
        NAME: namep,
        Email: emailp,
        NUMBER: numberp,
    });
    document.getElementById('messag').innerHTML ="Vous etes maimtenant abonnée";
    document.getElementById('messag').style.color = '#fff';
    document.getElementById('messag').style.background ="blue";
    document.getElementById('name').value = '';
    document.getElementById('email').value = '';
    document.getElementById('number').value = '';
  }
 }

 /* Toggle between adding and removing the "responsive" class to topnav when the user clicks on the icon */
function myFunction() {
    var x = document.getElementById("myTopnav");
    if (x.className === "topnav") {
      x.className += " responsive";
    } else {
      x.className = "topnav";
    }
  }