const MembersList = () => {
  const members = [
    {
      nombre: "Juan Pérez",
      rol: "Desarrollador",
      fechaIngreso: "2023-01-15",
    },
    {
      nombre: "María López",
      rol: "Diseñadora",
      fechaIngreso: "2023-02-20",
    },
    {
      nombre: "Carlos García",
      rol: "Gerente de Proyecto",
      fechaIngreso: "2023-03-10",
    },
    {
      nombre: "Ana Martínez",
      rol: "Analista de Negocios",
      fechaIngreso: "2023-04-05",
    },
    {
      nombre: "Luis Fernández",
      rol: "Tester",
      fechaIngreso: "2023-05-12",
    },
    {
      nombre: "Laura Sánchez",
      rol: "Desarrolladora Frontend",
      fechaIngreso: "2023-06-18",
    },
    {
      nombre: "Pedro Ramírez",
      rol: "Desarrollador Backend",
      fechaIngreso: "2023-07-25",
    },
    {
      nombre: "Sofía Torres",
      rol: "UX/UI Designer",
      fechaIngreso: "2023-08-30",
    },
  ];
  return (
    <div className="container mt-4">
      <h2>Lista de Miembros</h2>
      <table className="table table-striped">
        <thead>
          <tr>
            <th>Nombre</th>
            <th>Rol</th>
            <th>Fecha de ingreso</th>
          </tr>
        </thead>
        <tbody>
          {members.map((member, index) => (
            <tr key={index}>
              <td>{member.nombre}</td>
              <td>{member.rol}</td>
              <td>{member.fechaIngreso}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default MembersList;
