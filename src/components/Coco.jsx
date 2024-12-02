// eslint-disable-next-line react/prop-types
export default function Coco({ handleView }) {
  return (
    <>
      <h2>Changement de usrname</h2>
      <form>
        <input type="text" placeholder="Nouveau username" required />
        <button onClick={handleView}>
          Clique ici pour fermer (normalement)
        </button>
      </form>
    </>
  );
}
