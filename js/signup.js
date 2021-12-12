var codeV, lnameV, pnameV, emailV, numberV, dateV, sexeV, refV;
function send() {
     nameV = document.getElementById('name').value;
     fnameV = document.getElementById('fname').value;
     emailV = document.getElementById('email').value;
     numberV = document.getElementById('number').value;
     dateV = document.getElementById('date').value;
     refV = document.getElementById('ref').value;
     sexeV = document.getElementById('sexe').value;
     nivV = document.getElementById('niveau').value;
     matV = document.getElementById('mat').value;
     if(nameV == ""){
      document.getElementById('msg').innerHTML = 'Entrer votre nom';
      document.getElementById('not').style.display = 'block';
    }else if (fnameV == ""){
      document.getElementById('msg').innerHTML = 'Entrer votre prénom';
      document.getElementById('not').style.display = 'block';
    }else if (emailV == ""){
      document.getElementById('msg').innerHTML = 'Entrer votre Email';
      document.getElementById('not').style.display = 'block';
    }else if (numberV == ""){
      document.getElementById('msg').innerHTML = 'Entrer votre numero';
      document.getElementById('not').style.display = 'block';
    }else if (dateV == ""){
      document.getElementById('msg').innerHTML = 'La date de votre inscription';
      document.getElementById('not').style.display = 'block';
    }else if (refV == ""){
      document.getElementById('msg').innerHTML = 'Si vous n"avez pas de reference enter <Persone>';
      document.getElementById('not').style.display = 'block';
    }else if (sexeV == ""){
      document.getElementById('msg').innerHTML = 'Selectionnner votre sexe';
      document.getElementById('not').style.display = 'block';
    }else if (nivV == ""){
      document.getElementById('msg').innerHTML = 'Votre niveau en informatique';
      document.getElementById('not').style.display = 'block';
    }else if (matV == ""){
      document.getElementById('msg').innerHTML = 'Que materiel que vous utiliser pour travailler?';
      document.getElementById('not').style.display = 'block';
    }else{
    firebase.database().ref('Formation html&css/' + nameV).set({
      ANAME: nameV + fnameV,
      Email: emailV,
      NUMBER: numberV,
      DATE: dateV,
      REFERENCE: refV,
      SEXE: sexeV,
      NIVEAU: nivV,
      MATERIELS: matV,
  });
  document.getElementById('message').style.display = 'block';
  document.getElementById('name').value = '';
  document.getElementById('fname').value = '';
  document.getElementById('email').value = '';
  document.getElementById('number').value = '';
  document.getElementById('ref').value = '';
}
  }
   
 
