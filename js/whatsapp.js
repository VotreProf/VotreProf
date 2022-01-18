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



  const scriptURL = 'https://script.google.com/macros/s/AKfycbz9X5FHrJMi1FGcDyoijkK1mpJal42V5WQkiZznPIxidXFBbPp_dRb2T0csJOq6fEUh/exec'
          const form = document.forms['google-sheet']
          var lien = document.getElementById('lien');
          
          form.addEventListener('submit', e => {
            e.preventDefault()
                fetch(scriptURL, { method: 'POST', body: new FormData(form)})
              .then(response => $("#form_alerts").html("<div class='alert alert-success'>Contact message sent successfully.</div>"))
              .catch(error => $("#form_alerts").html("<div class='alert alert-danger'>Contact message not sent.</div>"))
              location = lien;
              document.getElementById("form-dataapp").style.display = "none";
        })
       
        function openFormapp() {
          document.getElementById("form-dataapp").style.display = "block";
        }
        
        function closeFormapp() {
          document.getElementById("form-dataapp").style.display = "none";
        }