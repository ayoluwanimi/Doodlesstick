export function MobileNav() {
    return (
        <>
            <div className="mobile-menu" id="mobileMenu">
                <div className="close-btn" id="closeBtn">&times;</div>
                <ul>
                    <li><a href="index.html" className="active">HOME</a></li>
                    <li className="dropdown" id="serviceDropdown"><a href="../services/services.html">OUR SERVICES</a>
                    </li>
                    <li><a href="../about_us/about.html">ABOUT US</a></li>
                    <li><a href="../contact/contact.html">CONTACT US</a></li>
                    <li><a href="../vacancies/vacancies.html">VACANCIES</a></li>
                </ul>

                <div className="user-options">
                    <div className="avatar">
                        <a href="./login/login.html">
                            <div className="avatar-circle">
                                <svg className="person-icon" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="white"
                                    width="24px" height="24px">
                                    <path
                                        d="M12 12c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 1.79 4 4 4zm0 2c-2.67 0-8 1.34-8 4v2h16v-2c0-2.66-5.33-4-8-4z" />
                                </svg>
                            </div>
                            <h3 className="login">Login</h3>
                        </a>
                    </div>
                    <div className="cart">
                        <a href="./cart/cart.html">
                            <i className="fas fa-shopping-bag cart-icon"></i>
                            <span className="cart-count">3</span>
                        </a>
                    </div>
                </div>
            </div>
        </>
    )
}
