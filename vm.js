let search = document.getElementById('search')
let newVMS = document.querySelector('.new')

document.addEventListener('keydown', e => {
  if(e.metaKey && e.which == 79){
    let s = prompt('search')
    search.value = s
    console.log(s)
  }
  if (e.ctrlKey && e.which == 77) {
    newVMS.click()
  }
})

newVMS.addEventListener('click', () => {
  let n = prompt('virtual machine name:')
  if (n) {
    sessionStorage.setItem('vmn', n)
    localStorage.setItem('vminfo', n)
    console.log(n)
    let virtualMachine = window.open('svm.html', '_blank', 'height=300,width=500')
    virtualMachine.moveTo((screen.width/3), (screen.height/3))
    let vmo = setInterval(() => {
      if(!virtualMachine.opener){
        clearInterval(vmo)
      }
    })
  }
})