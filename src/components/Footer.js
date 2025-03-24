import footer_logo from '../images/logo.png'
export default function Footer() {
    return(
        <footer>
            <section>
                <div className="company-info">
                    <img src={footer_logo} alt=''/>
                    <p>bleh</p>
                </div>
                <div>
                    <h3>Important Links</h3>
                    <ul>
                        <li><a href='/'>Home</a></li>
                        <li><a href='/'>About</a></li>
                        <li><a href='/'>Menu</a></li>
                        <li><a href='/'>Reservations</a></li>
                        <li><a href='/'>Order Online</a></li>
                        <li><a href='/'>Login</a></li>
                    </ul>
                </div>

                <div>
                    <h3>Contact</h3>
                    <ul>
                        <li>Address: <br/> 123 Towncity, USA</li>
                        <li>Phone: <br/> ++ 0123 456 789</li>
                        <li>Email: <br/> little@lemon.com</li>
                    </ul>
                </div>
                
                <div>
                    <h3>Social Media Links</h3>
                    <ul>
                        <li><a href='/'>Facebook</a></li>
                        <li><a href='/'>Instagram</a></li>
                        <li><a href='/'>Twitter</a></li>
                    </ul>
                </div>
            </section>
        </footer>
    )
}