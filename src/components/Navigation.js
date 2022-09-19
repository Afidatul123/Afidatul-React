//import { Link } from "react-router-dom";

export default function Navigation(){
    return (
        <div className="navbar-expand-md">
          <div className="collapse navbar-collapse" id="navbar-menu">
              <div className="container-xl">
                <ul className="navbar-nav" align="left">
                    
                      <span className="nav-link-icon d-md-none d-lg-inline-block">
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          className="icon"
                          width="24"
                          height="24"
                          viewBox="0 0 24 24"
                          strokeWidth="2"
                          stroke="currentColor"
                          fill="none"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                        >
                          <path stroke="none" d="M0 0h24v24H0z" fill="none" />
                          <polyline points="5 12 3 12 12 3 21 12 19 12" />
                          <path d="M5 12v7a2 2 0 0 0 2 2h10a2 2 0 0 0 2 -2v-7" />
                          <path d="M9 21v-6a2 2 0 0 1 2 -2h2a2 2 0 0 1 2 2v6" />
                        </svg>
                      </span>
                      <span className="nav-link-title">Home</span>
                      <span className="nav-link-title"> </span>
                  
                    
                      <span className="nav-link-icon d-md-none d-lg-inline-block">
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          className="icon"
                          width="24"
                          height="24"
                          viewBox="0 0 24 24"
                          strokeWidth="2"
                          stroke="currentColor"
                          fill="none"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                        >
                          <path stroke="none" d="M0 0h24v24H0z" fill="none" />
                          <polyline points="12 3 20 7.5 20 16.5 12 21 4 16.5 4 7.5 12 3" />
                          <line x1="12" y1="12" x2="20" y2="7.5" />
                          <line x1="12" y1="12" x2="12" y2="21" />
                          <line x1="12" y1="12" x2="4" y2="7.5" />
                          <line x1="16" y1="5.25" x2="8" y2="9.75" />
                        </svg>
                      </span>
                      <span className="nav-link-title">Transactions</span>
                      <span className="nav-link-title"> </span>
        

                      <span className="nav-link-icon d-md-none d-lg-inline-block">
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          className="icon"
                          width="24"
                          height="24"
                          viewBox="0 0 24 24"
                          strokeWidth="2"
                          stroke="currentColor"
                          fill="none"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                        >
                          <path stroke="none" d="M0 0h24v24H0z" fill="none" />
                          <circle cx="6" cy="19" r="2" />
                          <circle cx="17" cy="19" r="2" />
                          <path d="M17 17h-11v-14h-2" />
                          <path d="M6 5l14 1l-1 7h-13" />
                        </svg>
                      </span>
                      <span className="nav-link-title">Carts</span>
                      <span className="nav-link-title"> </span>
                  
                </ul>
              </div>
          </div>
        </div>
      )
}