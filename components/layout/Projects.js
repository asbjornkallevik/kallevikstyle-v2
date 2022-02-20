import Image from "next/image";
import thronewars from "../../public/images/projects/throne-wars.jpg";
import spacex from "../../public/images/projects/spacex-microsite.jpg";
import csm from "../../public/images/projects/csm.jpg";
import letha from "../../public/images/projects/letha.jpg";

export default function Projects() {
  return (
    <section className="projects">
      <div className="container ">
        <div className="row">
          <h2 className="projects__header" id="selected-projects">
            Utvalgte prosjekter
          </h2>
          {/* <!-- Project cards --> */}
          {/* <!-- Throne Wars --> */}
          <div className="col-12 col-md-4 col-lg-3">
            <div className="card projects__card">
              <div className="card-img-top">
                <Image
                  src={thronewars}
                  layout="fill"
                  objectFit="cover"
                  objectPosition={"left"}
                  alt="Throne Wars board game"
                />
              </div>

              <div className="card-body">
                <h4 className="card-title">Throne Wars</h4>
                <p className="card-text">
                  Semesteroppgave hvor objektivet var å lage et interaktivt
                  brettspill basert på TV-serien Game of Thrones. Idé og konsept
                  er utviklet helt fra bunn av. Denne siden er ment for større
                  skjermer og er ikke mobil responsiv.
                </p>

                <a
                  href="http://kallevikstyle.no/throne-wars/"
                  type="button"
                  className="projects__button btn btn-primary"
                >
                  Se nettsiden
                </a>
                <a
                  href="https://github.com/kallevikstyle/semester-project-2"
                  className="projects__button btn btn-secondary"
                >
                  Se på GitHub
                </a>
              </div>
            </div>
          </div>
          {/* <!-- Spacex Microsite --> */}
          <div className="col-12 col-md-4 col-lg-3">
            <div className="card projects__card">
              <div className="card-img-top">
                <Image
                  src={spacex}
                  layout="fill"
                  objectFit="cover"
                  objectPosition={"center"}
                  alt="Spacex Microsite"
                />
              </div>
              <div className="card-body">
                <h4 className="card-title">Spacex Mikroside</h4>
                <p className="card-text">
                  Eksamensoppgave innlevert til Noroff Fagskole. Oppgaven var å
                  lage en mikroside for Spacex, som laster inn data om romfartøy
                  og oppskytninger fra Spacex API.
                </p>

                <a
                  href="http://kallevikstyle.no/project-exam-1/"
                  type="button"
                  className="projects__button btn btn-primary"
                >
                  Se nettsiden
                </a>
                <a
                  href="https://github.com/kallevikstyle/project-exam-1"
                  className="projects__button btn btn-secondary"
                >
                  Se på GitHub
                </a>
              </div>
            </div>
          </div>
          {/* <!-- Community Science Museum --> */}
          <div className="col-12 col-md-4 col-lg-3">
            <div className="card projects__card">
              <div className="card-img-top">
                <Image
                  src={csm}
                  layout="fill"
                  objectFit="cover"
                  objectPosition={"center"}
                  alt="Community Science Museum"
                />
              </div>
              <div className="card-body">
                <h4 className="card-title">Community Science Museum</h4>
                <p className="card-text">
                  Denne oppgaven var hovedsakelig rettet mot HTML og CSS, og
                  målet var å lage en nettside for et fiktivt vitenskapsmuseum
                  for barn og voksne.
                </p>

                <a
                  href="http://kallevikstyle.no/portfolio1/community-science-museum/"
                  type="button"
                  className="projects__button btn btn-primary"
                >
                  Se nettsiden
                </a>
                <a
                  href="https://github.com/kallevikstyle/community-science-museum_v2"
                  className="projects__button btn btn-secondary"
                >
                  Se på GitHub
                </a>
              </div>
            </div>
          </div>
          {/* <!-- Letha --> */}
          <div className="col-12 col-md-4 col-lg-3">
            <div className="card projects__card">
              <div className="card-img-top">
                <Image
                  src={letha}
                  layout="fill"
                  objectFit="cover"
                  objectPosition={"center"}
                  alt="Letha shoe company"
                />
              </div>
              <div className="card-body">
                <h4 className="card-title">Letha</h4>
                <p className="card-text">
                  Skoleoppgave hvor obkejtivet var å lage en nettside for en
                  fiktiv skobutikk for menn på nett. Hovedvekten på denne
                  oppgaven var brukerannalyse og UX design.
                </p>

                <a
                  href="http://kallevikstyle.no/portfolio1/letha/"
                  type="button"
                  className="projects__button btn btn-primary"
                >
                  Se nettsiden
                </a>
                <a
                  href="https://github.com/kallevikstyle/letha_v2"
                  className="projects__button btn btn-secondary"
                >
                  Se på GitHub
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
