let vmn = sessionStorage.getItem('vmn')
  ||
  localStorage.getItem('vminfo').vmn
let title = document.querySelector('title')
let vmsTools = document.querySelector('.inst-VMS-tools')
let nextBtn = document.querySelector('.next')

title.innerText = vmn

vmsTools.addEventListener('click', () => {
  if (document.body.requestFullscreen) {
    document.body.requestFullscreen();
  } else if (document.body.webkitRequestFullscreen) { /* Safari */
    document.body.webkitRequestFullscreen();
  } else if (document.body.msRequestFullscreen) { /* IE11 */
    document.body.msRequestFullscreen();
  }
})

document.addEventListener('keydown', e => {
  if(e.which == 122){
    if (document.exitFullscreen) {
      document.exitFullscreen();
    } else if (document.webkitExitFullscreen) { /* Safari */
      document.webkitExitFullscreen();
    } else if (document.msExitFullscreen) { /* IE11 */
      document.msExitFullscreen();
    }
  }
})

let step = 1
nextBtn.addEventListener('click', () => {
  if(step<5){
    document.querySelector(`.s${step}`).hidden = true
    step++
    document.querySelector(`.s${step}`).hidden = false
  }else{
    document.querySelector('.ist-window').hidden = true
  }
})
