import './footer.css'

function footer() {
  return (
    <div className="container">
        <div className="contact" id='contact'>
            <h1>
                contact.
            </h1>
        </div>
        <div className="contact-us">
            <img src="./contact.png" alt="" />
            <div className="contact-info">
                <ul>
                    <li>
                      I am always open to new projects and exciting collaborations. I am ready to help you bring your ideas to life using modern web technologies like React and Next.js. Please feel free to connect with me using the links below
                    </li>
                    <li>
                        <a href="mailto:shodiyorovdilshodbek00@gmail.com">shodiyorovdilshodbek00@gmail.com</a>
                    </li>
                    <li>
                        <a href="@Shodiyorov_Dilshodbek">Telegram</a>
                    </li>
                    <li>
                        <a href="https://www.linkedin.com/in/dilshodbek-shodiyorov-a7199432b?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=ios_app">LinkedIn</a>
                    </li>
                    <li>
                          Tel:+998971787471
                    </li>
                </ul>
            </div>
        </div>


        <div className="footer-content">
            <p>Thank you for visiting my Portfolio !</p>
            <p className='signature'>Sincerely,  Mr. Dilshodbek</p>
        </div>
    </div>
  )
}

export default footer