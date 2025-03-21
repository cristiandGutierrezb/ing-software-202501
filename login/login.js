const onLogin = async (e) => {
  e.preventDefault()

  const email = document.getElementById('email-login').value
  const password = document.getElementById('password-login').value

  const body = {
    email,
    password
  }

  await fetch('http://localhost:3333/api/v1/user', {
    method: 'POST',
    headers: {
      'Content-type': 'application/json'
    },
    body: JSON.stringify(body)
  })
  .then(data = data.json())
  .then(data => {
    console.log('finaliznado servicio de login');
  })

}

document.addEventListener('DOMContentLoaded', () => {
  const form = document.getElementById('form')
  form.addEventListener('submit', onLogin)
})