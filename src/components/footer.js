import React from 'react';

function Footer() {
  return (
    <footer className="bg-dark text-light py-5">
      <div className="container">
        <div className="row g-4">
          {/* Section 1 */}
          <div className="col-md-4">
            <h5 className="mb-3">महत्त्वाचे लिंक</h5>
            <ul className="list-unstyled">
              <li><a href="#" className="text-warning text-decoration-none">प्रवेश सूचना</a></li>
              <li><a href="#" className="text-warning text-decoration-none">प्राथमिक विभाग</a></li>
              <li><a href="#" className="text-warning text-decoration-none">माध्यमिक विभाग</a></li>
              <li><a href="#" className="text-warning text-decoration-none">माजी विद्यार्थी नोंदणी</a></li>
            </ul>
          </div>

          {/* Section 2 */}
          <div className="col-md-4">
            <h5 className="mb-3">आमच्या बद्दल..</h5>
            <p className="small">
              दमाणी विद्या मंदिर ही सोलापूरातील शिक्षण क्षेत्रातील अग्रगण्य शैक्षणिक संस्था आहे.
              आम्ही एक उत्कृष्ट पूर्व-प्राथमिक, प्राथमिक आणि माध्यमिक शिक्षण प्रदान करतो
              आणि गेल्या २५ वर्षांपासून कार्यरत आहोत. विद्यार्थ्यांच्या बहुआयामी विकासासाठी कार्यरत तत्पर.
            </p>
          </div>

          {/* Section 3 */}
          <div className="col-md-4">
            <h5 className="mb-3">आमचे ध्येय</h5>
            <p className="small">
              बुद्धीला सद्गतीकडे, भावनेला मानवताकडे आणि धरीराला श्रमाकडे नेण्याचा मार्ग म्हणजे शिक्षण.
              या शैक्षणिक राजात दमाणी विद्या मंदिर कडून, सर्व शिक्षकवृंद आणि शैक्षणिक समिती कायम प्रयत्नशील राहील.
            </p>
          </div>
        </div>

        {/* Bottom Bar */}
        <hr className="border-light my-4" />
        <div className="text-center small">
          <p className="mb-0">
            © 2018 दमाणी विद्या मंदिर, सोलापूर (महाराष्ट्र). वेबसाईट रचनाकार <a href="#" style={{ textDecoration: 'none' }} className="text-warning">कैपवेअर सिस्टिम्स
            </a>
          </p>
          <p className="mb-0">
            <a href="#" className="text-light text-decoration-none mx-1">Privacy Policy</a>|
            <a href="#" className="text-light text-decoration-none mx-1">Refund Policy</a>|
            <a href="#" className="text-light text-decoration-none mx-1">Terms of Service</a>
          </p>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
