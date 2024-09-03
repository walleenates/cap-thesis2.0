import React, { useState, useEffect } from 'react';
import { getStorage, ref, uploadBytes, getDownloadURL, listAll } from "firebase/storage";
import AdminDashboard from '../dashboard';
import ManageUser from '../ManageUser';
import ManageItem from '../components/ManageItem';
import RequestForm from '../components/RequestForm';
import Reports from '../components/Reports';
import '../pages/HomePage.css';

const HomePage = () => {
  const [activeComponent, setActiveComponent] = useState('dashboard');
  const [selectedCollege, setSelectedCollege] = useState('CCS');
  const [file, setFile] = useState(null);
  const [uploading, setUploading] = useState(false);
  const [uploadError, setUploadError] = useState(null);
  const [uploadSuccess, setUploadSuccess] = useState(null);
  const [fileList, setFileList] = useState([]);

  const storage = getStorage();

  useEffect(() => {
    // Fetch list of files whenever the selected college changes
    fetchFileList();
  }, [selectedCollege]);

  const handleChangeActiveComponent = (page) => {
    setActiveComponent(page);
  };

  const handleFileChange = (e) => {
    setFile(e.target.files[0]);
  };

  const handleCollegeChange = (e) => {
    setSelectedCollege(e.target.value);
  };

  const handleUpload = async () => {
    if (file) {
      setUploading(true);
      setUploadError(null);
      setUploadSuccess(null);
      const storagePath = `${selectedCollege}/${file.name}`;
      const storageRef = ref(storage, storagePath);

      try {
        await uploadBytes(storageRef, file);
        const downloadURL = await getDownloadURL(storageRef);
        setUploadSuccess(`File uploaded successfully! File URL: ${downloadURL}`);
        setFile(null);
        fetchFileList(); // Refresh the file list after upload
      } catch (error) {
        setUploadError('Failed to upload file. Please try again.');
      } finally {
        setUploading(false);
      }
    }
  };

  const fetchFileList = async () => {
    const storageRef = ref(storage, `${selectedCollege}/`);
    try {
      const res = await listAll(storageRef);
      const files = await Promise.all(
        res.items.map(async (itemRef) => {
          const downloadURL = await getDownloadURL(itemRef);
          return {
            name: itemRef.name,
            url: downloadURL,
          };
        })
      );
      setFileList(files);
    } catch (error) {
      setUploadError('Failed to fetch file list. Please try again.');
    }
  };

  return (
    <div className='home-page-container'>
      <aside className="sidebar">
        <div className="logo">
          <h1>SIMS</h1>
          <img src="spclogo.png" alt="Logo" />
        </div>
        <button onClick={() => handleChangeActiveComponent("dashboard")}>
          <img src="dashboard.png" alt="Dashboard Icon" className="sidebar-icon" />
          Dashboard
        </button>
        <button onClick={() => handleChangeActiveComponent("manage-item")} className="sidebar-button">
          <img src="manageitem.png" alt="Manage Item Icon" className="sidebar-icon" />
          Manage Item
        </button>
        <button onClick={() => handleChangeActiveComponent("purchased-request")} className="sidebar-button">
          <img src="prequest.png" alt="Purchased Request Icon" className="sidebar-icon" />
          Approved Purchased Request
        </button>
        <button onClick={() => handleChangeActiveComponent("settings")} className="sidebar-button">
          <img src="setting.png" alt="Settings Icon" className="sidebar-icon" />
          Settings
        </button>
        <button onClick={() => handleChangeActiveComponent("reports")} className="sidebar-button">
          <img src="reports.png" alt="Reports Icon" className="sidebar-icon" />
          Reports
        </button>
        <button onClick={() => handleChangeActiveComponent("scanner")} className="sidebar-button">
          <img src="barcodescanner.png" alt="Scanner Icon" className="sidebar-icon" />
          Scanner
        </button>
      </aside>
      <div className="main-content">
        {activeComponent === 'dashboard' && <AdminDashboard />}
        {activeComponent === 'manage-user' && <ManageUser />}
        {activeComponent === 'manage-item' && <ManageItem />}
        {activeComponent === 'request-form' && <RequestForm />}
        {activeComponent === 'reports' && <Reports />}
        {activeComponent === 'purchased-request' && (
          <div>
            <h2>Approved Purchased Request</h2>
            <div className="upload-form">
              <label htmlFor="college">Select College:</label>
              <select id="college" value={selectedCollege} onChange={handleCollegeChange}>
                <option value="CCS">CCS</option>
                <option value="COC">COC</option>
                <option value="CED">CED</option>
                <option value="CBA">CBA</option>
                <option value="BED">BED</option>
                <option value="COE">COE</option>
              </select>
              <input type="file" onChange={handleFileChange} />
              <button onClick={handleUpload} disabled={uploading}>Upload</button>
              {uploading && <p>Uploading...</p>}
              {uploadError && <p className="error-message">{uploadError}</p>}
              {uploadSuccess && <p className="success-message">{uploadSuccess}</p>}
            </div>
            <div className="file-list">
              <h3>Uploaded Files:</h3>
              <ul>
                {fileList.map((file, index) => (
                  <li key={index}>
                    <a href={file.url} target="_blank" rel="noopener noreferrer">{file.name}</a>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default HomePage;
