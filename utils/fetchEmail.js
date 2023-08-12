export const fetchEmail = async () => {
  await fetch('/api/reg/reg-email')
    .then(response => response.json())
    .then((data) => {
      return data
    })
}