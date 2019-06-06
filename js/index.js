// $('#save_lincoln').click(()=>saveLincoln(parseInt($('#interval').val())))

// function saveLincoln(interval) {
//   if(isNaN(interval)) {
//     interval = 10000
//   }
  // $('#foreground').fadeOut(interval);
// }


const saveLincoln = document.querySelector('#save_lincoln')

function president(interval){
  if (isNaN(interval)){
    interval = 10000
  }
  const foreground = document.getElementById('foreground').remove()
  return foreground
}
saveLincoln.addEventListener('click', function(e) {
  const interval = parseInt(document.getElementById('interval'))
  president(interval)
})

// document.style.background = "#000000"