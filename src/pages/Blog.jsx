import { Link } from 'react-router-dom';
import { FaUser, FaCalendarAlt, FaFolder, FaArrowRight } from 'react-icons/fa';
import Breadcrumb from '../components/Breadcrumb';
import { blogPosts } from '../data/blogPosts';
import '../styles/Blog.css';

const Blog = () => {
  return (
    <>
      <Breadcrumb title="Our Blog" current="Blog" />

      <section className="blog-page">
        <div className="container">
          <div className="section-title">
            <h2>Chapel Blog</h2>
            <p>Sermons, devotionals, and spiritual insights from our community</p>
          </div>

          <div className="blog-page-grid">
            {/* Blog Posts List */}
            <div className="blog-list">
              {blogPosts.map((post) => (
                <article className="blog-list-card" key={post.id}>
                  <div className="blog-list-card-img">
                    <img src={post.image} alt={post.title} />
                  </div>
                  <div className="blog-list-card-body">
                    <div className="blog-list-card-meta">
                      <span><FaUser /> {post.author}</span>
                      <span><FaCalendarAlt /> {post.date}</span>
                      <span><FaFolder /> {post.category}</span>
                    </div>
                    <h3>
                      <Link to={`/blog/${post.slug}`}>{post.title}</Link>
                    </h3>
                    <p className="excerpt">{post.excerpt}</p>
                    <Link to={`/blog/${post.slug}`} className="blog-read-more">
                      Read Full Article <FaArrowRight />
                    </Link>
                  </div>
                </article>
              ))}
            </div>

            {/* Sidebar */}
            <aside className="blog-sidebar">
              <div className="sidebar-card">
                <h3>About Our Blog</h3>
                <p>
                  Welcome to the Chapel of the Good Shepherd blog. Here we share
                  sermons, devotionals, and spiritual insights to help you grow in
                  your walk with Christ. Our mission is to bring members of the
                  university community to know Jesus Christ personally.
                </p>
              </div>

              <div className="sidebar-card">
                <h3>Recent Posts</h3>
                <div className="sidebar-recent-list">
                  {blogPosts.map((post, index) => (
                    <div className="sidebar-recent-item" key={post.id}>
                      <span className="sidebar-recent-number">{index + 1}</span>
                      <div>
                        <Link to={`/blog/${post.slug}`}>{post.title}</Link>
                        <span className="sidebar-recent-date">{post.date}</span>
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              <div className="sidebar-card">
                <h3>Scripture of the Day</h3>
                <p style={{ fontStyle: 'italic', lineHeight: '1.9' }}>
                  "Be sober, be vigilant; because your adversary the devil walks
                  about like a roaring lion, seeking whom he may devour."
                </p>
                <p style={{ color: 'var(--crimson)', fontWeight: '600', marginTop: '10px', fontSize: '0.88rem' }}>
                  — 1 Peter 5:8 (NKJV)
                </p>
              </div>
            </aside>
          </div>
        </div>
      </section>
    </>
  );
};

export default Blog;
