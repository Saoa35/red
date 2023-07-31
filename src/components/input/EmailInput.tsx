import React from "react";

interface Props {
  value: string;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  error: string;
}

const EmailInput: React.FC<Props> = ({ value, onChange, error }) => {
  return (
    <label className="input">
      <span className="input__heading">Email</span>
      <input
        data-test-id="auth-email"
        name="email"
        type="email"
        required
        value={value}
        onChange={onChange}
        id={error ? "input-error" : ""}
      />
      {error && <span className="input__error">{error}</span>}
    </label>
  );
};

export default EmailInput;
