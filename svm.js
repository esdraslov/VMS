let vmn = sessionStorage.getItem('vmn')
  ||
  localStorage.getItem('vminfo').vmn
let title = document.querySelector('title')
let vmsTools = document.querySelector('.inst-VMS-tools')
let nextBtn = document.querySelector('.next')
let p = document.getElementById("fp")
let st = document.getElementById("status")
let pc = document.getElementById("porc")
let shutd = document.querySelector(".sd")
let standby = document.querySelector(".sb")
let notif = document.querySelector(".nf")
let na = document.querySelector(".notarea")

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
  if (e.key == "F1") {
    if (document.exitFullscreen) {
      document.exitFullscreen();
    } else if (document.webkitExitFullscreen) { /* Safari */
      document.webkitExitFullscreen();
    } else if (document.msExitFullscreen) { /* IE11 */
      document.msExitFullscreen();
    }
  }
  if (e.key === "Meta") {
    e.preventDefault()
    if (document.querySelector('.ist-window').hidden && document.querySelector('.pc').hidden) {
      document.querySelector('.ist-window').hidden = true
      document.querySelector('.pc').hidden = false
    }
  }
})

document.querySelector(".s1").hidden = false
  
let step = 1
nextBtn.addEventListener('click', () => {
  if (step < 5) {
    document.querySelector(`.s${step}`).hidden = true
    step++
    document.querySelector(`.s${step}`).hidden = false
    if (step == 4) {
      nextBtn.disabled = true
      let i = setInterval(() => {
        fp.value = fp.value + 1
        pc.innerText = `${fp.value}% / 250%`
        console.log(fp.value)
        if (fp.value == fp.max) {
          nextBtn.disabled = false
          st.innerText = "system completed!"
          clearInterval(i)
        }
        if (fp.value == 30) {
          st.innerText = "making shortcuts.."
        } else if (fp.value == 60) {
          st.innerText = "setting apps as default.."
        } else if (fp.value == 90) {
          st.innerText = "defining apps as default (wait more 30%).."
        } else if (fp.value == 120) {
          st.innerText = "generating a save.."
        } else if (fp.value > 200) {
          st.innerText = "compiling and saving the guess.."
        }
      }, 2000 + Math.round(Math.random() * 100))
    }
  } else {
    document.querySelector('.ist-window').hidden = true
    document.querySelector('.pc').hidden = false
    let wcmsg = notifVS.push("wellcome to VMS!", "use the VHelp ifs need help to use", () => {
      wcmsg.close()
    })
  }
})
// bar
shutd.addEventListener("click", () => {
  window.close()
})
standby.addEventListener("click", () => {
  document.querySelector('.ist-window').hidden = true
  document.querySelector('.pc').hidden = true
})
notif.addEventListener("click", () => {
  let not = na.querySelectorAll("div")
  not.forEach((notificat) => {
    document.removeChild(notificat)
  })
  if (na.hidden == true) {
    na.hidden = false
  } else {
    na.hidden = true
  }
  for (let i = 0;i < notifVSs.length;i++) {
    let n = document.createElement("div")
    n.onclick = notifVSs[i].click
    let title = document.createElement("div")
    title.innerText = notifVSs[i].title
    let msg = document.createElement("div")
    msg.innerText = notifVSs[i].msg
    na.appendChild(n)
    n.appendChild(title)
    n.appendChild(msg)
  }
})

function pt() {
  let l = document.getElementById("password")
  if (l.type == "password") {
    l.type = "text"
  } else {
    l.type = 'password'
  }
}