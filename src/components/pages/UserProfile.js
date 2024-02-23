import React from "react";
import { useLocation } from "react-router-dom";

function UserProfile() {
  const location = useLocation();
  const { userEmail } = location.state;

  return (
    <div className="container mt-5">
      <div className="row justify-content-center">
        <div className="col-md-6">
          <div className="card">
            <div className="card-body">
              <h5 className="card-title text-center mb-4">User Profile</h5>
              <p className="text-center">Welcome, {userEmail}!</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default UserProfile;
