// $('#save_lincoln').click(()=>saveLincoln(parseInt($('#interval').val())))

let save = document.querySelector('#save_lincoln')

save.addEventListener('click', saveLincoln)



function saveLincoln(interval) {
  let fade = document.querySelector('#foreground')
  if(isNaN(interval)) {
    interval = 1000
  }
  fadeOutEffect();
}

function fadeOutEffect() {
  var fadeTarget = document.querySelector("#foreground");
  var fadeEffect = setInterval(function () {
      if (!fadeTarget.style.opacity) {
          fadeTarget.style.opacity = 1;
      }
      if (fadeTarget.style.opacity > 0) {
          fadeTarget.style.opacity -= 0.1;
      } else {
          clearInterval(fadeEffect);
      }
  }, 200);
}