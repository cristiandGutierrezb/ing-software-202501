const url = 'http://localhost:3333/api/v1'

const onSaveInfo = async () => {

  const fullname = document.getElementById('name-register').value
  const user = document.getElementById('user-register').value
  const email = document.getElementById('email-register').value
  const password = document.getElementById('password-register').value

  const body = {
    name: fullname,
    user,
    email,
    password
  }

  await fetch(`${url}/user/create`, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify(body) 
  })
  .then(data => data.json())
  .then(data => {
    console.log('data on service', data);
  })
  .catch(e => console.error(e))

}