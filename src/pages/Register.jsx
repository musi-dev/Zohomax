import { Link } from 'react-router-dom';
import { FaUser, FaIdBadge, FaEnvelope, FaPhoneAlt, FaUserFriends } from 'react-icons/fa';
import AuthLayout from '../components/AuthLayout';
import PasswordField from '../components/PasswordField';

export default function Register() {
  return (
    <AuthLayout title="Create your account" subtitle="Join the ZMAX community in a few quick steps.">
      <form className="auth-form" onSubmit={(e) => e.preventDefault()}>
        <div className="auth-grid">
          <div className="auth-field">
            <label htmlFor="reg-username">User Name</label>
            <div className="auth-input">
              <FaUser className="auth-input-icon" />
              <input id="reg-username" type="text" placeholder="User Name" autoComplete="off" />
            </div>
          </div>

          <div className="auth-field">
            <label htmlFor="reg-fullname">Full Name</label>
            <div className="auth-input">
              <FaIdBadge className="auth-input-icon" />
              <input id="reg-fullname" type="text" placeholder="Full Name" autoComplete="off" />
            </div>
          </div>

          <div className="auth-field">
            <label htmlFor="reg-email">Email Id</label>
            <div className="auth-input">
              <FaEnvelope className="auth-input-icon" />
              <input id="reg-email" type="text" placeholder="Email" autoComplete="off" />
            </div>
          </div>

          <PasswordField id="reg-password" />

          <div className="auth-field">
            <label htmlFor="reg-mobile">Mobile Number</label>
            <div className="auth-input">
              <FaPhoneAlt className="auth-input-icon" />
              <input id="reg-mobile" type="text" placeholder="00000 0000" autoComplete="off" />
            </div>
          </div>

          <div className="auth-field">
            <label htmlFor="reg-sponsor">Sponsor ID</label>
            <div className="auth-input">
              <FaUserFriends className="auth-input-icon" />
              <input id="reg-sponsor" type="text" placeholder="Sponsor User Name (Optional)" autoComplete="off" />
            </div>
          </div>
        </div>

        <button type="submit" className="btn btn-primary auth-btn">Register Now</button>

        <p className="auth-switch">
          Already have an account? <Link to="/login">Login Now</Link>
        </p>
      </form>
    </AuthLayout>
  );
}