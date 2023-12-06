// Profile.js
import React from 'react';
import Layout from '../../Components/LayOut/LayOut';

const Profile = () => {
  return (

    <Layout>

    <div className="max-w-md mx-auto p-6 bg-white rounded-md shadow-md">
      <div className="flex items-center mb-4">
        <img
          className="w-16 h-16 rounded-full mr-4"
          src="https://placekitten.com/200/200" // Replace with your profile picture URL
          alt="Profile"
        />
        <div>
          <h2 className="text-xl font-semibold">John Doe</h2>
          <p className="text-gray-600">Web Developer</p>
        </div>
      </div>
      <p className="text-gray-700">
        Hi, I'm John Doe. I'm a passionate web developer with a love for coding and creating
        awesome websites.
      </p>
    </div>
    </Layout>

  );
};

export default Profile;
