import './App.css';

function Nav() {
    return (
        <div>
            <nav class="navbar navbar-expand-lg navbar-dark">
                <a class="navbar-brand" href="index.html">
                    <img src="images/14321036.jpg" width="30" height="30" 
                    class="d-inline-block align-top logoimg" alt="BigYoSpeck" loading="lazy" />
                    Philip Burgess
                </a>
                <button class="navbar-toggler" type="button" data-toggle="collapse" 
                    data-target="#navbarNavDropdown" aria-controls="navbarNavDropdown" 
                    aria-expanded="false" aria-label="Toggle navigation">
                    <span class="navbar-toggler-icon"></span>
                </button>
                <div class="collapse navbar-collapse" id="navbarNavDropdown">
                    <ul class="navbar-nav">
                        <li class="nav-item active">
                            <a class="nav-link" href="index.html">Home <span class="sr-only">(current)</span></a>
                        </li>
                        <li class="nav-item dropdown">
                            <a class="nav-link dropdown-toggle" href="#" id="navbarDropdownMenuLink" 
                                role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">Projects
                            </a>
                            <div class="dropdown-menu" aria-labelledby="navbarDropdownMenuLink">
                                <a class="dropdown-item" href="project1.html">CS50 PSET9 Finance</a>
                            </div>
                        </li>
                    </ul>
                </div>
            </nav>
        </div>
    );
}
 
export default Nav;
