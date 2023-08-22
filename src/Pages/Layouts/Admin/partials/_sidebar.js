import React from "react";

const SideBar = () => {
    return (
        <>
            <nav className="sidebar">
                <div className="sidebar-header">
                    <a href="#" className="sidebar-brand">
                        Noble<span>UI</span>
                    </a>
                    <div className="sidebar-toggler not-active">
                        <span/>
                        <span/>
                        <span/>
                    </div>
                </div>
                <div className="sidebar-body ps ps--active-y">
                    <ul className="nav">
                        <li className="nav-item nav-category">Main</li>
                        <li className="nav-item active">
                            <a href="dashboard-one.html" className="nav-link">
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
                                    className="feather feather-box link-icon"
                                >
                                    <path
                                        d="M21 16V8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73l7 4a2 2 0 0 0 2 0l7-4A2 2 0 0 0 21 16z"/>
                                    <polyline points="3.27 6.96 12 12.01 20.73 6.96"/>
                                    <line x1={12} y1="22.08" x2={12} y2={12}/>
                                </svg>
                                <span className="link-title">Dashboard</span>
                            </a>
                        </li>
                        <li className="nav-item nav-category">web apps</li>
                        <li className="nav-item">
                            <a
                                className="nav-link"
                                data-toggle="collapse"
                                href="#emails"
                                role="button"
                                aria-expanded="false"
                                aria-controls="emails"
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
                                    className="feather feather-mail link-icon"
                                >
                                    <path
                                        d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"/>
                                    <polyline points="22,6 12,13 2,6"/>
                                </svg>
                                <span className="link-title">Email</span>
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
                                    className="feather feather-chevron-down link-arrow"
                                >
                                    <polyline points="6 9 12 15 18 9"/>
                                </svg>
                            </a>
                            <div className="collapse" id="emails">
                                <ul className="nav sub-menu">
                                    <li className="nav-item">
                                        <a href="pages/email/inbox.html" className="nav-link">
                                            Inbox
                                        </a>
                                    </li>
                                    <li className="nav-item">
                                        <a href="pages/email/read.html" className="nav-link">
                                            Read
                                        </a>
                                    </li>
                                    <li className="nav-item">
                                        <a href="pages/email/compose.html" className="nav-link">
                                            Compose
                                        </a>
                                    </li>
                                </ul>
                            </div>
                        </li>
                        <li className="nav-item">
                            <a href="pages/apps/chat.html" className="nav-link">
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
                                    className="feather feather-message-square link-icon"
                                >
                                    <path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z"/>
                                </svg>
                                <span className="link-title">Chat</span>
                            </a>
                        </li>
                        <li className="nav-item">
                            <a href="pages/apps/calendar.html" className="nav-link">
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
                                    className="feather feather-calendar link-icon"
                                >
                                    <rect x={3} y={4} width={18} height={18} rx={2} ry={2}/>
                                    <line x1={16} y1={2} x2={16} y2={6}/>
                                    <line x1={8} y1={2} x2={8} y2={6}/>
                                    <line x1={3} y1={10} x2={21} y2={10}/>
                                </svg>
                                <span className="link-title">Calendar</span>
                            </a>
                        </li>
                        <li className="nav-item nav-category">Components</li>
                        <li className="nav-item">
                            <a
                                className="nav-link"
                                data-toggle="collapse"
                                href="#uiComponents"
                                role="button"
                                aria-expanded="false"
                                aria-controls="uiComponents"
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
                                    className="feather feather-feather link-icon"
                                >
                                    <path d="M20.24 12.24a6 6 0 0 0-8.49-8.49L5 10.5V19h8.5z"/>
                                    <line x1={16} y1={8} x2={2} y2={22}/>
                                    <line x1="17.5" y1={15} x2={9} y2={15}/>
                                </svg>
                                <span className="link-title">UI Kit</span>
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
                                    className="feather feather-chevron-down link-arrow"
                                >
                                    <polyline points="6 9 12 15 18 9"/>
                                </svg>
                            </a>
                            <div className="collapse" id="uiComponents">
                                <ul className="nav sub-menu">
                                    <li className="nav-item">
                                        <a href="pages/ui-components/alerts.html" className="nav-link">
                                            Alerts
                                        </a>
                                    </li>
                                    <li className="nav-item">
                                        <a href="pages/ui-components/badges.html" className="nav-link">
                                            Badges
                                        </a>
                                    </li>
                                    <li className="nav-item">
                                        <a
                                            href="pages/ui-components/breadcrumbs.html"
                                            className="nav-link"
                                        >
                                            Breadcrumbs
                                        </a>
                                    </li>
                                    <li className="nav-item">
                                        <a href="pages/ui-components/buttons.html" className="nav-link">
                                            Buttons
                                        </a>
                                    </li>
                                    <li className="nav-item">
                                        <a
                                            href="pages/ui-components/button-group.html"
                                            className="nav-link"
                                        >
                                            Button group
                                        </a>
                                    </li>
                                    <li className="nav-item">
                                        <a href="pages/ui-components/cards.html" className="nav-link">
                                            Cards
                                        </a>
                                    </li>
                                    <li className="nav-item">
                                        <a
                                            href="pages/ui-components/carousel.html"
                                            className="nav-link"
                                        >
                                            Carousel
                                        </a>
                                    </li>
                                    <li className="nav-item">
                                        <a
                                            href="pages/ui-components/collapse.html"
                                            className="nav-link"
                                        >
                                            Collapse
                                        </a>
                                    </li>
                                    <li className="nav-item">
                                        <a
                                            href="pages/ui-components/dropdowns.html"
                                            className="nav-link"
                                        >
                                            Dropdowns
                                        </a>
                                    </li>
                                    <li className="nav-item">
                                        <a
                                            href="pages/ui-components/list-group.html"
                                            className="nav-link"
                                        >
                                            List group
                                        </a>
                                    </li>
                                    <li className="nav-item">
                                        <a
                                            href="pages/ui-components/media-object.html"
                                            className="nav-link"
                                        >
                                            Media object
                                        </a>
                                    </li>
                                    <li className="nav-item">
                                        <a href="pages/ui-components/modal.html" className="nav-link">
                                            Modal
                                        </a>
                                    </li>
                                    <li className="nav-item">
                                        <a href="pages/ui-components/navs.html" className="nav-link">
                                            Navs
                                        </a>
                                    </li>
                                    <li className="nav-item">
                                        <a href="pages/ui-components/navbar.html" className="nav-link">
                                            Navbar
                                        </a>
                                    </li>
                                    <li className="nav-item">
                                        <a
                                            href="pages/ui-components/pagination.html"
                                            className="nav-link"
                                        >
                                            Pagination
                                        </a>
                                    </li>
                                    <li className="nav-item">
                                        <a href="pages/ui-components/popover.html" className="nav-link">
                                            Popovers
                                        </a>
                                    </li>
                                    <li className="nav-item">
                                        <a
                                            href="pages/ui-components/progress.html"
                                            className="nav-link"
                                        >
                                            Progress
                                        </a>
                                    </li>
                                    <li className="nav-item">
                                        <a
                                            href="pages/ui-components/scrollbar.html"
                                            className="nav-link"
                                        >
                                            Scrollbar
                                        </a>
                                    </li>
                                    <li className="nav-item">
                                        <a
                                            href="pages/ui-components/scrollspy.html"
                                            className="nav-link"
                                        >
                                            Scrollspy
                                        </a>
                                    </li>
                                    <li className="nav-item">
                                        <a
                                            href="pages/ui-components/spinners.html"
                                            className="nav-link"
                                        >
                                            Spinners
                                        </a>
                                    </li>
                                    <li className="nav-item">
                                        <a
                                            href="pages/ui-components/tooltips.html"
                                            className="nav-link"
                                        >
                                            Tooltips
                                        </a>
                                    </li>
                                </ul>
                            </div>
                        </li>
                        <li className="nav-item">
                            <a
                                className="nav-link"
                                data-toggle="collapse"
                                href="#advancedUI"
                                role="button"
                                aria-expanded="false"
                                aria-controls="advancedUI"
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
                                    className="feather feather-anchor link-icon"
                                >
                                    <circle cx={12} cy={5} r={3}/>
                                    <line x1={12} y1={22} x2={12} y2={8}/>
                                    <path d="M5 12H2a10 10 0 0 0 20 0h-3"/>
                                </svg>
                                <span className="link-title">Advanced UI</span>
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
                                    className="feather feather-chevron-down link-arrow"
                                >
                                    <polyline points="6 9 12 15 18 9"/>
                                </svg>
                            </a>
                            <div className="collapse" id="advancedUI">
                                <ul className="nav sub-menu">
                                    <li className="nav-item">
                                        <a href="pages/advanced-ui/cropper.html" className="nav-link">
                                            Cropper
                                        </a>
                                    </li>
                                    <li className="nav-item">
                                        <a
                                            href="pages/advanced-ui/owl-carousel.html"
                                            className="nav-link"
                                        >
                                            Owl carousel
                                        </a>
                                    </li>
                                    <li className="nav-item">
                                        <a
                                            href="pages/advanced-ui/sweet-alert.html"
                                            className="nav-link"
                                        >
                                            Sweet Alert
                                        </a>
                                    </li>
                                </ul>
                            </div>
                        </li>
                        <li className="nav-item">
                            <a
                                className="nav-link"
                                data-toggle="collapse"
                                href="#forms"
                                role="button"
                                aria-expanded="false"
                                aria-controls="forms"
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
                                    className="feather feather-inbox link-icon"
                                >
                                    <polyline points="22 12 16 12 14 15 10 15 8 12 2 12"/>
                                    <path
                                        d="M5.45 5.11L2 12v6a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2v-6l-3.45-6.89A2 2 0 0 0 16.76 4H7.24a2 2 0 0 0-1.79 1.11z"/>
                                </svg>
                                <span className="link-title">Forms</span>
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
                                    className="feather feather-chevron-down link-arrow"
                                >
                                    <polyline points="6 9 12 15 18 9"/>
                                </svg>
                            </a>
                            <div className="collapse" id="forms">
                                <ul className="nav sub-menu">
                                    <li className="nav-item">
                                        <a href="pages/forms/basic-elements.html" className="nav-link">
                                            Basic Elements
                                        </a>
                                    </li>
                                    <li className="nav-item">
                                        <a
                                            href="pages/forms/advanced-elements.html"
                                            className="nav-link"
                                        >
                                            Advanced Elements
                                        </a>
                                    </li>
                                    <li className="nav-item">
                                        <a href="pages/forms/editors.html" className="nav-link">
                                            Editors
                                        </a>
                                    </li>
                                    <li className="nav-item">
                                        <a href="pages/forms/wizard.html" className="nav-link">
                                            Wizard
                                        </a>
                                    </li>
                                </ul>
                            </div>
                        </li>
                        <li className="nav-item">
                            <a
                                className="nav-link"
                                data-toggle="collapse"
                                href="#charts"
                                role="button"
                                aria-expanded="false"
                                aria-controls="charts"
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
                                    className="feather feather-pie-chart link-icon"
                                >
                                    <path d="M21.21 15.89A10 10 0 1 1 8 2.83"/>
                                    <path d="M22 12A10 10 0 0 0 12 2v10z"/>
                                </svg>
                                <span className="link-title">Charts</span>
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
                                    className="feather feather-chevron-down link-arrow"
                                >
                                    <polyline points="6 9 12 15 18 9"/>
                                </svg>
                            </a>
                            <div className="collapse" id="charts">
                                <ul className="nav sub-menu">
                                    <li className="nav-item">
                                        <a href="pages/charts/apex.html" className="nav-link">
                                            Apex
                                        </a>
                                    </li>
                                    <li className="nav-item">
                                        <a href="pages/charts/chartjs.html" className="nav-link">
                                            ChartJs
                                        </a>
                                    </li>
                                    <li className="nav-item">
                                        <a href="pages/charts/flot.html" className="nav-link">
                                            Flot
                                        </a>
                                    </li>
                                    <li className="nav-item">
                                        <a href="pages/charts/morrisjs.html" className="nav-link">
                                            Morris
                                        </a>
                                    </li>
                                    <li className="nav-item">
                                        <a href="pages/charts/peity.html" className="nav-link">
                                            Peity
                                        </a>
                                    </li>
                                    <li className="nav-item">
                                        <a href="pages/charts/sparkline.html" className="nav-link">
                                            Sparkline
                                        </a>
                                    </li>
                                </ul>
                            </div>
                        </li>
                        <li className="nav-item">
                            <a
                                className="nav-link"
                                data-toggle="collapse"
                                href="#tables"
                                role="button"
                                aria-expanded="false"
                                aria-controls="tables"
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
                                    className="feather feather-layout link-icon"
                                >
                                    <rect x={3} y={3} width={18} height={18} rx={2} ry={2}/>
                                    <line x1={3} y1={9} x2={21} y2={9}/>
                                    <line x1={9} y1={21} x2={9} y2={9}/>
                                </svg>
                                <span className="link-title">Table</span>
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
                                    className="feather feather-chevron-down link-arrow"
                                >
                                    <polyline points="6 9 12 15 18 9"/>
                                </svg>
                            </a>
                            <div className="collapse" id="tables">
                                <ul className="nav sub-menu">
                                    <li className="nav-item">
                                        <a href="pages/tables/basic-table.html" className="nav-link">
                                            Basic Tables
                                        </a>
                                    </li>
                                    <li className="nav-item">
                                        <a href="pages/tables/data-table.html" className="nav-link">
                                            Data Table
                                        </a>
                                    </li>
                                </ul>
                            </div>
                        </li>
                        <li className="nav-item">
                            <a
                                className="nav-link"
                                data-toggle="collapse"
                                href="#icons"
                                role="button"
                                aria-expanded="false"
                                aria-controls="icons"
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
                                    className="feather feather-smile link-icon"
                                >
                                    <circle cx={12} cy={12} r={10}/>
                                    <path d="M8 14s1.5 2 4 2 4-2 4-2"/>
                                    <line x1={9} y1={9} x2="9.01" y2={9}/>
                                    <line x1={15} y1={9} x2="15.01" y2={9}/>
                                </svg>
                                <span className="link-title">Icons</span>
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
                                    className="feather feather-chevron-down link-arrow"
                                >
                                    <polyline points="6 9 12 15 18 9"/>
                                </svg>
                            </a>
                            <div className="collapse" id="icons">
                                <ul className="nav sub-menu">
                                    <li className="nav-item">
                                        <a href="pages/icons/feather-icons.html" className="nav-link">
                                            Feather Icons
                                        </a>
                                    </li>
                                    <li className="nav-item">
                                        <a href="pages/icons/flag-icons.html" className="nav-link">
                                            Flag Icons
                                        </a>
                                    </li>
                                    <li className="nav-item">
                                        <a href="pages/icons/mdi-icons.html" className="nav-link">
                                            Mdi Icons
                                        </a>
                                    </li>
                                </ul>
                            </div>
                        </li>
                        <li className="nav-item nav-category">Pages</li>
                        <li className="nav-item">
                            <a
                                className="nav-link"
                                data-toggle="collapse"
                                href="#general-pages"
                                role="button"
                                aria-expanded="false"
                                aria-controls="general-pages"
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
                                    className="feather feather-book link-icon"
                                >
                                    <path d="M4 19.5A2.5 2.5 0 0 1 6.5 17H20"/>
                                    <path d="M6.5 2H20v20H6.5A2.5 2.5 0 0 1 4 19.5v-15A2.5 2.5 0 0 1 6.5 2z"/>
                                </svg>
                                <span className="link-title">Special pages</span>
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
                                    className="feather feather-chevron-down link-arrow"
                                >
                                    <polyline points="6 9 12 15 18 9"/>
                                </svg>
                            </a>
                            <div className="collapse" id="general-pages">
                                <ul className="nav sub-menu">
                                    <li className="nav-item">
                                        <a href="pages/general/blank-page.html" className="nav-link">
                                            Blank page
                                        </a>
                                    </li>
                                    <li className="nav-item">
                                        <a href="pages/general/faq.html" className="nav-link">
                                            Faq
                                        </a>
                                    </li>
                                    <li className="nav-item">
                                        <a href="pages/general/invoice.html" className="nav-link">
                                            Invoice
                                        </a>
                                    </li>
                                    <li className="nav-item">
                                        <a href="pages/general/profile.html" className="nav-link">
                                            Profile
                                        </a>
                                    </li>
                                    <li className="nav-item">
                                        <a href="pages/general/pricing.html" className="nav-link">
                                            Pricing
                                        </a>
                                    </li>
                                    <li className="nav-item">
                                        <a href="pages/general/timeline.html" className="nav-link">
                                            Timeline
                                        </a>
                                    </li>
                                </ul>
                            </div>
                        </li>
                        <li className="nav-item">
                            <a
                                className="nav-link"
                                data-toggle="collapse"
                                href="#authPages"
                                role="button"
                                aria-expanded="false"
                                aria-controls="authPages"
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
                                    className="feather feather-unlock link-icon"
                                >
                                    <rect x={3} y={11} width={18} height={11} rx={2} ry={2}/>
                                    <path d="M7 11V7a5 5 0 0 1 9.9-1"/>
                                </svg>
                                <span className="link-title">Authentication</span>
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
                                    className="feather feather-chevron-down link-arrow"
                                >
                                    <polyline points="6 9 12 15 18 9"/>
                                </svg>
                            </a>
                            <div className="collapse" id="authPages">
                                <ul className="nav sub-menu">
                                    <li className="nav-item">
                                        <a href="pages/auth/login.html" className="nav-link">
                                            Login
                                        </a>
                                    </li>
                                    <li className="nav-item">
                                        <a href="pages/auth/register.html" className="nav-link">
                                            Register
                                        </a>
                                    </li>
                                </ul>
                            </div>
                        </li>
                        <li className="nav-item">
                            <a
                                className="nav-link"
                                data-toggle="collapse"
                                href="#errorPages"
                                role="button"
                                aria-expanded="false"
                                aria-controls="errorPages"
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
                                    className="feather feather-cloud-off link-icon"
                                >
                                    <path
                                        d="M22.61 16.95A5 5 0 0 0 18 10h-1.26a8 8 0 0 0-7.05-6M5 5a8 8 0 0 0 4 15h9a5 5 0 0 0 1.7-.3"/>
                                    <line x1={1} y1={1} x2={23} y2={23}/>
                                </svg>
                                <span className="link-title">Error</span>
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
                                    className="feather feather-chevron-down link-arrow"
                                >
                                    <polyline points="6 9 12 15 18 9"/>
                                </svg>
                            </a>
                            <div className="collapse" id="errorPages">
                                <ul className="nav sub-menu">
                                    <li className="nav-item">
                                        <a href="pages/error/404.html" className="nav-link">
                                            404
                                        </a>
                                    </li>
                                    <li className="nav-item">
                                        <a href="pages/error/500.html" className="nav-link">
                                            500
                                        </a>
                                    </li>
                                </ul>
                            </div>
                        </li>
                        <li className="nav-item nav-category">Docs</li>
                        <li className="nav-item">
                            <a
                                href="https://www.nobleui.com/html/documentation/docs.html"
                                target="_blank"
                                className="nav-link"
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
                                    className="feather feather-hash link-icon"
                                >
                                    <line x1={4} y1={9} x2={20} y2={9}/>
                                    <line x1={4} y1={15} x2={20} y2={15}/>
                                    <line x1={10} y1={3} x2={8} y2={21}/>
                                    <line x1={16} y1={3} x2={14} y2={21}/>
                                </svg>
                                <span className="link-title">Documentation</span>
                            </a>
                        </li>
                    </ul>
                    <div className="ps__rail-x" style={{left: 0, bottom: 0}}>
                        <div
                            className="ps__thumb-x"
                            tabIndex={0}
                            style={{left: 0, width: 0}}
                        />
                    </div>
                    <div className="ps__rail-y" style={{top: 0, height: 544, right: 0}}>
                        <div
                            className="ps__thumb-y"
                            tabIndex={0}
                            style={{top: 0, height: 422}}
                        />
                    </div>
                </div>
            </nav>
            <nav className="settings-sidebar">
                <div className="sidebar-body">
                    <a href="#" className="settings-sidebar-toggler">
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
                            className="feather feather-settings"
                        >
                            <circle cx={12} cy={12} r={3}/>
                            <path
                                d="M19.4 15a1.65 1.65 0 0 0 .33 1.82l.06.06a2 2 0 0 1 0 2.83 2 2 0 0 1-2.83 0l-.06-.06a1.65 1.65 0 0 0-1.82-.33 1.65 1.65 0 0 0-1 1.51V21a2 2 0 0 1-2 2 2 2 0 0 1-2-2v-.09A1.65 1.65 0 0 0 9 19.4a1.65 1.65 0 0 0-1.82.33l-.06.06a2 2 0 0 1-2.83 0 2 2 0 0 1 0-2.83l.06-.06a1.65 1.65 0 0 0 .33-1.82 1.65 1.65 0 0 0-1.51-1H3a2 2 0 0 1-2-2 2 2 0 0 1 2-2h.09A1.65 1.65 0 0 0 4.6 9a1.65 1.65 0 0 0-.33-1.82l-.06-.06a2 2 0 0 1 0-2.83 2 2 0 0 1 2.83 0l.06.06a1.65 1.65 0 0 0 1.82.33H9a1.65 1.65 0 0 0 1-1.51V3a2 2 0 0 1 2-2 2 2 0 0 1 2 2v.09a1.65 1.65 0 0 0 1 1.51 1.65 1.65 0 0 0 1.82-.33l.06-.06a2 2 0 0 1 2.83 0 2 2 0 0 1 0 2.83l-.06.06a1.65 1.65 0 0 0-.33 1.82V9a1.65 1.65 0 0 0 1.51 1H21a2 2 0 0 1 2 2 2 2 0 0 1-2 2h-.09a1.65 1.65 0 0 0-1.51 1z"/>
                        </svg>
                    </a>
                    <div className="theme-wrapper">
                        <h6 className="text-muted mb-2">Light Theme:</h6>
                        <a className="theme-item" href="../demo_1/dashboard-one.html">
                            <img src="../assets/images/screenshots/light.jpg" alt="light theme"/>
                        </a>
                        <h6 className="text-muted mb-2">Dark Theme:</h6>
                        <a className="theme-item active" href="../demo_2/dashboard-one.html">
                            <img src="../assets/images/screenshots/dark.jpg" alt="light theme"/>
                        </a>
                    </div>
                </div>
            </nav>
        </>)
}
export default SideBar