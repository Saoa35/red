import React from "react";
import "src/assets/css/modal.css";

interface Props {
	children: React.ReactNode;
}

const Modal: React.FC<Props> = ({ children }) => {
	return <div className="modal">{children}</div>;
};

export default Modal;
