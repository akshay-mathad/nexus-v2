import React, { useState } from "react";
import Header from '../components/Header';
import Footer from '../components/Footer';

const Profile = () => {
  const user = {
    profileImage: 'path_to_image',
    name: 'John Doe',
    email: 'johndoe@example.com',
    phone: '1234567890',
    address: '123 Main St, Anytown, USA'
  };
  const [isEditMode, setIsEditMode] = useState(false);

  const handleEdit = () => {
    setIsEditMode(true);
  };

  const handleSave = () => {
    setIsEditMode(false);
  };

  return (
    <div>
      <Header />
      <div className="profile-container">
        <div className="profile-display">
          <div className="profile-display-header">
            <h1>Profile</h1>
          </div>
          <div className="profile-display-body">
            <div className="profile-display-body-left">
              <div className="image-circle">
                <img src={user.profileImage} alt="Profile" />
              </div>

            </div>
            <div className="profile-display-body-right">
              <div className="profile-display-body-right-content">
                <h2>Name: {user.name}</h2>
                <p>Email: {user.email}</p>
                <p>Phone: {user.phone}</p>
                <p>Address: {user.address}</p>
              </div>
            </div>
          </div>
          <button className="edit-button" onClick={handleEdit}>Edit</button>
        </div>
        {isEditMode && (
          <div className="profile-edit">
            <div className="profile-edit-header">
              <h1>Edit Profile</h1>
              <form>
                <div>
                  <label htmlFor="profileImage">Profile Image:</label>
                  <input type="file" id="profileImage" accept=".png, .jpg, .jpeg" onChange={(e) => {
                    const file = e.target.files[0];
                    if (file) {
                      const reader = new FileReader();
                      reader.onload = (e) => document.getElementById('image-preview').innerHTML = `<img src=${e.target.result} alt="Profile" />`;
                      reader.readAsDataURL(file);
                    }
                  }} />
                  <div id="image-preview"></div>
                </div>
                <div>
                  <label htmlFor="name">Name:</label>
                  <input type="text" id="name" defaultValue={user.name} />
                </div>
                <div>
                  <label htmlFor="email">Email:</label>
                  <input type="email" id="email" defaultValue={user.email} />
                </div>
                <div>
                  <label htmlFor="phone">Phone:</label>
                  <input type="tel" id="phone" defaultValue={user.phone} />
                </div>
                <div>
                  <label htmlFor="address">Address:</label>
                  <textarea id="address" defaultValue={user.address} />
                </div>
                <button type="submit" onClick={handleSave}>Save Changes</button>
              </form>
            </div>
          </div>
        )}
      </div>
      <Footer />
    </div>
  );
};

export default Profile;