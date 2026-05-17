import { FaHeart, FaCross, FaBookOpen, FaBalanceScale, FaPray } from 'react-icons/fa';
import Breadcrumb from '../components/Breadcrumb';
import '../styles/Pages.css';

const About = () => {
  const values = [
    { icon: <FaHeart />, title: 'Love', verse: 'John 15:13', text: 'Greater love has no one than this: to lay down one\'s life for one\'s friends. Love is the foundation of everything we do as a community of believers.' },
    { icon: <FaCross />, title: 'Righteousness', verse: 'Romans 4:3, Daniel 3:16-18', text: 'We stand firm in righteousness, living lives that reflect the holiness of God in every area — personal, academic, and communal.' },
    { icon: <FaBookOpen />, title: 'Discipleship', verse: 'Matthew 28:19-20', text: 'Go therefore and make disciples of all nations. We are committed to raising believers who can go out and make an impact for Christ.' },
    { icon: <FaBalanceScale />, title: 'Balance', verse: 'Ephesians 4:14, 1 Cor 9:22', text: 'We uphold a balanced approach to the Christian faith — being grounded in doctrine while remaining relevant and accessible to all.' },
    { icon: <FaPray />, title: 'Prayers', verse: 'Isaiah 56:7', text: 'My house shall be called a house of prayer. Prayer is central to everything we do, and we encourage a vibrant prayer life among all members.' },
  ];

  return (
    <>
      <Breadcrumb title="About Us" current="About Us" />

      <section className="about-main">
        <div className="container">
          <div className="about-content-grid">
            <div className="about-text">
              <h2>About The Chapel of the Good Shepherd</h2>
              <p>
                The Chapel of the Good Shepherd (CGS) is a vibrant Christian community within the University of Agriculture, Makurdi (UAM).
                Our mission is to bring members of the university community to know Jesus Christ personally as Lord and Saviour,
                and to grow to become like Him in faith, love, unity and purity for effective kingdom service.
              </p>
              <p>
                As the culture becomes increasingly hostile to the message of Christ, we remain steadfast in our commitment to the Gospel.
                Through weekly services, Bible studies, discipleship classes, and fellowship activities, we equip students,
                staff, and the wider community to live out their faith boldly and authentically.
              </p>
              <p>
                Whether you are a first-time visitor, a returning student, or a longtime member of the university community,
                there is a place for you here at CGS. We invite you to experience the warmth of fellowship, the depth of God's Word,
                and the transforming power of worship.
              </p>
            </div>
            <div>
              <div className="about-sidebar-card">
                <h3>Coming Event</h3>
                <p style={{ fontSize: '0.9rem', color: 'var(--medium-gray)' }}>
                  Welcome and Orientation for Fresh Students — Join us for a time of worship, seminars, songs ministration, drama and more.
                </p>
              </div>
              <div className="about-sidebar-card">
                <h3>Coming Sermon</h3>
                <div style={{ margin: '14px 0', borderRadius: 'var(--radius-md)', overflow: 'hidden', height: '180px' }}>
                  <img src="/sermon-1.jpg" alt="Coming Sermon" style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
                </div>
                <p style={{ fontSize: '0.9rem', color: 'var(--medium-gray)' }}>
                  "Areas All of Us Struggle to Trust God With" by John Stevenson — A powerful exploration of faith and surrender.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="about-values">
        <div className="container">
          <div className="section-title">
            <h2>Our Core Values</h2>
            <p>The pillars that guide our community life and ministry</p>
          </div>
          <div className="values-grid">
            {values.map((value, index) => (
              <div className="value-card" key={index}>
                <div className="value-card-icon">{value.icon}</div>
                <h3>{value.title}</h3>
                <span className="verse">{value.verse}</span>
                <p>{value.text}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
};

export default About;
