import { Link } from 'react-router-dom';

const Breadcrumb = ({ title, current }) => {
  return (
    <section className="breadcrumb-section">
      <div className="container breadcrumb-content">
        <h1>{title}</h1>
        <div className="breadcrumb-nav">
          <Link to="/">Home</Link>
          <span>›</span>
          <span>{current}</span>
        </div>
      </div>
    </section>
  );
};

export default Breadcrumb;
