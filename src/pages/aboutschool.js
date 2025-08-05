import React from 'react';

function AboutSchool() {
  return (
    <div>
      {/* Header Section */}
      <section className="py-5 bg-light text-center  border-secondary mb-3">
        <div className="container">
          <h1 className="mb-3">About Our School</h1>
          <p className="lead">Building a brighter future through quality education and values.</p>
        </div>
      </section>

      {/* Mission & Vision */}
      <section className="py-5 bg-white border border-1 border-secondary mb-3">
        <div className="container">
          <div className="row">
            {/* Mission */}
            <div className="col-md-6 mb-4">
              <div className="card h-100 shadow-sm border">
                <div className="card-body">
                  <h4 className="card-title">Our Mission</h4>
                  <p className="card-text">
                    To nurture students with knowledge, discipline, creativity, and moral values to face the real-world challenges and become responsible citizens.
                  </p>
                </div>
              </div>
            </div>

            {/* Vision */}
            <div className="col-md-6 mb-4">
              <div className="card h-100 shadow-sm border">
                <div className="card-body">
                  <h4 className="card-title">Our Vision</h4>
                  <p className="card-text">
                    To be a leading educational institution empowering students to excel in academics and life with dignity, confidence, and integrity.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Core Values */}
      <section className="py-5 bg-light border border-1 border-secondary mb-3">
        <div className="container">
          <h3 className="text-center mb-4">Core Values</h3>
          <div className="row text-center">
            <div className="col-md-3 mb-3">
              <div className="p-3 border rounded shadow-sm">Integrity</div>
            </div>
            <div className="col-md-3 mb-3">
              <div className="p-3 border rounded shadow-sm">Discipline</div>
            </div>
            <div className="col-md-3 mb-3">
              <div className="p-3 border rounded shadow-sm">Excellence</div>
            </div>
            <div className="col-md-3 mb-3">
              <div className="p-3 border rounded shadow-sm">Empathy</div>
            </div>
          </div>
        </div>
      </section>

      {/* School Infrastructure */}
      <section className="py-5 bg-white border border-1 border-secondary mb-3">
        <div className="container">
          <div className="row align-items-center">
            <div className="col-md-6 mb-4 mb-md-0">
              <img
                src="/images/school-building.jpg" // Use actual path or import image
                alt="School Building"
                className="img-fluid rounded shadow"
              />
            </div>
            <div className="col-md-6">
              <h4>Modern Infrastructure</h4>
              <p>
                Our campus is equipped with smart classrooms, computer labs, science labs, library, sports ground, and hygienic environment to promote holistic learning.
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

export default AboutSchool;
