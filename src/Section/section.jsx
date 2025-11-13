import './section.css'

function section() {
    return (
        <div className="container">
            <div className="about-me" id='about'>
                <h1>
                    about.
                </h1>
                <p>
                    I’m Dilshodbek Shodiyorov, a dedicated Frontend Developer from Tashkent, Uzbekistan. <br /> I focus on creating modern and responsive web applications using React, Next.js, and TypeScript. <br /> I enjoy writing clean, efficient code and bringing creative designs to life. I’m fluent in Uzbek (native) and have an Upper-Intermediate (C1) level of English. <br /> My goal is to continuously improve my frontend skills and become a professional developer
                </p>
            </div>



            <div className="information">
                <div className="first-info">
                    <h4>* 2020-2024</h4>
                    <p>
                        Academic Lyceum under the SSIAC,  Exact SciencesDeveloped a strong foundation <br /> in scientific and technical principles, preparing for further education in <br /> programming and technology.
                    </p>
                </div>

                <div className="second-info">
                    <h4>
                        * (March-July) 2025
                    </h4>
                    <p>
                        Intern Frontend Developer, AVBINVEST LIMITEDAssisted in the development of scalable B2B web applications using React. Contributed to streamlining business processes by supporting new feature integration.
                    </p>
                </div>
                <div className="third-info">
                    <h4>
                        * 2025-Present
                    </h4>
                    <p>
                        Professional Development
                        Dedicated to mastering React, Next.js, and TypeScript to build modern, scalable web applications with a focus on clean code and optimal UI/UX.
                        My goal is continuous improvement, constantly exploring advanced state management and performance techniques to transition into a full-time professional Frontend role.
                    </p>
                </div>
            </div>

            <div className="work">
                <h1>
                    work.
                </h1>
                <p>
                    I worked as a Frontend Developer Intern at AVBINVEST LIMITED, where I contributed to building <br />
                    scalable B2B web applications using React and modern technologies. I collaborated with a team
                    of developers <br /> to improve user experience and optimize performance.
                </p>
            </div>


            <div className="section-images">
                <div className="first-photo">
                    <img src="./js.png" alt="" />
                    <h4>
                        Some information
                    </h4>
                    <p>
                        Ready to contribute my skills in React and Next.js <br /> to a challenging  and professional development team. I'm always <br /> looking  for opportunities  to bring innovative solutions to life
                    </p>
                </div>
                <div className="second-photo">
                    <img src="./next.jpg" alt="" />
                    <h4>
                        Future Goals
                    </h4>
                    <p>
                        My goal is simple: to create highly efficient, scalable, <br /> and user-centered web solutions.  I thrive on translating <br /> creative designs into clean, professional code
                    </p>
                </div>
            </div>
        </div>
    )
}

export default section