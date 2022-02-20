export default function TopBanner() {
  return (
    <section className="main-banner container-fluid" id="home">
      <div className="row">
        <div className="main-banner__presentation col-12">
          <div className="main-banner__logo"></div>
          <h1>Webutvikler</h1>
          <h2>Asbj&oslash;rn Kallevik</h2>
          <p className="main-banner__text">
            Webutvikler på Haugalandet med fokus på brukervennlige og responsive
            nettsider. Jobber til daglig i Appex.
          </p>
          {/* <!-- CTA button --> */}
          <div className="main-banner__button-wrapper">
            <a
              href="#selected-projects"
              className="main-banner__button btn btn-primary"
              role="link"
            >
              Se mitt arbeid
              <span id="bg1"></span>
              <span id="bg2"></span>
              <span id="bg3"></span>
              <span id="bg4"></span>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
