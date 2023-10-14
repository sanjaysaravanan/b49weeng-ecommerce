import { useState } from "react";
import "./profile.css"; // Import your CSS file

const ProfileComponent = () => {
  // const [profile, setProfile] = useState({
  //   name: "",
  //   email: "",
  //   dob: "",
  //   place: "",
  //   country: "",
  //   company: "",
  // });

  // const handleInputChange = (event) => {
  //   const { name, value } = event.target;
  //   setProfile({
  //     ...profile,
  //     [name]: value,
  //   });
  // };

  const [profile, setProfile] = useState({
    name: "",
    email: "",
    dob: "",
    place: "",
    country: "",
    company: "",
  });

  const handleInputChange = (e) => {
    console.log(e.target);
    const { value, name } = e.target;
    setProfile({
      ...profile,
      // making the key dynamically take from the target input
      [name]: value,
    });
  };

  return (
    <div className="profile-container">
      <h2>My Profile</h2>
      {console.log(profile)}
      <form>
        <div className="form-group">
          <label htmlFor="name">Name:</label>
          <input
            type="text"
            name="name"
            id="name"
            value={profile.name}
            onChange={handleInputChange}
          />
        </div>
        <div className="form-group">
          <label htmlFor="email">Email:</label>
          <input
            type="email"
            name="email"
            id="email"
            value={profile.email}
            onChange={handleInputChange}
          />
        </div>
        <div className="form-group">
          <label htmlFor="dob">Date of Birth (DOB):</label>
          <input
            type="date"
            name="dob"
            id="dob"
            value={profile.dob}
            onChange={handleInputChange}
          />
        </div>
        <div className="form-group">
          <label htmlFor="place">Place:</label>
          <input
            type="text"
            name="place"
            id="place"
            value={profile.place}
            onChange={handleInputChange}
          />
        </div>
        <div className="form-group">
          <label htmlFor="country">Country:</label>
          <input
            type="text"
            name="country"
            id="country"
            value={profile.country}
            onChange={handleInputChange}
          />
        </div>
        <div className="form-group">
          <label htmlFor="company">Company:</label>
          <input
            type="text"
            name="company"
            id="company"
            value={profile.company}
            onChange={handleInputChange}
          />
        </div>
      </form>
      <div className="profile-information">
        <h3>Profile Information:</h3>
        <p>
          <strong>Name:</strong> {profile.name}
        </p>
        <p>
          <strong>Email:</strong> {profile.email}
        </p>
        <p>
          <strong>Date of Birth (DOB):</strong> {profile.dob}
        </p>
        <p>
          <strong>Place:</strong> {profile.place}
        </p>
        <p>
          <strong>Country:</strong> {profile.country}
        </p>
        <p>
          <strong>Company:</strong> {profile.company}
        </p>
      </div>
    </div>
  );
};

export default ProfileComponent;
