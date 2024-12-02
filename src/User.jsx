import { useSelector } from 'react-redux';
import Navigation from './components/Navigation';
import { useState } from 'react';
import Coco from './components/Coco';

function User() {
  const [open, setOpen] = useState(false);
  const auth = useSelector((store) => store.auth);

  const handleView = () => {
    setOpen(!open);
  };
  return (
    <>
      <button onClick={() => handleView()}>Edit username</button>
      <Navigation />
      <h1>Page user</h1>
      <p>{auth.token}</p>
      {open && <Coco handleView={handleView} />}
    </>
  );
}

export default User;
