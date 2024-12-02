import { useDispatch } from 'react-redux';
import { updateToken } from './redux/slice/auth';
import { useNavigate } from 'react-router-dom';

function SignIn() {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const handleSubmit = async (event) => {
    event.preventDefault();

    const response = await fetch('tonurlduserver', {
      method: 'POST',
    });

    console.log(response);
    const data = await response.json();

    if (response.status === 200) {
      dispatch(updateToken(data.body.token));
      navigate('/user');
    }
  };

  return (
    <>
      <h1>Page de connexion</h1>
      <form onSubmit={handleSubmit}></form>
      <button
        onClick={() => {
          dispatch(updateToken('pain de mie'));
          navigate('/user');
        }}
      >
        Je veux être connecté
      </button>
    </>
  );
}

export default SignIn;
