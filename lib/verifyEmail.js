


export const verifyEmail = async (email) => {
  const myHeaders = new Headers();
  myHeaders.append("x-api-key", process.env.BOUNCER_API_KEY);

  var requestOptions = {
    method: 'GET',
    headers: myHeaders,
    redirect: 'follow'
  };

  await fetch(`https://api.usebouncer.com/v1.1/email/verify?email=${email}&timeout=10`, requestOptions)
    .then(response => response.text())
    .then(result => console.log(result))
    .catch(error => console.log('error', error));
}