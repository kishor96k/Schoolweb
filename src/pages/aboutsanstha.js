import React from 'react';

function AboutSanstha() {
  return (
    <div>
      {/* Header Section */}
      <section className="py-5  text-center  border-secondary mb-3">
        <div className="container">
          <h1 className="mb-3">About Our Sanstha</h1>
          <p className="lead">Empowering education through values, vision, and community leadership.</p>
        </div>
      </section>

      {/* Founder Section */}
      <section className="py-5 bg-white border border-1 border-secondary mb-3">
        <div className="container">
          <div className="row align-items-center">
            {/* Image */}
            <div className="col-md-5 mb-4 mb-md-0">
              <img
                src="/images/founder.jpg" // Replace with actual image path
                alt="Founder"
                className="img-fluid rounded shadow"
              />
            </div>
            {/* Text */}
            <div className="col-md-7">
              <h4>Our Founder’s Vision</h4>
              <p>
                The Sanstha was established with the mission to promote education and values in rural and urban regions.
                Our founder, Shri XYZ, believed in equal opportunity for all, especially in the field of education.
              </p>
              <p>
                Under his leadership, the Sanstha grew from a humble beginning to a network of schools and colleges
                known for excellence, discipline, and social responsibility.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Mission & Values */}
      <section className="py-5 bg-light border border-1 border-secondary mb-3">
        <div className="container">
          <div className="row text-center">
            <div className="col-md-4 mb-4">
              <div className="border p-4 rounded shadow-sm">
                <h5>Educational Mission</h5>
                <p>To provide affordable, value-based education to all sections of society.</p>
              </div>
            </div>
            <div className="col-md-4 mb-4">
              <div className="border p-4 rounded shadow-sm">
                <h5>Our Values</h5>
                <p>Discipline, Integrity, Empathy, and Commitment to Community Development.</p>
              </div>
            </div>
            <div className="col-md-4 mb-4">
              <div className="border p-4 rounded shadow-sm">
                <h5>Social Responsibility</h5>
                <p>We strive to contribute to the upliftment of society through education and empowerment.</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Institutions Under Sanstha */}
      <section className="py-5 bg-white border border-1 border-secondary">
        <div className="container">
          <h3 className="text-center mb-4">Institutions Under Our Sanstha</h3>
          <ul className="list-group list-group-flush">
            <li className="list-group-item">दमाणी विद्या मंदिर, सोलापूर</li>
            <li className="list-group-item">XYZ Jr. College of Arts, Commerce & Science</li>
            <li className="list-group-item">ABC Polytechnic Institute</li>
            <li className="list-group-item">DEF English Medium School</li>
            <li className="list-group-item">Various Primary Schools in Rural Areas</li>
          </ul>
        </div>
      </section>
    </div>
  );
}

export default AboutSanstha;
