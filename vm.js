let vmsave = document.getElementById('vmsave')
let newVMS = document.querySelector('.new')
let vmb = document.getElementById('vm')

document.addEventListener('keydown', e => {
  if(e.ctrlKey && e.which == 79){
    vmsave.click()
    vmsave.addEventListener('change', e => {
      let file = vmsave.files[0];
      let fr = new FileReader();
      fr.onload = e => {
        console.log(e.currentTarget.result)
      }
      fr.readAsText(file);
    })
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

vmb.addEventListener('click', () => {
  let v = window.open('http://localhost:3000/vmt')
})