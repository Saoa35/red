import React from "react";

interface Props {
	value: string;
	onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
}

const NameInput: React.FC<Props> = ({ value, onChange }) => {
	return (
		<label className="trip-popup__input input">
			<span className="input__heading">Full name</span>
			<input
				name="full-name"
				type="text"
				required
				value={value}
				onChange={onChange}
			/>
		</label>
	);
};

export default NameInput;
