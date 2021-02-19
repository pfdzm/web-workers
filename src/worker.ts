self.addEventListener(
  'message',
  (e: MessageEvent) => {
    self.postMessage(e.data)
  },
  false
)
