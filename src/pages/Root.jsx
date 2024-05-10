import { Link } from 'react-router-dom';
import '../output.css';

export const Root = () => {
  return (
    <div className="main m-0 p-0 flex justify-center bg-[url('src/images/background.jpeg')] bg-no-repeat">
      <div className="container">
        <div className="flex justify-center items-center h-screen">
          <div className="w-full max-w-md">
            <div className="bg-[rgb(22,22,22,0.75)] shadow-lg rounded px-8 pt-6 pb-8 mb-4">
              <h1 className="text-white text-4xl text-center mb-4">
                Almacenadora
              </h1>
              <p className="text-white text-center mb-4">
                Una herramienta almacenadora en la cual se puede poner distintos
                tipos de tareas, lo cual nos resulta más fácil para poder
                trabajar de mejor manera con el equipo correspondiente.{' '}
              </p>
              <div className="flex justify-center">
                <Link
                  to="/login"
                  className="bg-[#333] hover:bg-[#444] text-white font-bold py-2 px-4 rounded mr-2"
                >
                  Login
                </Link>
                <Link
                  to="/register"
                  className="bg-[#333] hover:bg-[#444] text-white font-bold py-2 px-4 rounded"
                >
                  Register
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
