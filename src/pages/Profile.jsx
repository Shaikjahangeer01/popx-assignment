import { useNavigate } from "react-router-dom";

export default function Profile() {
  const navigate = useNavigate();

  const user = JSON.parse(localStorage.getItem("user")) || {
    fullName: "Marry Doe",
    email: "marry@gmail.com",
  };

  return (
    <div className="profile-page">
      <div className="profile-card">

        <div className="profile-header">
          <h2>Account Settings</h2>
        </div>

        <hr />

        <div className="profile-info">
          <div className="profile-image-wrapper">
            <img
              src="https://i.pravatar.cc/150?img=5"
              alt="profile"
              className="profile-img"
            />
            <div className="camera-icon">📷</div>
          </div>

          <div>
            <h3>{user.fullName}</h3>
            <p>{user.email}</p>
          </div>
        </div>

        <hr />

        <p className="profile-text">
          Lorem Ipsum Dolor Sit Amet, Consetetur Sadipscing Elitr,
          Sed Diam Nonumy Eirmod Tempor Invidunt Ut Labore Et
          Dolore Magna Aliquyam Erat, Sed Diam.
        </p>

        <hr />

      </div>
    </div>
  );
}