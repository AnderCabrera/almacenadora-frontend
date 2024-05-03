import Swal from 'sweetalert2/dist/sweetalert2.js';
import withReactContent from 'sweetalert2-react-content';

const ReactSwal = withReactContent(Swal);

export const login = (body) => {
  let myInit = {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(body),
  };

  fetch('http://localhost:2880/users/login', myInit)
    .then((response) => {
      if (response.ok) {
        ReactSwal.fire({
          title: 'Success',
          text: 'Login successful',
          icon: 'success',
          showConfirmButton: false,
          timer: 1500,
          willOpen: () => {
            ReactSwal.showLoading();
          },
        }).then(() => {
          window.location.href = '/tasks';
        });

        return response.json();
      } else {
        ReactSwal.fire({
          title: 'Login failed',
          text: 'Invalid username or password',
          icon: 'error',
          confirmButtonText: 'Try again',
        });
      }
    })
    .catch((error) => {
      return error;
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
