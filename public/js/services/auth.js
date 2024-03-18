const users = [
  { email: 'administrador', password: '123', role: 1 },
  { email: 'jefecocina', password: '456', role: 2 }
]
let role = 0

const formSignIn = document.getElementById('formSignIn')
const rolUsuario = document.getElementById('rolUsuario')

rolUsuario.addEventListener('change', (e) => {
  role = parseInt(e.target.value)
})

formSignIn.addEventListener('submit', (e) => {
  e.preventDefault()
  // const user = formSignIn["user"].value
  const password = formSignIn.password.value

  const verify = users.find((element) => element.role === role && element.password === password)

  if (verify.role === 1) {
    console.log(1);
    window.location = '../public/modulos/auth/menuadmin.html'
  } else if (verify.role === 2) {
    console.log(2);
    window.location = '../public/modulos/auth/menuJefe.html'
  }
})
