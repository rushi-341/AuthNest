let jwtToken = ''

// 👇 Replace this with your actual backend deployment URL
const API = 'https://authnest-backend.onrender.com/api/users'

async function registerUser() {
  const body = {
    name: document.getElementById('regName').value,
    email: document.getElementById('regEmail').value,
    phone: document.getElementById('regPhone').value,
    password: document.getElementById('regPassword').value
  }

  const res = await fetch(`${API}/register`, {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify(body)
  })

  const data = await res.json()
  alert(data.message || 'Registration successful')
}

async function loginUser() {
  const body = {
    email: document.getElementById('loginEmail').value,
    password: document.getElementById('loginPassword').value
  }

  const res = await fetch(`${API}/login`, {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify(body)
  })

  const data = await res.json()

  if (data.token) {
    jwtToken = data.token
    alert('Login successful! JWT saved')
  } else {
    alert(data.message || 'Login failed')
  }
}

async function getUsers() {
  const res = await fetch(`${API}`, {
    method: 'GET',
    headers: { Authorization: `Bearer ${jwtToken}` }
  })

  const data = await res.json()

  document.getElementById('usersOutput').innerText = JSON.stringify(data, null, 2)
}
