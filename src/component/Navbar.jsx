import { Link } from "react-router-dom";

export default function Navbar({ children }) {
    return (
        <div>
            <nav className="navbar navbar-expand-sm bg-body-tertiary">
                <div className="container-fluid">
                    <a className="navbar-brand" href="#">Navbar</a>
                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse" id="navbarSupportedContent">
                        <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                            <li className="nav-item">
                                <Link className="nav-link pb-0" to={"/"}>
                                    Home
                                </Link>
                            </li>
                            <li className="nav-item">
                                <Link className="nav-link pb-0" to={"/page2"}>
                                    Page 2
                                </Link>
                            </li>
                            <li className="nav-item">
                                <Link className="nav-link pb-0" to={"/page3"}>
                                    Page 3
                                </Link>
                            </li>
                            <li className="nav-item">
                                <Link className="nav-link pb-0" to={"/page4"}>
                                    Page 4
                                </Link>
                            </li>
                        </ul>
                    </div>
                </div>
            </nav>

            {children}
        </div>
    )
}
