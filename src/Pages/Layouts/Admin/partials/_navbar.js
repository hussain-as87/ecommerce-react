import React from "react";

const Navbar = () => {
    return (
        <nav className="navbar">
            <a href="#" className="sidebar-toggler">
                <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width={24}
                    height={24}
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth={2}
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    className="feather feather-menu"
                >
                    <line x1={3} y1={12} x2={21} y2={12}/>
                    <line x1={3} y1={6} x2={21} y2={6}/>
                    <line x1={3} y1={18} x2={21} y2={18}/>
                </svg>
            </a>
            <div className="navbar-content">
                <form className="search-form">
                    <div className="input-group">
                        <div className="input-group-prepend">
                            <div className="input-group-text">
                                <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    width={24}
                                    height={24}
                                    viewBox="0 0 24 24"
                                    fill="none"
                                    stroke="currentColor"
                                    strokeWidth={2}
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    className="feather feather-search"
                                >
                                    <circle cx={11} cy={11} r={8}/>
                                    <line x1={21} y1={21} x2="16.65" y2="16.65"/>
                                </svg>
                            </div>
                        </div>
                        <input
                            type="text"
                            className="form-control"
                            id="navbarForm"
                            placeholder="Search here..."
                        />
                    </div>
                </form>
                <ul className="navbar-nav">
                    <li className="nav-item dropdown">
                        <a
                            className="nav-link dropdown-toggle"
                            href="#"
                            id="languageDropdown"
                            role="button"
                            data-toggle="dropdown"
                            aria-haspopup="true"
                            aria-expanded="false"
                        >
                            <i className="flag-icon flag-icon-us mt-1" title="us"/>{" "}
                            <span className="font-weight-medium ml-1 mr-1 d-none d-md-inline-block">
                English
              </span>
                        </a>
                        <div className="dropdown-menu" aria-labelledby="languageDropdown">
                            <a href="javascript:;" className="dropdown-item py-2">
                                <i className="flag-icon flag-icon-us" title="us" id="us"/>{" "}
                                <span className="ml-1"> English </span>
                            </a>
                            <a href="javascript:;" className="dropdown-item py-2">
                                <i className="flag-icon flag-icon-fr" title="fr" id="fr"/>{" "}
                                <span className="ml-1"> French </span>
                            </a>
                            <a href="javascript:;" className="dropdown-item py-2">
                                <i className="flag-icon flag-icon-de" title="de" id="de"/>{" "}
                                <span className="ml-1"> German </span>
                            </a>
                            <a href="javascript:;" className="dropdown-item py-2">
                                <i className="flag-icon flag-icon-pt" title="pt" id="pt"/>{" "}
                                <span className="ml-1"> Portuguese </span>
                            </a>
                            <a href="javascript:;" className="dropdown-item py-2">
                                <i className="flag-icon flag-icon-es" title="es" id="es"/>{" "}
                                <span className="ml-1"> Spanish </span>
                            </a>
                        </div>
                    </li>
                    <li className="nav-item dropdown nav-apps">
                        <a
                            className="nav-link dropdown-toggle"
                            href="#"
                            id="appsDropdown"
                            role="button"
                            data-toggle="dropdown"
                            aria-haspopup="true"
                            aria-expanded="false"
                        >
                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                width={24}
                                height={24}
                                viewBox="0 0 24 24"
                                fill="none"
                                stroke="currentColor"
                                strokeWidth={2}
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                className="feather feather-grid"
                            >
                                <rect x={3} y={3} width={7} height={7}/>
                                <rect x={14} y={3} width={7} height={7}/>
                                <rect x={14} y={14} width={7} height={7}/>
                                <rect x={3} y={14} width={7} height={7}/>
                            </svg>
                        </a>
                        <div className="dropdown-menu" aria-labelledby="appsDropdown">
                            <div className="dropdown-header d-flex align-items-center justify-content-between">
                                <p className="mb-0 font-weight-medium">Web Apps</p>
                                <a href="javascript:;" className="text-muted">
                                    Edit
                                </a>
                            </div>
                            <div className="dropdown-body">
                                <div className="d-flex align-items-center apps">
                                    <a href="pages/apps/chat.html">
                                        <svg
                                            xmlns="http://www.w3.org/2000/svg"
                                            width={24}
                                            height={24}
                                            viewBox="0 0 24 24"
                                            fill="none"
                                            stroke="currentColor"
                                            strokeWidth={2}
                                            strokeLinecap="round"
                                            strokeLinejoin="round"
                                            className="feather feather-message-square icon-lg"
                                        >
                                            <path
                                                d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z"/>
                                        </svg>
                                        <p>Chat</p>
                                    </a>
                                    <a href="pages/apps/calendar.html">
                                        <svg
                                            xmlns="http://www.w3.org/2000/svg"
                                            width={24}
                                            height={24}
                                            viewBox="0 0 24 24"
                                            fill="none"
                                            stroke="currentColor"
                                            strokeWidth={2}
                                            strokeLinecap="round"
                                            strokeLinejoin="round"
                                            className="feather feather-calendar icon-lg"
                                        >
                                            <rect x={3} y={4} width={18} height={18} rx={2} ry={2}/>
                                            <line x1={16} y1={2} x2={16} y2={6}/>
                                            <line x1={8} y1={2} x2={8} y2={6}/>
                                            <line x1={3} y1={10} x2={21} y2={10}/>
                                        </svg>
                                        <p>Calendar</p>
                                    </a>
                                    <a href="pages/email/inbox.html">
                                        <svg
                                            xmlns="http://www.w3.org/2000/svg"
                                            width={24}
                                            height={24}
                                            viewBox="0 0 24 24"
                                            fill="none"
                                            stroke="currentColor"
                                            strokeWidth={2}
                                            strokeLinecap="round"
                                            strokeLinejoin="round"
                                            className="feather feather-mail icon-lg"
                                        >
                                            <path
                                                d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"/>
                                            <polyline points="22,6 12,13 2,6"/>
                                        </svg>
                                        <p>Email</p>
                                    </a>
                                    <a href="pages/general/profile.html">
                                        <svg
                                            xmlns="http://www.w3.org/2000/svg"
                                            width={24}
                                            height={24}
                                            viewBox="0 0 24 24"
                                            fill="none"
                                            stroke="currentColor"
                                            strokeWidth={2}
                                            strokeLinecap="round"
                                            strokeLinejoin="round"
                                            className="feather feather-instagram icon-lg"
                                        >
                                            <rect x={2} y={2} width={20} height={20} rx={5} ry={5}/>
                                            <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"/>
                                            <line x1="17.5" y1="6.5" x2="17.51" y2="6.5"/>
                                        </svg>
                                        <p>Profile</p>
                                    </a>
                                </div>
                            </div>
                            <div className="dropdown-footer d-flex align-items-center justify-content-center">
                                <a href="javascript:;">View all</a>
                            </div>
                        </div>
                    </li>
                    <li className="nav-item dropdown nav-messages">
                        <a
                            className="nav-link dropdown-toggle"
                            href="#"
                            id="messageDropdown"
                            role="button"
                            data-toggle="dropdown"
                            aria-haspopup="true"
                            aria-expanded="false"
                        >
                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                width={24}
                                height={24}
                                viewBox="0 0 24 24"
                                fill="none"
                                stroke="currentColor"
                                strokeWidth={2}
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                className="feather feather-mail"
                            >
                                <path
                                    d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"/>
                                <polyline points="22,6 12,13 2,6"/>
                            </svg>
                        </a>
                        <div className="dropdown-menu" aria-labelledby="messageDropdown">
                            <div className="dropdown-header d-flex align-items-center justify-content-between">
                                <p className="mb-0 font-weight-medium">9 New Messages</p>
                                <a href="javascript:;" className="text-muted">
                                    Clear all
                                </a>
                            </div>
                            <div className="dropdown-body">
                                <a href="javascript:;" className="dropdown-item">
                                    <div className="figure">
                                        <img src="https://via.placeholder.com/30x30" alt="userr"/>
                                    </div>
                                    <div className="content">
                                        <div className="d-flex justify-content-between align-items-center">
                                            <p>Leonardo Payne</p>
                                            <p className="sub-text text-muted">2 min ago</p>
                                        </div>
                                        <p className="sub-text text-muted">Project status</p>
                                    </div>
                                </a>
                                <a href="javascript:;" className="dropdown-item">
                                    <div className="figure">
                                        <img src="https://via.placeholder.com/30x30" alt="userr"/>
                                    </div>
                                    <div className="content">
                                        <div className="d-flex justify-content-between align-items-center">
                                            <p>Carl Henson</p>
                                            <p className="sub-text text-muted">30 min ago</p>
                                        </div>
                                        <p className="sub-text text-muted">Client meeting</p>
                                    </div>
                                </a>
                                <a href="javascript:;" className="dropdown-item">
                                    <div className="figure">
                                        <img src="https://via.placeholder.com/30x30" alt="userr"/>
                                    </div>
                                    <div className="content">
                                        <div className="d-flex justify-content-between align-items-center">
                                            <p>Jensen Combs</p>
                                            <p className="sub-text text-muted">1 hrs ago</p>
                                        </div>
                                        <p className="sub-text text-muted">Project updates</p>
                                    </div>
                                </a>
                                <a href="javascript:;" className="dropdown-item">
                                    <div className="figure">
                                        <img src="https://via.placeholder.com/30x30" alt="userr"/>
                                    </div>
                                    <div className="content">
                                        <div className="d-flex justify-content-between align-items-center">
                                            <p>Amiah Burton</p>
                                            <p className="sub-text text-muted">2 hrs ago</p>
                                        </div>
                                        <p className="sub-text text-muted">Project deadline</p>
                                    </div>
                                </a>
                                <a href="javascript:;" className="dropdown-item">
                                    <div className="figure">
                                        <img src="https://via.placeholder.com/30x30" alt="userr"/>
                                    </div>
                                    <div className="content">
                                        <div className="d-flex justify-content-between align-items-center">
                                            <p>Yaretzi Mayo</p>
                                            <p className="sub-text text-muted">5 hr ago</p>
                                        </div>
                                        <p className="sub-text text-muted">New record</p>
                                    </div>
                                </a>
                            </div>
                            <div className="dropdown-footer d-flex align-items-center justify-content-center">
                                <a href="javascript:;">View all</a>
                            </div>
                        </div>
                    </li>
                    <li className="nav-item dropdown nav-notifications">
                        <a
                            className="nav-link dropdown-toggle"
                            href="#"
                            id="notificationDropdown"
                            role="button"
                            data-toggle="dropdown"
                            aria-haspopup="true"
                            aria-expanded="false"
                        >
                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                width={24}
                                height={24}
                                viewBox="0 0 24 24"
                                fill="none"
                                stroke="currentColor"
                                strokeWidth={2}
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                className="feather feather-bell"
                            >
                                <path d="M18 8A6 6 0 0 0 6 8c0 7-3 9-3 9h18s-3-2-3-9"/>
                                <path d="M13.73 21a2 2 0 0 1-3.46 0"/>
                            </svg>
                            <div className="indicator">
                                <div className="circle"/>
                            </div>
                        </a>
                        <div
                            className="dropdown-menu"
                            aria-labelledby="notificationDropdown"
                        >
                            <div className="dropdown-header d-flex align-items-center justify-content-between">
                                <p className="mb-0 font-weight-medium">6 New Notifications</p>
                                <a href="javascript:;" className="text-muted">
                                    Clear all
                                </a>
                            </div>
                            <div className="dropdown-body">
                                <a href="javascript:;" className="dropdown-item">
                                    <div className="icon">
                                        <svg
                                            xmlns="http://www.w3.org/2000/svg"
                                            width={24}
                                            height={24}
                                            viewBox="0 0 24 24"
                                            fill="none"
                                            stroke="currentColor"
                                            strokeWidth={2}
                                            strokeLinecap="round"
                                            strokeLinejoin="round"
                                            className="feather feather-user-plus"
                                        >
                                            <path d="M16 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"/>
                                            <circle cx="8.5" cy={7} r={4}/>
                                            <line x1={20} y1={8} x2={20} y2={14}/>
                                            <line x1={23} y1={11} x2={17} y2={11}/>
                                        </svg>
                                    </div>
                                    <div className="content">
                                        <p>New customer registered</p>
                                        <p className="sub-text text-muted">2 sec ago</p>
                                    </div>
                                </a>
                                <a href="javascript:;" className="dropdown-item">
                                    <div className="icon">
                                        <svg
                                            xmlns="http://www.w3.org/2000/svg"
                                            width={24}
                                            height={24}
                                            viewBox="0 0 24 24"
                                            fill="none"
                                            stroke="currentColor"
                                            strokeWidth={2}
                                            strokeLinecap="round"
                                            strokeLinejoin="round"
                                            className="feather feather-gift"
                                        >
                                            <polyline points="20 12 20 22 4 22 4 12"/>
                                            <rect x={2} y={7} width={20} height={5}/>
                                            <line x1={12} y1={22} x2={12} y2={7}/>
                                            <path d="M12 7H7.5a2.5 2.5 0 0 1 0-5C11 2 12 7 12 7z"/>
                                            <path d="M12 7h4.5a2.5 2.5 0 0 0 0-5C13 2 12 7 12 7z"/>
                                        </svg>
                                    </div>
                                    <div className="content">
                                        <p>New Order Recieved</p>
                                        <p className="sub-text text-muted">30 min ago</p>
                                    </div>
                                </a>
                                <a href="javascript:;" className="dropdown-item">
                                    <div className="icon">
                                        <svg
                                            xmlns="http://www.w3.org/2000/svg"
                                            width={24}
                                            height={24}
                                            viewBox="0 0 24 24"
                                            fill="none"
                                            stroke="currentColor"
                                            strokeWidth={2}
                                            strokeLinecap="round"
                                            strokeLinejoin="round"
                                            className="feather feather-alert-circle"
                                        >
                                            <circle cx={12} cy={12} r={10}/>
                                            <line x1={12} y1={8} x2={12} y2={12}/>
                                            <line x1={12} y1={16} x2="12.01" y2={16}/>
                                        </svg>
                                    </div>
                                    <div className="content">
                                        <p>Server Limit Reached!</p>
                                        <p className="sub-text text-muted">1 hrs ago</p>
                                    </div>
                                </a>
                                <a href="javascript:;" className="dropdown-item">
                                    <div className="icon">
                                        <svg
                                            xmlns="http://www.w3.org/2000/svg"
                                            width={24}
                                            height={24}
                                            viewBox="0 0 24 24"
                                            fill="none"
                                            stroke="currentColor"
                                            strokeWidth={2}
                                            strokeLinecap="round"
                                            strokeLinejoin="round"
                                            className="feather feather-layers"
                                        >
                                            <polygon points="12 2 2 7 12 12 22 7 12 2"/>
                                            <polyline points="2 17 12 22 22 17"/>
                                            <polyline points="2 12 12 17 22 12"/>
                                        </svg>
                                    </div>
                                    <div className="content">
                                        <p>Apps are ready for update</p>
                                        <p className="sub-text text-muted">5 hrs ago</p>
                                    </div>
                                </a>
                                <a href="javascript:;" className="dropdown-item">
                                    <div className="icon">
                                        <svg
                                            xmlns="http://www.w3.org/2000/svg"
                                            width={24}
                                            height={24}
                                            viewBox="0 0 24 24"
                                            fill="none"
                                            stroke="currentColor"
                                            strokeWidth={2}
                                            strokeLinecap="round"
                                            strokeLinejoin="round"
                                            className="feather feather-download"
                                        >
                                            <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"/>
                                            <polyline points="7 10 12 15 17 10"/>
                                            <line x1={12} y1={15} x2={12} y2={3}/>
                                        </svg>
                                    </div>
                                    <div className="content">
                                        <p>Download completed</p>
                                        <p className="sub-text text-muted">6 hrs ago</p>
                                    </div>
                                </a>
                            </div>
                            <div className="dropdown-footer d-flex align-items-center justify-content-center">
                                <a href="javascript:;">View all</a>
                            </div>
                        </div>
                    </li>
                    <li className="nav-item dropdown nav-profile">
                        <a
                            className="nav-link dropdown-toggle"
                            href="#"
                            id="profileDropdown"
                            role="button"
                            data-toggle="dropdown"
                            aria-haspopup="true"
                            aria-expanded="false"
                        >
                            <img src="https://via.placeholder.com/30x30" alt="profile"/>
                        </a>
                        <div className="dropdown-menu" aria-labelledby="profileDropdown">
                            <div className="dropdown-header d-flex flex-column align-items-center">
                                <div className="figure mb-3">
                                    <img src="https://via.placeholder.com/80x80" alt=""/>
                                </div>
                                <div className="info text-center">
                                    <p className="name font-weight-bold mb-0">Amiah Burton</p>
                                    <p className="email text-muted mb-3">amiahburton@gmail.com</p>
                                </div>
                            </div>
                            <div className="dropdown-body">
                                <ul className="profile-nav p-0 pt-3">
                                    <li className="nav-item">
                                        <a href="pages/general/profile.html" className="nav-link">
                                            <svg
                                                xmlns="http://www.w3.org/2000/svg"
                                                width={24}
                                                height={24}
                                                viewBox="0 0 24 24"
                                                fill="none"
                                                stroke="currentColor"
                                                strokeWidth={2}
                                                strokeLinecap="round"
                                                strokeLinejoin="round"
                                                className="feather feather-user"
                                            >
                                                <path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2"/>
                                                <circle cx={12} cy={7} r={4}/>
                                            </svg>
                                            <span>Profile</span>
                                        </a>
                                    </li>
                                    <li className="nav-item">
                                        <a href="javascript:;" className="nav-link">
                                            <svg
                                                xmlns="http://www.w3.org/2000/svg"
                                                width={24}
                                                height={24}
                                                viewBox="0 0 24 24"
                                                fill="none"
                                                stroke="currentColor"
                                                strokeWidth={2}
                                                strokeLinecap="round"
                                                strokeLinejoin="round"
                                                className="feather feather-edit"
                                            >
                                                <path
                                                    d="M11 4H4a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2v-7"/>
                                                <path
                                                    d="M18.5 2.5a2.121 2.121 0 0 1 3 3L12 15l-4 1 1-4 9.5-9.5z"/>
                                            </svg>
                                            <span>Edit Profile</span>
                                        </a>
                                    </li>
                                    <li className="nav-item">
                                        <a href="javascript:;" className="nav-link">
                                            <svg
                                                xmlns="http://www.w3.org/2000/svg"
                                                width={24}
                                                height={24}
                                                viewBox="0 0 24 24"
                                                fill="none"
                                                stroke="currentColor"
                                                strokeWidth={2}
                                                strokeLinecap="round"
                                                strokeLinejoin="round"
                                                className="feather feather-repeat"
                                            >
                                                <polyline points="17 1 21 5 17 9"/>
                                                <path d="M3 11V9a4 4 0 0 1 4-4h14"/>
                                                <polyline points="7 23 3 19 7 15"/>
                                                <path d="M21 13v2a4 4 0 0 1-4 4H3"/>
                                            </svg>
                                            <span>Switch User</span>
                                        </a>
                                    </li>
                                    <li className="nav-item">
                                        <a href="javascript:;" className="nav-link">
                                            <svg
                                                xmlns="http://www.w3.org/2000/svg"
                                                width={24}
                                                height={24}
                                                viewBox="0 0 24 24"
                                                fill="none"
                                                stroke="currentColor"
                                                strokeWidth={2}
                                                strokeLinecap="round"
                                                strokeLinejoin="round"
                                                className="feather feather-log-out"
                                            >
                                                <path d="M9 21H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h4"/>
                                                <polyline points="16 17 21 12 16 7"/>
                                                <line x1={21} y1={12} x2={9} y2={12}/>
                                            </svg>
                                            <span>Log Out</span>
                                        </a>
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </li>
                </ul>
            </div>
        </nav>
    )
}
export default Navbar
