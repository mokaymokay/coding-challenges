// limitedInterval runs a callback once every wait milliseconds, up to limit milliseconds, and then stop.

const limitedInterval = (callback, wait, limit) => {
  while (limit > wait) {
    setTimeout(callback, wait)
    limit -= wait
  }
}

limitedInterval(() => console.log('repeating'), 100, 550); // should log 'repeating' once per 100 ms, five times.
