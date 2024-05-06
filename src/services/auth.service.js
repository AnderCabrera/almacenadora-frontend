import Swal from 'sweetalert2/dist/sweetalert2.js';
import withReactContent from 'sweetalert2-react-content';

const ReactSwal = withReactContent(Swal);

export const login = async (body) => {
  let myInit = {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(body),
  };

  return fetch('http://localhost:2880/users/login', myInit)
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
  localStorage.removeItem('token');
};

export const register = (body) => {
  let myInit = {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(body),
  };

  fetch('http://localhost:2880/users/register', myInit)
    .then((response) => {
      if (response.ok) {
        ReactSwal.fire({
          title: 'Success',
          text: 'Register successful',
          icon: 'success',
          showConfirmButton: false,
          timer: 1500,
          willOpen: () => {
            ReactSwal.showLoading();
          },
        }).then(() => {
          window.location.href = '/login';
        });
        return response.json();
      } else {
        ReactSwal.fire({
          title: 'Register failed',
          text: 'Something goes wrong',
          icon: 'error',
          confirmButtonText: 'Try again',
        });
      }
    })
    .catch((error) => {
      return error;
    });
};
