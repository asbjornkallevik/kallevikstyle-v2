export default function Contact() {
  return (
    <section className="contact">
      <div className="container">
        <div className="row">
          <h2 id="contact">Kontakt meg</h2>

          <div className="contact__form col-12 col-md-6">
            <form>
              <label className="visually-hidden sr-only" htmlFor="name">
                Name
              </label>
              <input
                type="text"
                className="form-control mb-4 mt-4 mr-sm-2"
                id="name"
                placeholder="Ditt navn"
                required
              />
              <label className="visually-hidden sr-only" htmlFor="email">
                E-post
              </label>
              <input
                type="email"
                className="form-control mb-4 mr-sm-2"
                id="email"
                placeholder="Din e-postadresse"
                required
              />
              <label className="visually-hidden sr-only" htmlFor="message">
                Melding
              </label>
              <textarea
                className="form-control mb-4 mr-sm-2"
                id="message"
                placeholder="Din melding"
                rows="3"
                required
              ></textarea>

              <button
                type="submit"
                className="contact__button btn btn-primary mb-2"
              >
                Send melding
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}
