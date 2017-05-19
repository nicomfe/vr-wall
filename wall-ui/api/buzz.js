export const getSomeBuzz = () => {
  return fetch('http://localhost:8080/api/buzz', {
    method: 'GET',
    headers: { 'Content-Type': 'application/json' },
  })
  .then((result) => {
    if (result.status !== 401 && (result.status < 200 || result.status >= 300)) {
      // we need to retry
      console.warn('Buzz failed')
      return { error: 'Buzz failed' }
    } else {
      // successful!
      return result.json()
    }
  })
}
