import { useNavigate } from "react-router-dom";
import { useState } from "react";

export default function Signup() {
  const navigate = useNavigate();

  const [formData, setFormData] = useState({
    fullName: "",
    phone: "",
    email: "",
    password: "",
    company: "",
    agency: "Yes",
  });

  const handleSubmit = () => {
    localStorage.setItem("user", JSON.stringify(formData));
    navigate("/profile");
  };

  return (
    <div className="container">
      
      <h1>
        Create your
        <br />
        PopX account
      </h1>

      <div className="form-group">
        <label>Full Name *</label>
        <input
          type="text"
          placeholder="Marry Doe"
          onChange={(e) =>
            setFormData({ ...formData, fullName: e.target.value })
          }
        />
      </div>

      <div className="form-group">
        <label>Phone number *</label>
        <input
          type="text"
          placeholder="10-digit number"
          onChange={(e) =>
            setFormData({ ...formData, phone: e.target.value })
          }
        />
      </div>

      <div className="form-group">
        <label>Email address *</label>
        <input
          type="email"
          placeholder="example@email.com"
          onChange={(e) =>
            setFormData({ ...formData, email: e.target.value })
          }
        />
      </div>

      <div className="form-group">
        <label>Password *</label>
        <input
          type="password"
          placeholder="Enter password"
          onChange={(e) =>
            setFormData({ ...formData, password: e.target.value })
          }
        />
      </div>

      <div className="form-group">
        <label>Company name</label>
        <input
          type="text"
          placeholder="Your company"
          onChange={(e) =>
            setFormData({ ...formData, company: e.target.value })
          }
        />
      </div>

      <div className="radio-title">
        Are you an Agency? *
      </div>

      <div className="radio-group">
        <label>
          <input
            type="radio"
            name="agency"
            value="Yes"
            checked={formData.agency === "Yes"}
            onChange={(e) =>
              setFormData({ ...formData, agency: e.target.value })
            }
          />
          Yes
        </label>

        <label>
          <input
            type="radio"
            name="agency"
            value="No"
            checked={formData.agency === "No"}
            onChange={(e) =>
              setFormData({ ...formData, agency: e.target.value })
            }
          />
          No
        </label>
      </div>

      <button onClick={handleSubmit}>
        Create Account
      </button>
    </div>
  );
}