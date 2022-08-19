import "./styles.scss";
import yo from "../src/images/yo.jpg";
import qr from "../src/images/qr.jpg";
import "./css/sheet.css";
import project from "../src/assets/project.jpg";

function App() {
  return (
    <div>
      <head>
        <meta charset="utf-8" />
        <meta http-equiv="X-UA-Compatible" content="IE=edge" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link
          rel="shortcut icon"
          type="image/svg"
          href="images/logo.svg"
          sizes="1000x1000"
        />

        <title>[Mauro Molina] | Developer</title>

        <meta name="keywords" content="[username], [name], skill" />

        <meta name="description" content="[Mauro Molina] | Developer" />

        <link
          rel="stylesheet"
          href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css"
        />
        <link rel="stylesheet" href="styles.scss" />
        <script
          defer
          src="https://unpkg.com/scrollreveal@4.0.0/dist/scrollreveal.min.js"
        ></script>

        <script async defer src="https://buttons.github.io/buttons.js"></script>
      </head>

      <body>
        <div id="top"></div>
        <section id="hero" class="jumbotron">
          <div class="container">
            <h1 class="hero-title load-hidden">
              Hi, my name is <span class="text-color-main">Mauro Molina</span>
              <br />
              I'm
              <div className="wrapper">
                {""}
                <ul className="dynamic-txts">
                  <li>
                    <span className="text-color-main">Developer.</span>
                  </li>
                </ul>
              </div>
            </h1>
            <p class="hero-cta load-hidden">
              <a rel="noreferrer" class="cta-btn cta-btn--hero" href="#about">
                Know more
              </a>
            </p>
          </div>
        </section>

        <section id="about">
          <div class="container">
            <h2 class="section-title load-hidden">About me</h2>
            <div class="row about-wrapper">
              <div class="col-md-6 col-sm-12">
                <div class="about-wrapper__image load-hidden">
                  <img
                    alt="Profile Image"
                    class="img-fluid rounded shadow-lg"
                    height="auto"
                    width="300px"
                    src={yo}
                    alt="Profile Image"
                  />
                </div>
              </div>
              <div class="col-md-6 col-sm-12">
                <div class="about-wrapper__info load-hidden">
                  <p class="about-wrapper__info-text">
                    This is where you can describe about yourself. The more you
                    describe about yourself, the more chances you can!
                  </p>
                  <p class="about-wrapper__info-text">
                    Extra Information about you! like hobbies and your goals.
                  </p>
                  <span class="d-flex mt-3">
                    <a
                      rel="noreferrer"
                      target="_blank"
                      class="cta-btn cta-btn--resume"
                      href="assets/resume.pdf"
                    >
                      View Resume
                    </a>
                  </span>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section id="projects">
          <div class="container">
            <div class="project-wrapper">
              <h2 class="section-title dark-blue-text">Projects</h2>

              <div class="row">
                <div class="col-lg-4 col-sm-12">
                  <div class="project-wrapper__text load-hidden">
                    <h3 class="project-wrapper__text-title">Project Title 0</h3>
                    <div>
                      <p class="mb-4">
                        Lorem ipsum dolor sit, amet consectetur adipisicing
                        elit. Excepturi neque, ipsa animi maiores repellendus
                        distinctio aperiam earum dolor voluptatum consequatur
                        blanditiis inventore debitis fuga numquam voluptate ex
                        architecto itaque molestiae.
                      </p>
                    </div>
                    <a
                      rel="noreferrer"
                      target="_blank"
                      class="cta-btn cta-btn--hero"
                      href="#!"
                    >
                      See Live
                    </a>
                    <a
                      rel="noreferrer"
                      target="_blank"
                      class="cta-btn text-color-main"
                      href="#!"
                    >
                      Source Code
                    </a>
                  </div>
                </div>
                <div class="col-lg-8 col-sm-12">
                  <div class="project-wrapper__image load-hidden">
                    <a rel="noreferrer" href="#!" target="_blank">
                      <div
                        data-tilt
                        data-tilt-max="4"
                        data-tilt-glare="true"
                        data-tilt-max-glare="0.5"
                        class="thumbnail rounded js-tilt"
                      >
                        <img
                          alt="Project Image"
                          class="img-fluid"
                          src="assets/project.jpg"
                        />
                      </div>
                    </a>
                  </div>
                </div>
              </div>

              <div class="row">
                <div class="col-lg-4 col-sm-12">
                  <div class="project-wrapper__text load-hidden">
                    <h3 class="project-wrapper__text-title">Project Title 1</h3>
                    <div>
                      <p class="mb-4">
                        Lorem ipsum dolor sit, amet consectetur adipisicing
                        elit. Excepturi neque, ipsa animi maiores repellendus
                        distinctio aperiam earum dolor voluptatum consequatur
                        blanditiis inventore debitis fuga numquam voluptate ex
                        architecto itaque molestiae.
                      </p>
                    </div>
                    <a
                      rel="noreferrer"
                      target="_blank"
                      class="cta-btn cta-btn--hero"
                      href="#!"
                    >
                      See Live
                    </a>
                    <a
                      rel="noreferrer"
                      target="_blank"
                      class="cta-btn text-color-main"
                      href="#!"
                    >
                      Source Code
                    </a>
                  </div>
                </div>
                <div class="col-lg-8 col-sm-12">
                  <div class="project-wrapper__image load-hidden">
                    <a rel="noreferrer" href="#!" target="_blank">
                      <div
                        data-tilt
                        data-tilt-max="4"
                        data-tilt-glare="true"
                        data-tilt-max-glare="0.5"
                        class="thumbnail rounded js-tilt"
                      >
                        <img
                          alt="Project Image"
                          class="img-fluid"
                          src={project}
                        />
                      </div>
                    </a>
                  </div>
                </div>
              </div>

              <div class="row">
                <div class="col-lg-4 col-sm-12">
                  <div class="project-wrapper__text load-hidden">
                    <h3 class="project-wrapper__text-title">Project Title 2</h3>
                    <div>
                      <p class="mb-4">
                        Lorem ipsum dolor sit, amet consectetur adipisicing
                        elit. Excepturi neque, ipsa animi maiores repellendus
                        distinctio aperiam earum dolor voluptatum consequatur
                        blanditiis inventore debitis fuga numquam voluptate ex
                        architecto itaque molestiae.
                      </p>
                    </div>
                    <a
                      rel="noreferrer"
                      target="_blank"
                      class="cta-btn cta-btn--hero"
                      href="#!"
                    >
                      See Live
                    </a>
                    <a
                      rel="noreferrer"
                      target="_blank"
                      class="cta-btn text-color-main"
                      href="#!"
                    >
                      Source Code
                    </a>
                  </div>
                </div>
                <div class="col-lg-8 col-sm-12">
                  <div class="project-wrapper__image load-hidden">
                    <a rel="noreferrer" href="#!" target="_blank">
                      <div
                        data-tilt
                        data-tilt-max="4"
                        data-tilt-glare="true"
                        data-tilt-max-glare="0.5"
                        class="thumbnail rounded js-tilt"
                      >
                        <img
                          alt="Project Image"
                          class="img-fluid"
                          src="assets/project.jpg"
                        />
                      </div>
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section id="contact">
          <div class="container">
            <h2 class="section-title">Contact</h2>
            <div class="contact-wrapper load-hidden">
              <p class="contact-wrapper__text">
                [Put your call to action here]
              </p>
              <a
                rel="noreferrer"
                target="_blank"
                class="cta-btn cta-btn--resume"
                href="mailto:molina.mauro.alexis@gmail.com"
              >
                Call to Action
              </a>
            </div>
            <br />
            <h2 class="section-title">Please scan me</h2>
            <div class="contact-wrapper load-hidden">
              <img src={qr} height="300px"></img>
            </div>
          </div>
        </section>

        <footer class="footer navbar-static-bottom">
          <div class="container">
            <a rel="noreferrer" href="#top" class="back-to-top">
              <i class="fa fa-angle-up fa-2x" aria-hidden="true"></i>
            </a>
            <div class="social-links">
              <a
                rel="noreferrer"
                href="https://twitter.com/MauroDeveloper"
                target="_blank"
              >
                <i class="fa fa-twitter fa-inverse"></i>
              </a>
              <a
                rel="noreferrer"
                href="https://www.linkedin.com/in/mauro-molina-36018a1b1/"
                target="_blank"
              >
                <i class="fa fa-linkedin fa-inverse"></i>
              </a>
              <a
                rel="noreferrer"
                href="https://github.com/mauro0599"
                target="_blank"
              >
                <i class="fa fa-github fa-inverse"></i>
              </a>
            </div>

            <hr />

            <p class="footer__text">
              © 2022 - Portfolio developed by
              <a
                rel="noreferrer"
                href="https://github.com/mauro0599"
                target="_blank"
              >
                &nbsp; Mauro Molina
              </a>
            </p>

            {/* <p class="mt-3 pt-3">
          <a
            rel="noreferrer"
            class="github-button"
            href="https://github.com/mauro0599/simplefolio/fork"
            data-icon="octicon-repo-forked"
            data-size="large"
            data-show-count="true"
            aria-label="Fork ntkme/github-buttons on GitHub"
            >Fork</a
          >
          <a
            rel="noreferrer"
            class="github-button"
            href="https://github.com/cobidev/simplefolio"
            data-icon="octicon-star"
            data-size="large"
            data-show-count="true"
            aria-label="Star cobidev/simplefolio on GitHub"
            >Star</a
          >
        </p>  */}
          </div>
        </footer>

        <script defer type="module" src="index.js"></script>
      </body>
    </div>
  );
}

export default App;
