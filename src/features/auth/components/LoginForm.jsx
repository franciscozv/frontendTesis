const LoginForm = () => {
  return (
    <div className="container mt-5">
      <h2 className="mb-3">Iniciar sesión</h2>
      <form>
        <div className="mb-3">
          <label className="form-label">Correo</label>
          <input type="email" className="form-control" />
        </div>
        <div className="mb-3">
          <label className="form-label">Contraseña</label>
          <input type="password" className="form-control" />
        </div>
        <button className="btn btn-primary">Entrar</button>
      </form>
    </div>
  );
};

export default LoginForm;
