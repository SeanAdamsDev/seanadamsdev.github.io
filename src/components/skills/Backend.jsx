import React from "react";

const Backend = () => {
  return (
    <div className="skills__content">
      <h3 className="skills__title">Backend</h3>

      <div className="skills__box">
        <div className="skills__group">
          <div className="skills__data">
            <i class="uil uil-monitor"></i>

            <div>
              <h3 className="skills__name">NextJS</h3>
              <span className="skills__level">Intermediate</span>
            </div>
          </div>

          <div className="skills__data">
            <i class="uil uil-text-fields"></i>

            <div>
              <h3 className="skills__name">Typescript</h3>
              <span className="skills__level">Basic</span>
            </div>
          </div>

          <div className="skills__data">
            <i class="uil uil-database"></i>

            <div>
              <h3 className="skills__name">Prisma</h3>
              <span className="skills__level">Basic</span>
            </div>
          </div>
        </div>

        <div className="skills__group">
          {/* <div className="skills__data">
            <i class="bx bx-badge-check"></i>

            <div>
              <h3 className="skills__name">Prisma</h3>
              <span className="skills__level">Basic</span>
            </div>
          </div> */}

          <div className="skills__data">
            <i class="uil uil-align"></i>

            <div>
              <h3 className="skills__name">PHP</h3>
              <span className="skills__level">Basic</span>
            </div>
          </div>

          <div className="skills__data">
            <i class="uil uil-server"></i>

            <div>
              <h3 className="skills__name">Laravel</h3>
              <span className="skills__level">Basic</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Backend;
