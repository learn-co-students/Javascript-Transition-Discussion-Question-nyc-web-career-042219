// $('#save_lincoln').click(()=>saveLincoln(parseInt($('#interval').val())))

let save = document.querySelector('#save_lincoln')
save.addEventListener('click', saveLincoln)


function saveLincoln(interval) {
  if(isNaN(interval)) {
    interval = 10000
  }
  $('#foreground').fadeOut(interval);
}