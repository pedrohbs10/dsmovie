import {ReactComponent as GithubIcon} from 'Assets/img/github.svg'
import './style.css';
function Navbar(){
return(
    <header>
    <nav className="container">
      <div className="dsmovie-nav-content">
        <h1>DSMovie</h1>
        <a href="https://github.com/pedrohbs10"></a>
        <div className="dsmovie-contact-container">
          <GithubIcon />
          <p className="dsmovie-contact-link">/pedrohbs10</p>
        </div>
      </div>
    </nav>
  </header>
)
}
export default Navbar;