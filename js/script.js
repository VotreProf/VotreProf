/* Toggle between adding and removing the "responsive" class to topnav when the user clicks on the icon */
function myFunction() {
    var x = document.getElementById("myTopnav");
    if (x.className === "topnav") {
      x.className += " responsive";
    } else {
      x.className = "topnav";
    }
  }

  function downloadApp(){
    window.location = 'https://drive.google.com/uc?export=download&id=1H-GJUY6_ZpNaCvhlvKPMvE7w1cWppH9K'
  }



  function sendWa(){
    var name = document.getElementById("name").value
    var message = document.getElementById("message").value
    var produit = 'name';
    location.href =`https://wa.me/18094513048?&text=Nom%0A ${name}: *Message :*%0A ${message}`;

    window.open(url);
}

function openForm() {
    document.getElementById("myForm").style.display = "block";
  }
  
  function closeForm() {
    document.getElementById("myForm").style.display = "none";
    document.getElementById('open-button').style.display = 'block';
  }