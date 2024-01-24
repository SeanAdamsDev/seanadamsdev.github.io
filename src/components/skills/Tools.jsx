import React from "react";

const Tools = () => {
  return (
    <div className="skills__content">
      <h3 className="skills__title">Tools</h3>

      <div className="skills__box">
        <div className="skills__group">
          <div className="skills__data">
            <i class="uil uil-github"></i>

            <div>
              <h3 className="skills__name">Github</h3>
              <span className="skills__level">Intermediate</span>
            </div>
          </div>

          <div className="skills__data">
            <i class="uil uil-vuejs"></i>

            <div>
              <h3 className="skills__name">Vercel</h3>
              <span className="skills__level">Intermediate</span>
            </div>
          </div>

          <div className="skills__data">
            <i class="uil uil-web-section"></i>

            <div>
              <h3 className="skills__name">ShadcnUI</h3>
              <span className="skills__level">Intermediate</span>
            </div>
          </div>
        </div>

        <div className="skills__group">
          <div className="skills__data">
            <i class="uil uil-spin"></i>

            <div>
              <h3 className="skills__name">Stripe</h3>
              <span className="skills__level">Intermediate</span>
            </div>
          </div>

          <div className="skills__data">
            <i class="uil uil-wordpress"></i>

            <div>
              <h3 className="skills__name">WordPress</h3>
              <span className="skills__level">Intermediate</span>
            </div>
          </div>

          <div className="skills__data">
            <i class="uil uil-fast-mail"></i>

            <div>
              <h3 className="skills__name">Postman</h3>
              <span className="skills__level">Intermediate</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Tools;
