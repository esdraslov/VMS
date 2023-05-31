let vmn = sessionStorage.getItem('vmn')
  ||
  localStorage.getItem('vminfo').vmn
let title = document.querySelector('title')

title.innerText = vmn