function NavBar(){
  return(
    <>
    <nav className="navbar navbar-expand navbar-light bg-light">
      <a className="navbar-brand" href="#">JoeyBank</a>
      <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
        <span className="navbar-toggler-icon"></span>
      </button>
      <div className="collapse navbar-collapse" id="navbarNav">
        <ul className="navbar-nav">
          <li className="nav-item">
            <a className="nav-link" href="#/">
            <button className="btn btn-sm btn-outline-secondary" type="button" data-toggle="tooltip" data-placement="bottom" title="Welcome page">Home</button>
            </a>
          </li>
          <li className="nav-item">
            <a className="nav-link" href="#/CreateAccount/">
            <button className="btn btn-sm btn-outline-secondary" type="button" data-toggle="tooltip" data-placement="bottom" title="New user? Create an account here!">Create Account</button>  
            </a>
          </li>
          <li className="nav-item">
            <a className="nav-link" href="#/deposit/">
            <button className="btn btn-sm btn-outline-secondary" type="button" data-toggle="tooltip" data-placement="bottom" title="Add money to your account">Deposit</button>  
            </a>
          </li>
          <li className="nav-item">
            <a className="nav-link" href="#/withdraw/">
            <button className="btn btn-sm btn-outline-secondary" type="button" data-toggle="tooltip" data-placement="bottom" title="Remove money from your account">Withdraw</button>  
            </a>
          </li>
          <li className="nav-item">
            <a className="nav-link" href="#/alldata/">
            <button className="btn btn-sm btn-outline-secondary" type="button" data-toggle="tooltip" data-placement="bottom" title="Bank data vault - Admin access only">All Data</button>  
            </a>
          </li>          
        </ul>
      </div>
    </nav>
    </>
  );
}