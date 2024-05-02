import './output.css'

function App() {
  function login(body) {
    fetch('http://localhost:2880/users/login', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(body),
    })
      .then((response) => response.json())
      .then((data) => {
        console.log('Success:', data)
      })
      .catch((error) => {
        console.error('Error:', error)
      })
  }
  

  return (
    <>
      <div className="main">
        <form>
          <label htmlFor="email">Email</label>
          <input type="text" id="email" name="email" />
          <label htmlFor="password">Password</label>
          <input type="password" id="password" name="password" />
          <button type="submit" onClick={(e) => {
            e.preventDefault()
            login({
              username: document.getElementById('email').value,
              password: document.getElementById('password').value,
            })
          }}>Login</button>
        </form>
      </div>
    </>
  )
}

export default App
