export const login = (body) => {
  fetch('http://localhost:2880/users/login', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(body),
  })
    .then((response) => response.json())
    .then((data) => {
      console.log('Success: ', data);
    })
    .catch((error) => {
      console.error('Error: ', error);
    });
};

export const logout = () => {
  fetch('http://localhost:2880/users/logout', {
    method: 'POST',
  })
    .then((response) => response.json())
    .then((data) => {
      console.log('Success:', data);
    })
    .catch((error) => {
      console.error('Error:', error);
    });
};

export const register = (body) => {
  fetch('http://localhost:2880/users/register', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(body),
  })
    .then((response) => response.json())
    .then((data) => {
      console.log('Success:', data);
    })
    .catch((error) => {
      console.error('Error:', error);
    });
};
