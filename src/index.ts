const worker = new Worker('dist/worker.js')

worker.postMessage('Hello world!')

worker.addEventListener('message', (e) => {
  console.log('Message from Worker: ' + e.data)
})
