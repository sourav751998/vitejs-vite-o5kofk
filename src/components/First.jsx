import { useNavigate } from 'react-router-dom';
export default function First() {
  const navigate = useNavigate();
  return (
    <>
      <h1>First Compoent</h1>
      <button
        onClick={() =>
          navigate('/second', {
            state: {
              name: 'Sourav',
            },
          })
        }
      >
        Click Me{' '}
      </button>
    </>
  );
}
