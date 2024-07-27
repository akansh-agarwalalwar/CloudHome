import { useState, useEffect, useRef } from "react";
import Navbar from "../components/navbar";
import useCreateFolder from "../hooks/useCreateFolder";
import useGetFileFolders from "../hooks/useGetFileFolders";
import useUploadFile from "../hooks/useUploadFile";
import LeftSideNavBar from "../components/leftsidenavbar";
import './HomePage.css';

const HomePage = () => {
  const [newFolder, setNewFolder] = useState("");
  const inputRef = useRef(null);
  const [showCreateFolder, setShowCreateFolder] = useState(false);
  const { createFolder } = useCreateFolder();
  const [folderStructure, setFolderStructure] = useState([
    { _id: null, name: "Cloud Home" },
  ]);
  const { getFileFolders, fileFolders } = useGetFileFolders();

  const parentFolder = folderStructure[folderStructure.length - 1];

  const handleDoubleClick = (elem) => {
    if (elem.type === "folder") {
      setFolderStructure([...folderStructure, elem]);
    } else {
      window.open(elem.link);
    }
  };

  const handleAllowCreateFolder = () => {
    setShowCreateFolder(true);
  };

  const handleCreateFolder = async () => {
    if (newFolder.length > 0) {
      await createFolder({ name: newFolder, parentId: parentFolder._id });
      getFileFolders(parentFolder._id);
      setShowCreateFolder(false);
      setNewFolder(""); 
    }
  };

  useEffect(() => {
    getFileFolders(parentFolder._id);
  }, [folderStructure]);

  const handleBackClick = (clickIdx) => {
    const newFolderStructure = folderStructure.filter(
      (elem, indx) => indx <= clickIdx
    );
    setFolderStructure(newFolderStructure);
  };

  const { isUploadAllowed, uploadFile } = useUploadFile();
  const handleFileUpload = async (e) => {
    if (isUploadAllowed) {
      const file = e.target.files;
      if (file.length > 0) {
        await uploadFile({
          file: file[0],
          parentId: parentFolder._id,
        });
        getFileFolders(parentFolder._id);
        e.target.value = ""; // Clear input after file upload
      }
    } else {
      alert("Uploading is already in progress. Please wait...");
    }
  };

  return (
    <div className="homepage-container">
      <LeftSideNavBar />
      <Navbar />
      <div className="homepage-main-container">
        <button className="create-folder-button" onClick={handleAllowCreateFolder}>
          Create Folder
        </button>
        <input
          className="file-upload-input"
          ref={inputRef}
          type="file"
          onChange={handleFileUpload}
          aria-label="Upload file"
        />
        <ul className="breadcrumb">
          {folderStructure.map((elem, indx) => (
            <li
              key={elem._id || indx}
              onClick={() => handleBackClick(indx)}
              className="breadcrumb-item"
            >
              {elem.name}
            </li>
          ))}
        </ul>
        {showCreateFolder && (
          <div className="create-folder-form">
            <input
              className="new-folder-input"
              value={newFolder}
              onChange={(e) => setNewFolder(e.target.value)}
              placeholder="Enter folder name"
            />
            <button className="create-button" onClick={handleCreateFolder}>
              Create
            </button>
            <button className="cancel-button" onClick={() => setShowCreateFolder(false)}>
              Cancel
            </button>
          </div>
        )}
        <div className="file-folder-container">
          {fileFolders.map((elem) => (
            <div
              key={elem._id}
              className={`file-folder-item ${elem.type === "folder" ? "folder" : "file"}`}
              onDoubleClick={() => handleDoubleClick(elem)}
            >
              <p>{elem.name}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default HomePage;
