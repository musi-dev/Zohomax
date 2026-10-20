import { FaEye, FaLock } from 'react-icons/fa';

export default function PasswordField({ id, label = 'Password', placeholder = 'Password' }) {
  return (
    <div className="auth-field">
      <label htmlFor={id}>{label}</label>
      <div className="auth-input">
        <FaLock className="auth-input-icon" />
        <input id={id} type="password" placeholder={placeholder} autoComplete="off" />
        <span className="auth-eye" aria-hidden="true">
          <FaEye />
        </span>
      </div>
    </div>
  );
}