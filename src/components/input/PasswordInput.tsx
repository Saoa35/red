import React from "react";

interface Props {
  value: string;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
}

const PasswordInput: React.FC<Props> = ({ value, onChange }) => {
  return (
    <label className="input">
      <span className="input__heading">Password</span>
      <input
        data-test-id="auth-password"
        name="password"
        type="password"
        autoComplete="new-password"
        required
        minLength={3}
        maxLength={20}
        value={value}
        onChange={onChange}
      />
    </label>
  );
};

export default PasswordInput;
