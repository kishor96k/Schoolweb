import React from 'react';

// Sample image imports – replace with your actual images or URLs
import img1 from '../assets/gallery/image1.jpg';
import img2 from '../assets/gallery/image2.jpg';
import img3 from '../assets/gallery/image3.jpg';
import img4 from '../assets/gallery/image4.jpg';
import img5 from '../assets/gallery/image5.jpg';
import img6 from '../assets/gallery/image6.jpg';

function Gallery() {
  const images = [img1, img2, img3, img4, img5, img6];

  return (
    <div>
      {/* Header */}
      <section className="py-5 text-center border-secondary mb-3">
        <div className="container">
          <h1 className="mb-3">Gallery</h1>
          <p className="lead">Glimpses of events, campus life, and memories captured at our institution.</p>
        </div>
      </section>

      {/* Gallery Grid */}
      <section className="py-5 mb-4 bg-white border border-1 border-secondary">
        <div className="container">
          <div className="row">
            {images.map((image, index) => (
              <div className="col-sm-6 col-md-4 mb-4" key={index}>
                <div className="border rounded shadow-sm overflow-hidden">
                  <img
                    src={image}
                    alt={`Gallery ${index + 1}`}
                    className="img-fluid w-100 h-100"
                  />
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}

export default Gallery;
