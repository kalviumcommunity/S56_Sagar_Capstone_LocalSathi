import React, { useState , useEffect} from 'react';
import './Trial.css';
import axios from "axios"

const ProfilePage = () => {
  const [profile, setProfile] = useState({});
  const [isEditing, setIsEditing] = useState(false);
  const [newFavourite, setNewFavourite] = useState({ name: '', image: '', discount: '' });
  const [activeTab, setActiveTab] = useState('Timeline');

  useEffect(()=>{
    axios.get("http://localhost:3200/getUser" , {
      headers:{
        Authorization: sessionStorage.getItem("token")
      }
    })
    .then((res)=>{
      console.log(res)
      setProfile(res.data)
    })
  },[])

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setProfile({ ...profile, [name]: value });
  };

  const handleFavouriteChange = (e) => {
    const { name, value } = e.target;
    setNewFavourite({ ...newFavourite, [name]: value });
  };

  const deleteBooking = (id) =>{
    const updatedbookings = profile.bookings.filter(booking => booking.id !== id);
    setProfile({ ...profile, bookings: updatedbookings })
  }

  const deleteFavourite = (id) => {
    const updatedFavourites = profile.favourites.filter(fav => fav.id !== id);
    setProfile({ ...profile, favourites: updatedFavourites });
  };

  const saveProfile = () => {
    setIsEditing(false);
  };

  const handleProfilePicChange = (e) => {
    const file = e.target.files[0];
    const reader = new FileReader();
    reader.onloadend = () => {
      setProfile({ ...profile, profilePic: reader.result });
    };
    if (file) {
      reader.readAsDataURL(file);
    }
  };

  const handleCoverPhotoChange = (e) => {
    const file = e.target.files[0];
    const reader = new FileReader();
    reader.onloadend = () => {
      setProfile({ ...profile, coverPhoto: reader.result });
    };
    if (file) {
      reader.readAsDataURL(file);
    }
  };

  const removeProfilePic = () => {
    setProfile({ ...profile, profilePic: '' });
  };

  const removeCoverPhoto = () => {
    setProfile({ ...profile, coverPhoto: '' });
  };

  return (
    <div className="profile-page">
      <div className="cover-photo" style={{ backgroundImage: `url(${profile.coverPhoto || 'https://via.placeholder.com/900x200'})` }}>
        <button className="upload-cover-photo-btn">
          <label htmlFor="upload-cover-photo">Upload Cover Photo</label>
        </button>
        <input
          type="file"
          id="upload-cover-photo"
          style={{ display: 'none' }}
          onChange={handleCoverPhotoChange}
        />
        {profile.coverPhoto && <button className="remove-cover-photo-btn" onClick={removeCoverPhoto}>Remove Cover Photo</button>}
      </div>
      <div className="profile-info">
        <label htmlFor="upload-profile-pic" className="profile-pic-label">
          <img src={profile.profilepic || 'https://via.placeholder.com/120?text=No+Profile+Pic'} alt="Profile" className="profile-pic" />
        </label>
        <input
          type="file"
          id="upload-profile-pic"
          style={{ display: 'none' }}
          onChange={handleProfilePicChange}
        />
        {profile.profilepic && <button className="remove-profile-pic-btn" onClick={removeProfilePic}>✖</button>}
        <div className="profile-details">
            <>
              <h2>{profile.Name} </h2>
              <p>{profile.location}</p>
              <p><span className="points-icon">🏆</span> {profile.points} PTS</p>
            </>
        </div>
      </div>
      <div className="tabs">
        {/* <button className={`tab ${activeTab === 'Timeline' ? 'active' : ''}`} onClick={() => setActiveTab('Timeline')}>Timeline</button> */}

        <button className={`tab ${activeTab === 'Booking History' ? 'active' : ''}`} onClick={() => setActiveTab('Booking History')}>Booking History ({profile?.bookings?.length})</button>

        {/* <button className={`tab ${activeTab === 'New Bookings' ? 'active' : ''}`} onClick={() => setActiveTab('New Bookings')}>New Bookings (1)</button> */}

        <button className={`tab ${activeTab === 'My Favourites' ? 'active' : ''}`} onClick={() => setActiveTab('My Favourites')}>My Favourites ({profile?.favourites?.length})</button>

        <button className={`tab ${activeTab === 'Account Settings' ? 'active' : ''}`} onClick={() => setActiveTab('Account Settings')}>Account Settings</button>
      </div>
      <div className="content">
        {activeTab === 'Timeline' && <div>Timeline Content</div>}
        {activeTab === 'Booking History' && (
          <div className="bookings">
            <h3>Booking History</h3>
            <ul>
              {profile.bookings.map((booking , i) => (
                <li key={booking.id} style={{margin:"20px"}}>
                  <h3>{i+1}) {booking.name}</h3>
                  <p>Date : {booking.date}</p>
                  <p>Status : {booking.status}</p>
                  <button style={{background:"white" , padding:"0" , cursor:"pointer"}} onClick={() => deleteBooking(booking.id)}>🗑️</button>
                </li>
              ))}
            </ul>
          </div>
        )}
        {activeTab === 'My Favourites' && (
          <div className="favourites-section">
            <h3>My Favourites ({profile?.favourites?.length})</h3>
            <div className="favourites-grid">
              {profile.favourites.map(fav => (
                <div key={fav.id} className="favourite-card">
                  <img src={fav.image} alt={fav.name} />
                  <div className="favourite-info">
                    <h4>{fav.name}</h4>
                    <span className="discount-badge">{fav.discount}</span>
                    <button className="delete-btn" onClick={() => deleteFavourite(fav.id)}>🗑️</button>
                  </div>
                </div>
              ))}
            </div>
            {/* <div className="add-favourite">
              <h3>Add New Favourite</h3>
              <input
                type="text"
                name="name"
                placeholder="Name"
                value={newFavourite.name}
                onChange={handleFavouriteChange}
              />
              <input
                type="text"
                name="image"
                placeholder="Image URL"
                value={newFavourite.image}
                onChange={handleFavouriteChange}
              />
              <input
                type="text"
                name="discount"
                placeholder="Discount"
                value={newFavourite.discount}
                onChange={handleFavouriteChange}
              />
              <button className="add-btn" onClick={addFavourite}>Add Favourite</button>
            </div> */}
          </div>
        )}
        {activeTab === 'Account Settings' && 
          <div>
            <h1>Account Details <span className="edit-icon" onClick={() => setIsEditing(true)} style={{cursor:'pointer'}}>✏️</span></h1>
            {isEditing ? (
            <div style={{display:"flex" , flexDirection:"column"}}>
              <label htmlFor="name">Name</label>
              <input type="text" name="name" value={profile.name} onChange={handleInputChange} style={{border:"2px solid black" , borderRadius:"5px" , padding:"5px 10px" , marginBottom:"10px"}}/>

              <label htmlFor="email">Email</label>
              <input type="email" name="email" value={profile.email} onChange={handleInputChange} style={{border:"2px solid black" , borderRadius:"5px" , padding:"5px 10px" , marginBottom:"10px"}}/>

              <label htmlFor="age">Age</label>
              <input type="number" name="age" value={profile.age} onChange={handleInputChange} style={{border:"2px solid black" , borderRadius:"5px" , padding:"5px 10px" , marginBottom:"10px"}}/>

              <label htmlFor="location">Location</label>
              <input type="text" name="location" value={profile.location} onChange={handleInputChange} style={{border:"2px solid black" , borderRadius:"5px" , padding:"5px 10px" , marginBottom:"10px"}}/>
              
              <button className="save-btn" onClick={saveProfile} style={{width:"fit-content" , cursor:'pointer'}}>Save</button>
            </div>
          ) : (
            <div>
              <div style={{display:"flex", alignItems:"center"}}>
              <h4>Name :</h4>
              <p style={{marginLeft:"10px"}}>{profile.Name}</p>
            </div>
            <div style={{display:"flex", alignItems:"center"}}>
              <h4>Email :</h4>
              <p style={{marginLeft:"10px"}}>{profile.Email}</p>
            </div>
            <div style={{display:"flex", alignItems:"center"}}>
              <h4>Age :</h4>
              <p style={{marginLeft:"10px"}}>{profile.Age}</p>
            </div>
            <div style={{display:"flex", alignItems:"center"}}>
              <h4>Location :</h4>
              <p style={{marginLeft:"10px"}}>{profile.location}</p>
            </div>
            </div>
            )}
          </div>}
      </div>
    </div>
  );
};

export default ProfilePage;
