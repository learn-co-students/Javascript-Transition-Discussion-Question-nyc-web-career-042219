// $('#save_lincoln').click(()=>saveLincoln(parseInt($('#interval').val())))

function saveLincoln(interval) {
  if(isNaN(interval)) {
    interval = 10000;
  }
  // $('#foreground').fadeOut(interval);
  const fore = document.getElementById('foreground');
  setTimeout( () => { fore.remove() } , interval);
}

const saveLincolnButton = document.getElementById('save_lincoln');

saveLincolnButton.addEventListener('click', (e) => {
  const interval = parseInt(document.getElementById('interval').value);
  console.log(interval);
  saveLincoln(interval);
})

