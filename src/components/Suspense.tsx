import React from "react";
import Loading from "./Loading";

interface Props {
	children: React.ReactNode;
}

const Suspense: React.FC<Props> = ({ children }) => {
	return <React.Suspense fallback={<Loading />}>{children}</React.Suspense>;
};

export default Suspense;
