import { useLocation } from 'react-router-dom';
export default function Second() {
  const location = useLocation();
  console.log(location);
  return (
    <>
      {location.state.name}
      <h1>Second Compoent</h1>
    </>
  );
}
