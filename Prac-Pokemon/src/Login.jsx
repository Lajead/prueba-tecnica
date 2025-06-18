import { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';

const USERS = [
  { username: 'admin', password: 'admin' },
  { username: 'user1', password: '1234' },
  { username: 'user2', password: 'abcd' },
];

function Login() {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const navigate = useNavigate();

  useEffect(() => {
    if (localStorage.getItem('currentUser')) {
      navigate('/attendance');
    }
  }, [navigate]);

  const submit = (e) => {
    e.preventDefault();
    const matched = USERS.find(
      (u) => u.username === username && u.password === password,
    );
    if (matched) {
      localStorage.setItem('currentUser', username);
      navigate('/attendance');
    } else {
      alert('Credenciales incorrectas');
    }
  };

  return (
    <form className="login-form" onSubmit={submit}>
      <h1>Iniciar Sesión</h1>
      <div>
        <label>
          Usuario:
          <input
            value={username}
            onChange={(e) => setUsername(e.target.value)}
          />
        </label>
      </div>
      <div>
        <label>
          Contraseña:
          <input
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
        </label>
      </div>
      <button type="submit">Entrar</button>
    </form>
  );
}

export default Login;
