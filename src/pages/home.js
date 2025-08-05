import React from 'react';
import schoolImage from '../assets/images/schoolone.jpg';
import schooltwoImg from '../assets/images/schtwo.jpg';
import schThree from '../assets/images/schthree.jpg';
import cardone from '../assets/images/cardone.jpg';
import cardtwo from '../assets/images/cardtwo.jpg';
import cardthree from '../assets/images/cardthree.jpg';

function Home() {
  return (
    <div>

      {/* Welcome Section */}
      <section className="py-5 text-center">
        <div className="container">
          <h2 className="mb-3">Welcome to Our School</h2>
          <p className="lead">This is the official website of our school. Explore to know more about us.</p>
        </div>
      </section>
      {/* Section 1: Cards */}
      <section className="py-5">
        <div className="container">
          <h2 className="text-center mb-5">Our Highlights</h2>
          <div className="row">

            {/* Card 1 */}
            <div className="col-md-4 mb-4">
              <div className="card h-100 shadow-sm">
                <img
                  src={cardone}
                  className="card-img-top"
                  alt="Academic Excellence"
                />
                <div className="card-body text-center">
                  <h5 className="card-title">Academic Excellence</h5>
                  <p className="card-text">
                    High-quality education with experienced faculty and modern teaching methods.
                  </p>
                </div>
              </div>
            </div>

            {/* Card 2 */}
            <div className="col-md-4 mb-4">
              <div className="card h-100 shadow-sm">
                <img
                  src={cardtwo}
                  className="card-img-top"
                  alt="Co-Curricular Activities"
                />
                <div className="card-body text-center">
                  <h5 className="card-title">Co-Curricular Activities</h5>
                  <p className="card-text">
                    We encourage sports, arts, and cultural activities for overall development.
                  </p>
                </div>
              </div>
            </div>

            {/* Card 3 */}
            <div className="col-md-4 mb-4">
              <div className="card h-100 shadow-sm">
                <img
                  src={cardthree}
                  className="card-img-top"
                  alt="Alumni Support"
                />
                <div className="card-body text-center">
                  <h5 className="card-title">Alumni Support</h5>
                  <p className="card-text">
                    Our alumni network actively mentors current students for growth and success.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ending one */}

      <section className="py-5">
        <div className="container">
          <div className="row g-4">

            {/* Card 1 */}
            <div className="col-md-4">
              <div className="p-4 h-100 text-white rounded" style={{ backgroundColor: '#2e5f68' }}>
                <h4 className="mb-3">काही ठळक वैशिष्ट्ये..!</h4>
                <p>
                  आमच्या शिक्षण प्रांगणात घडणाऱ्या प्रत्येक विद्यार्थ्याचे मानसिक, भावनिक, सामाजिक
                  आणि आध्यात्मिकदृष्ट्या दृढपणे विकास करणे, हे आमचे प्रमुख ध्येय. आम्ही उत्कृष्ट पूर्व-प्राथमिक,
                  प्राथमिक आणि माध्यमिक शिक्षण प्रदान करतो आणि गेल्या 73 वर्षांहून शिक्षण क्षेत्रात कार्यरत आहोत.
                </p>
                <ul className="list-unstyled">
                  <li>✔️ निपुण शिक्षकवृंद</li>
                  <li>✔️ सर्व सुविधा युक्त प्रांगण</li>
                  <li>✔️ ज्ञानरंजनवादी शिक्षण</li>
                </ul>
                <button className="btn btn-light mt-3">
                  ⊞ अधिक जाणून घ्या
                </button>
              </div>
            </div>

            {/* Card 2 */}
            <div className="col-md-4">
              <div className="p-4 h-100 text-white rounded" style={{ backgroundColor: '#7d6e57' }}>
                <h4 className="mb-3">आमचा विश्वास</h4>
                <img
                  src={schooltwoImg}
                  alt="Students"
                  className="img-fluid mb-3 rounded shadow"
                />
                <p>
                  विद्यार्थ्यांना फक्त फक्त शैक्षणिक उत्कृष्टता नव्हे तर व्यवहार ज्ञानाची पुंजी देण्याचा आमचा
                  प्रयत्न असतो. जेणेकरून शाळेतील अनुभवाची शिदोरी त्यांना जबाबदार आणि कर्तृत्ववान नागरिक बनवू शकेल.
                </p>
                <p>
                  तसेच विविध खेळ, कौशल्य शिबीर, समाजसेवा आणि विविध प्रदर्शन यांचे आम्ही वेळोवेळी आयोजन करीत असतो.
                </p>
              </div>
            </div>

            {/* Card 3 */}
            <div className="col-md-4">
              <div
                className="p-2 h-100 text-white d-flex flex-column justify-content-center align-items-center rounded"
                style={{ backgroundColor: '#b94646' }}
              >
                <h4 className="mb-3">विद्यार्थी केंद्रित</h4>
                <img
                  src={schThree}
                  alt="Students Icon"
                  className="img-fluid"
                />
              </div>
            </div>

          </div>
        </div>
      </section>


      {/* ending two */}
      <section className="py-5 bg-light text-center">
        <div className="container">
          <h2 className="mb-4">
            आमची शाळा आपल्या पाल्यासाठी{' '}
            <span className="badge bg-warning text-dark fs-5">सर्वोत्कृष्ट पर्याय</span>
          </h2>

          <div className="row gy-5">
            {/* Card 1 */}
            <div className="col-md-4">
              <div className="d-flex flex-column align-items-center">
                <img
                  src="https://cdn-icons-png.flaticon.com/128/3135/3135715.png"
                  alt="अध्यापन"
                  className="mb-3"
                  style={{ width: '80px', height: '80px' }}
                />
                <h5>अध्यापन</h5>
                <p className="text-muted">
                  उत्कृष्ट आणि वेळोवेळी पाठ्यक्रम वृद्धिंगत केलेली आमची अध्यापन कौशल्ये आपल्या पाल्यासाठी नक्कीच
                  फायदेशीर ठरेल.
                </p>
              </div>
            </div>

            {/* Card 2 */}
            <div className="col-md-4">
              <div className="d-flex flex-column align-items-center">
                <img
                  src="https://cdn-icons-png.flaticon.com/128/3082/3082039.png"
                  alt="नाट्यमय उपक्रम"
                  className="mb-3"
                  style={{ width: '80px', height: '80px' }}
                />
                <h5>नाट्यमय उपक्रम</h5>
                <p className="text-muted">
                  विद्यार्थ्यांना बहुआयामी बनवण्यासाठी त्यांच्या अंगभूत कला-कौशल्याचा विकास करण्यात आम्ही नेहमी
                  उपक्रमशील.
                </p>
              </div>
            </div>

            {/* Card 3 */}
            <div className="col-md-4">
              <div className="d-flex flex-column align-items-center">
                <img
                  src="https://cdn-icons-png.flaticon.com/128/744/744465.png"
                  alt="मनोरंजन"
                  className="mb-3"
                  style={{ width: '80px', height: '80px' }}
                />
                <h5>मनोरंजन</h5>
                <p className="text-muted">
                  विद्यार्थ्यांची शिक्षणाची ओढ वृद्धिंगत करण्यासाठी दैनंदिन शैक्षणिक उपक्रमात मनोरंजनात्मक शिक्षणाची
                  देखील प्रयत्नशिलता असेल.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>


      {/* ending three */}
      <section className="py-5 bg-white border border-secondary rounded">
        <div className="container">
          <div className="row align-items-center">

            {/* Image Column */}
            <div className="col-md-6 mb-4 mb-md-0">
              <img
                src={schoolImage}
                alt="School event"
                className="img-fluid rounded shadow"
              />
            </div>

            {/* Text Content Column */}
            <div className="col-md-6 text-center text-md-start">
              <h3 className="mb-3">शिक्षण येथे देवत</h3>
              <p>
                दमाणी विद्या मंदिर, येथे विद्यार्थ्यांना वास्तविक जीवनातील
                प्रतिस्पर्धी ओळखून कठीण देण्याचा प्रयत्न केला जातो..! आपल्या पालकांचा
                सर्वांगीण विकास करणे, हाच आमच्या शैक्षणिक संकुलाची पुंजी आहे.
              </p>
              <p>
                मुलांच्या आवडींनुसार त्यांना त्या दृष्टीनं विविध साधन, खेळ आणि
                साहित्य उपलब्ध करून दिली जातात. विद्यार्थ्यांच्या इतर कलागुणांना
                न्याय देण्यासाठी त्या-त्या विषयाच्या तज्ञ शिक्षकांची नियुक्ती केली
                जाते. जेणेकरून त्यांचे आजचे कौशल्य उद्याचा जीवनाचा शिदोरी बनू शकेल.
              </p>

              {/* Social Icons */}
              <div className="mt-4 d-flex justify-content-center justify-content-md-start gap-3">
                <a href="https://facebook.com" target="_blank" rel="noopener noreferrer" className="btn btn-outline-dark">
                  <i className="bi bi-facebook"></i> Facebook
                </a>
                <a href="https://youtube.com" target="_blank" rel="noopener noreferrer" className="btn btn-outline-dark">
                  <i className="bi bi-youtube"></i> YouTube
                </a>
              </div>
            </div>

          </div>
        </div>
      </section>


      <section className="py-5  text-success mb-4">
        <div className="container">
          <div className="row align-items-center">

            {/* Google Map */}
            <div className="col-md-6 mb-4 mb-md-0">
              <div className="ratio ratio-4x3">
                <iframe
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3801.2031464512675!2d75.90653807468946!3d17.687860994080587!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bc5da852e1520a9%3A0x9fa20940df52c378!2sMantri%20Chandak%20Nagar%2C%20Bhavani%20Peth%2C%20Solapur%2C%20Maharashtra%20413002!5e0!3m2!1sen!2sin!4v1754377647096!5m2!1sen!2sin"
                  style={{ border: 0 }}
                  allowFullScreen
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                  title="College Location"
                ></iframe>
              </div>
            </div>

            {/* Address + Extra Info */}
            <div className="col-md-6 text-center text-md-start">
              <h2 className="mb-3">College Address</h2>
              <p className="mb-1">दमाणी विद्या मंदिर, सोलापूर (महाराष्ट्र)</p>
              <p className="mb-1">Near XYZ Chowk, Solapur – 413001</p>
              <p className="mb-1">Phone: 01234-567890</p>
              <p className="mb-3">Email: info@dvmcollege.edu.in</p>

              <div className="bg-white text-dark p-3 rounded shadow-sm">
                <h5>Office Hours</h5>
                <p className="mb-1">Mon - Sat: 9:00 AM to 5:30 PM</p>
                <p>Sunday: Closed</p>
              </div>
            </div>

          </div>
        </div>
      </section>
    </div>
  );
}

export default Home;
