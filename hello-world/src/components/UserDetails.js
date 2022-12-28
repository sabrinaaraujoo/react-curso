const UserDetails = ({ name, age, job }) => {
  return (
    <div>
      <h2>{name}</h2>
      <ul>
        <li>Idade: {age}</li>
        <li>Profissão: {job}</li>

        {age >= 18 ? (
          <li>Habilitação: Pode ter habilitação</li>
        ) : (
          <li>Habilitação: Não pode ter habilitação</li>
        )}
      </ul>
    </div>
  );
};

export default UserDetails;
