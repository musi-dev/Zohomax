import { Link } from 'react-router-dom';
import { FaUser } from 'react-icons/fa';
import AuthLayout from '../components/AuthLayout';
import PasswordField from '../components/PasswordField';

export default function Login() {
  return (
    <AuthLayout title="Log in to your account" subtitle="Welcome back! Enter your details to continue.">
      <form className="auth-form" onSubmit={(e) => e.preventDefault()}>
        <div className="auth-field">
          <label htmlFor="login-userId">Email / User ID</label>
          <div className="auth-input">
            <FaUser className="auth-input-icon" />
            <input id="login-userId" type="text" placeholder="Email / User ID" autoComplete="off" />
          </div>
        </div>

        <PasswordField id="login-password" />

        <button type="submit" className="btn btn-primary auth-btn">Login</button>

        <Link to="/contact" className="auth-forgot">Forgot password?</Link>

        <p className="auth-switch">
          Don't have an account? <Link to="/register">Register here</Link>
        </p>
      </form>
    </AuthLayout>
  );
}