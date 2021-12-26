const scriptURL = 'https://script.google.com/macros/s/AKfycby_m2aFh6YGPKjKS1BPGhcJo-PcB_tI_bvytrU-Bq0ab8xt0zCrZv4Kc04IQIVLCrmO/exec'
  const form = document.forms['submit-to-google-sheet']

  form.addEventListener('submit', e => {
    e.preventDefault()
    fetch(scriptURL, { method: 'POST', body: new FormData(form)})
      .then(response => console.log('Success!', response))
      .catch(error => console.error('Error!', error.message))
  })