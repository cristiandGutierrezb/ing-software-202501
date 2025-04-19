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
      'Accept': 'application/json',
      'Content-Type': 'application/json'
    },
    body: JSON.stringify(body)
  })
  .then(data => data.json())
  .then(data => {
    const { infoUser } = data
    const toPaint = document.getElementById('toPaint')
    if (infoUser.profile_id === 'user') {
      toPaint.innerText = 'Este es un usuario normal'
    }
    if (infoUser.profile_id === 'admin') {
      toPaint.innerText = 'Este es un usuario Administrador sayayin'
    }

  })
  .catch((e) => console.log(e))

}

document.addEventListener('DOMContentLoaded', () => {
  document.getElementById('form').addEventListener('submit', onLogin)
})