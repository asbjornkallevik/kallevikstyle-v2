export default function AboutMe() {
  return (
    <section className="about container">
      <div className="row">
        <div className="about__me col-lg-4">
          <h2 id="about">Om meg</h2>
          <div className="card">
            <div className="card-body">
              <h3 className="card-title">Asbj&oslash;rn Kallevik</h3>
              <h4>
                Frontend webutvikler, <br />
                Karm&oslash;y
              </h4>

              <p className="card-text">
                Webutvikler i Appex – Haugesund. Jeg er punktlig, pålitelig og
                strukturert, og er opptatt av universell utforming av nettsider
                og applikasjoner med brukeren i fokus.
              </p>
            </div>
          </div>
        </div>
        <div className="col-lg-4">
          <div className="about__image"></div>
        </div>
        <div className="about__skills col-lg-4">
          <h2>Ferdigheter</h2>
          <div className="about__progress-bars container-fluid">
            {/* <!-- Skills progress bars --> */}
            <div className="about__skills-progress row">
              <div className="col-6">
                <h3>HTML/CSS</h3>
              </div>
              <div className="col-6">
                <div className="progress">
                  <div
                    className="progress-bar"
                    role="progressbar"
                    style={{ width: "90%" }}
                    aria-valuenow="41"
                    aria-valuemin="0"
                    aria-valuemax="100"
                  ></div>
                </div>
              </div>
            </div>
            <div className="about__skills-progress row">
              <div className="col-6">
                <h3>Javascript</h3>
              </div>
              <div className="col-6">
                <div className="progress">
                  <div
                    className="progress-bar"
                    role="progressbar"
                    style={{ width: "80%" }}
                    aria-valuenow="41"
                    aria-valuemin="0"
                    aria-valuemax="100"
                  ></div>
                </div>
              </div>
            </div>
            <div className="about__skills-progress row">
              <div className="col-6">
                <h3>Illustrator</h3>
              </div>
              <div className="col-6">
                <div className="progress">
                  <div
                    className="progress-bar"
                    role="progressbar"
                    style={{ width: "85%" }}
                    aria-valuenow="41"
                    aria-valuemin="0"
                    aria-valuemax="100"
                  ></div>
                </div>
              </div>
            </div>
            <div className="about__skills-progress row">
              <div className="col-6">
                <h3>Photoshop</h3>
              </div>
              <div className="col-6">
                <div className="progress">
                  <div
                    className="progress-bar"
                    role="progressbar"
                    style={{ width: "75%" }}
                    aria-valuenow="41"
                    aria-valuemin="0"
                    aria-valuemax="100"
                  ></div>
                </div>
              </div>
            </div>
            <div className="about__skills-progress row">
              <div className="col-6">
                <h3>UX Design</h3>
              </div>
              <div className="col-6">
                <div className="progress">
                  <div
                    className="progress-bar"
                    role="progressbar"
                    style={{ width: "85%" }}
                    aria-valuenow="41"
                    aria-valuemin="0"
                    aria-valuemax="100"
                  ></div>
                </div>
              </div>
            </div>
            <div className="about__skills-progress row">
              <div className="col-6">
                <h3>Node.js</h3>
              </div>
              <div className="col-6">
                <div className="progress">
                  <div
                    className="progress-bar"
                    role="progressbar"
                    style={{ width: "40%" }}
                    aria-valuenow="41"
                    aria-valuemin="0"
                    aria-valuemax="100"
                  ></div>
                </div>
              </div>
            </div>
            <div className="about__skills-progress row">
              <div className="col-6">
                <h3>Typescript</h3>
              </div>
              <div className="col-6">
                <div className="progress">
                  <div
                    className="progress-bar"
                    role="progressbar"
                    style={{ width: "60%" }}
                    aria-valuenow="41"
                    aria-valuemin="0"
                    aria-valuemax="100"
                  ></div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
