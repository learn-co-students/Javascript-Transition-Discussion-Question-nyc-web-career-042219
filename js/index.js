// $('#save_lincoln').click(()=>saveLincoln(parseInt($('#interval').val())))

function saveLincoln(interval) {
  if(isNaN(interval)) {
    interval = 10000
  }
  var fadeTarget = document.getElementById("foreground");
  fadeOutEffect(fadeTarget, interval);
}

function fadeOutEffect(fadeTarget, interval) {
    var fadeEffect = setInterval(function () {
        if (!fadeTarget.style.opacity) {
            fadeTarget.style.opacity = 1;
        }
        if (fadeTarget.style.opacity > 0) {
            fadeTarget.style.opacity -= 0.3;
        } else {
            clearInterval(fadeEffect);
        }
    }, interval);
}


var save_lincoln = document.querySelector("#save_lincoln");

save_lincoln.addEventListener("click", function(){
	let button = document.querySelector("#interval");
	let num = parseInt(button.value)
	saveLincoln(num);
})