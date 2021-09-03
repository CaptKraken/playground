const AddTeam = ({ onAddBtnClick }) => {
  return (
    <button
      className="text-green-600 font-bold hover:text-green-400"
      onClick={onAddBtnClick}
    >
      &#x2B; Add a new Team
    </button>
  );
};

export default AddTeam;
