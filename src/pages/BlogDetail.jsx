import { useParams, Link } from 'react-router-dom';
import { FaUser, FaCalendarAlt, FaFolder, FaChevronLeft, FaChevronRight } from 'react-icons/fa';
import Breadcrumb from '../components/Breadcrumb';
import { blogPosts } from '../data/blogPosts';
import '../styles/Blog.css';

const BlogDetail = () => {
  const { slug } = useParams();
  const postIndex = blogPosts.findIndex((p) => p.slug === slug);
  const post = blogPosts[postIndex];

  if (!post) {
    return (
      <>
        <Breadcrumb title="Blog" current="Post Not Found" />
        <section className="blog-detail-page">
          <div className="container" style={{ textAlign: 'center', padding: '60px 0' }}>
            <h2 style={{ fontFamily: 'var(--font-serif)', marginBottom: '16px' }}>Post Not Found</h2>
            <p style={{ color: 'var(--medium-gray)', marginBottom: '24px' }}>
              The blog post you're looking for doesn't exist.
            </p>
            <Link to="/blog" className="btn btn-primary">Back to Blog</Link>
          </div>
        </section>
      </>
    );
  }

  const prevPost = postIndex > 0 ? blogPosts[postIndex - 1] : null;
  const nextPost = postIndex < blogPosts.length - 1 ? blogPosts[postIndex + 1] : null;

  return (
    <>
      <Breadcrumb title="Blog" current={post.title} />

      <section className="blog-detail-page">
        <div className="container">
          <div className="blog-detail-grid">
            {/* Main Article */}
            <article className="blog-detail-article">
              <img src={post.image} alt={post.title} className="blog-detail-hero" />
              <div className="blog-detail-body">
                <div className="blog-detail-meta">
                  <span><FaUser /> {post.author}</span>
                  <span><FaCalendarAlt /> {post.date}</span>
                  <span><FaFolder /> {post.category}</span>
                </div>

                <h1>{post.title}</h1>

                <div className="blog-detail-content">
                  {post.content.map((paragraph, index) => (
                    <p key={index}>{paragraph}</p>
                  ))}
                </div>

                {/* Tags */}
                <div className="blog-detail-tags">
                  {post.tags.map((tag, index) => (
                    <span className="blog-tag" key={index}>{tag}</span>
                  ))}
                </div>
              </div>

              {/* Prev / Next Navigation */}
              <div style={{ padding: '0 40px 40px' }}>
                <div className="blog-nav">
                  {prevPost ? (
                    <Link to={`/blog/${prevPost.slug}`} className="blog-nav-link">
                      <FaChevronLeft /> {prevPost.title}
                    </Link>
                  ) : (
                    <span className="blog-nav-link disabled"><FaChevronLeft /> No Previous</span>
                  )}
                  {nextPost ? (
                    <Link to={`/blog/${nextPost.slug}`} className="blog-nav-link" style={{ marginLeft: 'auto', textAlign: 'right' }}>
                      {nextPost.title} <FaChevronRight />
                    </Link>
                  ) : (
                    <span className="blog-nav-link disabled" style={{ marginLeft: 'auto' }}>No Next <FaChevronRight /></span>
                  )}
                </div>
              </div>
            </article>

            {/* Sidebar */}
            <aside className="blog-sidebar">
              <div className="sidebar-card">
                <h3>About the Author</h3>
                <p><strong>{post.author}</strong></p>
                <p style={{ marginTop: '8px' }}>
                  A member of the Chapel of the Good Shepherd community, passionate
                  about sharing the Word of God with the university community.
                </p>
              </div>

              <div className="sidebar-card">
                <h3>Other Posts</h3>
                <div className="sidebar-recent-list">
                  {blogPosts
                    .filter((p) => p.id !== post.id)
                    .map((p, index) => (
                      <div className="sidebar-recent-item" key={p.id}>
                        <span className="sidebar-recent-number">{index + 1}</span>
                        <div>
                          <Link to={`/blog/${p.slug}`}>{p.title}</Link>
                          <span className="sidebar-recent-date">{p.date}</span>
                        </div>
                      </div>
                    ))}
                </div>
              </div>

              <div className="sidebar-card" style={{ background: 'linear-gradient(135deg, var(--crimson), var(--crimson-dark))', color: 'var(--white)' }}>
                <h3 style={{ color: 'var(--white)', borderBottomColor: 'var(--gold)' }}>Need Prayer?</h3>
                <p style={{ color: 'rgba(255,255,255,0.85)' }}>
                  We would love to pray with you. Visit our chapel or reach out
                  through our contact page.
                </p>
                <Link
                  to="/contact"
                  className="btn btn-outline"
                  style={{ marginTop: '16px', display: 'inline-flex', fontSize: '0.85rem', padding: '10px 20px' }}
                >
                  Contact Us
                </Link>
              </div>
            </aside>
          </div>
        </div>
      </section>
    </>
  );
};

export default BlogDetail;
