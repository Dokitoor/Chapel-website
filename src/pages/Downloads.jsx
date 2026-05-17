import { FaDownload, FaFilePdf, FaFileWord, FaFileAudio } from 'react-icons/fa';
import Breadcrumb from '../components/Breadcrumb';
import '../styles/Pages.css';

const downloads = [
  { title: 'Sunday Sermon - Running To Win', type: 'Audio', icon: <FaFileAudio />, size: '12.4 MB', date: '2024-02-18' },
  { title: 'Chapel Bulletin - February Edition', type: 'PDF', icon: <FaFilePdf />, size: '2.1 MB', date: '2024-02-01' },
  { title: 'Bible Study Notes - Book of John', type: 'Document', icon: <FaFileWord />, size: '1.8 MB', date: '2024-01-25' },
  { title: 'Worship Songs Compilation', type: 'Audio', icon: <FaFileAudio />, size: '45.6 MB', date: '2024-01-20' },
  { title: 'Annual Report 2023', type: 'PDF', icon: <FaFilePdf />, size: '5.3 MB', date: '2024-01-15' },
  { title: 'Prayer Guide - 21 Days of Prayer', type: 'PDF', icon: <FaFilePdf />, size: '3.2 MB', date: '2024-01-01' },
];

const Downloads = () => {
  return (
    <>
      <Breadcrumb title="Downloads" current="Downloads" />

      <section className="download-section">
        <div className="container">
          <div className="section-title">
            <h2>Resources & Downloads</h2>
            <p>Access sermons, bulletins, study materials, and more</p>
          </div>
          <div className="download-table-wrap">
            <table className="download-table">
              <thead>
                <tr>
                  <th>Resource</th>
                  <th>Type</th>
                  <th>Size</th>
                  <th>Date</th>
                  <th>Action</th>
                </tr>
              </thead>
              <tbody>
                {downloads.map((item, index) => (
                  <tr key={index}>
                    <td style={{ display: 'flex', alignItems: 'center', gap: '10px', fontWeight: 500, color: 'var(--charcoal)' }}>
                      <span style={{ color: 'var(--crimson)', fontSize: '1.2rem' }}>{item.icon}</span>
                      {item.title}
                    </td>
                    <td>{item.type}</td>
                    <td>{item.size}</td>
                    <td>{item.date}</td>
                    <td>
                      <button className="download-btn" onClick={() => alert('Download would start for: ' + item.title)}>
                        <FaDownload /> Download
                      </button>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </section>
    </>
  );
};

export default Downloads;
