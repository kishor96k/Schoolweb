import React from 'react';

function AboutBoardMembers() {
  const members = [
    {
      name: 'Shri Ramchandra Patil',
      position: 'President',
      bio: 'Visionary leader and founder of the Sanstha, dedicated to educational and social upliftment.',
      image: '/images/members/president.jpg', // Replace with actual path
    },
    {
      name: 'Smt. Asha Deshmukh',
      position: 'Vice President',
      bio: 'Working actively for women empowerment and quality education in rural areas.',
      image: '/images/members/vice-president.jpg',
    },
    {
      name: 'Prof. Vijay Kulkarni',
      position: 'Secretary',
      bio: 'Academic expert ensuring smooth governance and academic quality across institutions.',
      image: '/images/members/secretary.jpg',
    },
    {
      name: 'Shri Sanjay Pawar',
      position: 'Treasurer',
      bio: 'Manages the financial stability of the Sanstha with transparency and accountability.',
      image: '/images/members/treasurer.jpg',
    },
  ];

  return (
    <div>
      {/* Header */}
      <section className="py-5 text-center  border-secondary">
        <div className="container">
          <h1 className="mb-3">About Our Board Members</h1>
          <p className="lead">Meet the leadership team guiding our Sanstha’s educational journey.</p>
        </div>
      </section>

      {/* Members Section */}
      <section className="py-5 bg-white border border-1 border-secondary">
        <div className="container">
          <div className="row">
            {members.map((member, index) => (
              <div className="col-md-6 col-lg-4 mb-4" key={index}>
                <div className="card h-100 border border-1 border-dark-subtle shadow-sm">
                  <img
                    src={member.image}
                    alt={member.name}
                    className="card-img-top img-fluid"
                    style={{ height: '250px', objectFit: 'cover' }}
                  />
                  <div className="card-body text-center">
                    <h5 className="card-title">{member.name}</h5>
                    <h6 className="text-muted">{member.position}</h6>
                    <p className="card-text">{member.bio}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Footer Note */}
      <section className="py-4 bg-light text-center border border-1 border-secondary">
        <div className="container">
          <p className="mb-0">Our board is committed to delivering excellence and shaping future leaders through education.</p>
        </div>
      </section>
    </div>
  );
}

export default AboutBoardMembers;
