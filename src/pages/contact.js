import React from 'react';

function Contact() {
  return (
    <div>

      {/* Header Section */}
      <section className="py-5  text-center border-secondary mb-3">
        <div className="container">
          <h1 className="mb-3">Contact Us</h1>
          <p className="lead">We’d love to hear from you! Reach out via form, email, or visit our campus.</p>
        </div>
      </section>

      {/* Contact Form and Info */}
      <section className="py-5 bg-white border border-1 border-secondary mb-3">
        <div className="container">
          <div className="row">

            {/* Contact Form */}
            <div className="col-md-6 mb-4">
              <h4 className="mb-4">Send a Message</h4>
              <form>
                <div className="mb-3">
                  <label className="form-label">Your Name</label>
                  <input type="text" className="form-control" placeholder="Enter your name" />
                </div>
                <div className="mb-3">
                  <label className="form-label">Email Address</label>
                  <input type="email" className="form-control" placeholder="Enter your email" />
                </div>
                <div className="mb-3">
                  <label className="form-label">Message</label>
                  <textarea className="form-control" rows="4" placeholder="Write your message"></textarea>
                </div>
                <button type="submit" className="btn btn-primary">Submit</button>
              </form>
            </div>

            {/* Contact Info */}
            <div className="col-md-6">
              <h4 className="mb-4">Reach Us At</h4>
              <p><strong>Address:</strong> दमाणी विद्या मंदिर, Near XYZ Chowk, Solapur – 413001</p>
              <p><strong>Phone:</strong> 01234-567890</p>
              <p><strong>Email:</strong> info@dvmcollege.edu.in</p>
              <p><strong>Office Hours:</strong> Mon - Sat: 9:00 AM – 5:30 PM</p>
            </div>

          </div>
        </div>
      </section>

      {/* Google Map */}
      <section className="py-4 mb-4 bg-light border border-1 border-secondary">
        <div className="container">
          <h4 className="text-center mb-4">Find Us on Google Maps</h4>
          <div className="ratio ratio-16x9">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3801.2031464512675!2d75.90653807468946!3d17.687860994080587!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bc5da852e1520a9%3A0x9fa20940df52c378!2sMantri%20Chandak%20Nagar%2C%20Bhavani%20Peth%2C%20Solapur%2C%20Maharashtra%20413002!5e0!3m2!1sen!2sin!4v1754377647096!5m2!1sen!2sin"
              style={{ border: 0 }}
              allowFullScreen
              loading="lazy"
              title="College Location"
              referrerPolicy="no-referrer-when-downgrade"
            ></iframe>
          </div>
        </div>
      </section>
    </div>
  );
}

export default Contact;
