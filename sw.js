self.addEventListener('install', () => {
  console.log('ok 1')
})

self.addEventListener('active', () => {
  console.log('ok 2')
})

self.addEventListener('fetch', fetchArg => {
  console.info(`fetched ${fetchArg}`)
})

self.addEventListener('offline', () => {
  console.log('oh no!')
})