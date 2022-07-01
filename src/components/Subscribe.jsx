export default function Subscribe() {
  return (
    <section>
      <div className="container">
        <div className="subscriber">
          <div className="row subscribe-row">
            <div className="col-6">
              <div className="subscriber-txt">
                <h3>Get Great News from Us</h3>
                <p>We value privacy and never spam you!</p>
              </div>
            </div>
            <div className="col-6">
              <div className="subscribe-form">
                <input
                  type="text"
                  className="form-control subscribe-input"
                  placeholder="E.g sheryar@gmail.com"
                />
                <button>Subscribe</button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
