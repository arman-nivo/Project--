import React, { useState, useRef, useEffect } from 'react';
import { FaUser } from 'react-icons/fa';
import { Link, useNavigate } from 'react-router-dom';

const ProfilePopup = () => {
  const [showPopup, setShowPopup] = useState(false);
  const navigate = useNavigate();
  const popupRef = useRef(null);

  const togglePopup = () => {
    setShowPopup(!showPopup);
  };

  const goToProfile = () => {
    setShowPopup(false);
    navigate('/profile');
  };

  // Close popup when clicking outside
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (popupRef.current && !popupRef.current.contains(event.target)) {
        setShowPopup(false);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  return (
    <div style={{ position: 'relative', display: 'inline-block' }} ref={popupRef}>
      <button onClick={togglePopup} className="btn btn-outline-light ">
        <FaUser />
      </button>

      {showPopup && (
        <div style={{
          position: 'absolute',
          top: '110%',
          right: 0,
          backgroundColor: '#fff',
          boxShadow: '0 2px 8px rgba(0,0,0,0.15)',
          borderRadius: '8px',
          zIndex: 1000,
          padding: '10px',
          minWidth: '150px'
        }}>
          <button className="dropdown-item py-2" onClick={goToProfile}><Link>  My Profile </Link></button>
          <p style={{color:'black'}}>User email</p>
          <p  style={{color:'black'}}>user Name</p>
          <button className="dropdown-item text-danger" onClick={() => alert('Logout clicked')}>
            Logout
          </button>
        </div>
      )}
    </div>
  );
};

export default ProfilePopup;
