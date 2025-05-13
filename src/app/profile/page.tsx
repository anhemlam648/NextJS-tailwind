// src/app/profile/page.tsx

import React from 'react';
import '../Style/profile.css'; // Import your CSS file here
import Link from 'next/link';
import Header from '../components/Navbar/Navbar';
const Profile = () => {
  return (
    // Using Tailwind CSS to style the profile page
    // You can change the CSS classes as per your design requirements
    /*
    <div className="flex justify-center items-center min-h-screen bg-gray-100">
      <div className="bg-white p-8 rounded-lg shadow-lg max-w-md w-full">
        <div className="flex justify-center mb-4">
          <img
            src="https://www.w3schools.com/w3images/avatar2.png"
            alt="Avatar"
            className="w-32 h-32 rounded-full border-4 border-blue-500"
          />
        </div>
        <h1 className="text-3xl font-bold text-center text-gray-800">John Doe</h1>
        <p className="text-center text-gray-600 mt-2">johndoe@example.com</p>
        <p className="text-gray-500 mt-4 text-center">
          A passionate developer with experience in building web applications using modern frameworks and technologies.
        </p>
      </div>
    </div>
    */
    <div className="profile-container">
     {/* <Header /> *//* Nếu muốn dùng theo cách thông thường bên React vẫn được nhưng xài layout tiện hơn */}
    <div className="profile-card">
      <div className="profile-avatar">
        <img
          src="https://www.w3schools.com/w3images/avatar2.png"
          alt="Avatar"
        />
      </div>
      <h1 className="profile-title">John Doe</h1>
      <p className="profile-email">johndoe@example.com</p>
      <p className="profile-bio">
        A passionate developer with experience in building web applications using modern frameworks and technologies.
      </p>
    </div>
        <Link href="/edit-profile">
          <button className="profile-button" style={{display: 'flex'}}>
            Edit Profile
            </button>
        </Link>
        <Link href="/edit-settings">
            <button className="profile-button" style={{display: 'flex'}}>
            Settings
            </button>
        </Link>
        <Link href="/">
            <button className="profile-button" style={{display: 'flex'}}>
            Logout
            </button>
        </Link>
      </div>
  

  );
};

export default Profile;
