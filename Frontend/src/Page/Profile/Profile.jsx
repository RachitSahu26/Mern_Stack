// Profile.js
import React from 'react';
import Layout from '../../Components/LayOut/LayOut';

const Profile = () => {
  return (

    <Layout>

    <div className="max-w-[90%]  mt-[8rem] p-3  bg-black rounded-xl shadow-md border-2 border-white">
      
      
      <div className="flex flex-col  p-2 items-center mb-4 ">
        <img
          className="w-16 h-16 rounded-full mr-4"
          src="https://placekitten.com/200/200" // Replace with your profile picture URL
          alt="Profile"
        />
      
      
        <div>
          <h2 className="text-xl font-semibold">John Doe</h2>
          <p className="text-white">Web Developer</p>
        </div>
      
      
      
      </div>
      <p className="text-white  text-center">
        Hi, I'm John Doe. I'm a passionate web developer with a love for coding and creating
        awesome websites.
      </p>
    </div>
    </Layout>

  );
};

export default Profile;
