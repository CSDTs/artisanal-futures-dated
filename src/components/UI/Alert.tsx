import { FC, ReactNode } from "react";

interface IProps {
	type: string;
	callback: () => void;
	children: ReactNode;
}

const Alert: FC<IProps> = ({ type, callback, children }) => {
	const alertType = {
		error: "relative py-3 pl-4 pr-10 leading-normal text-red-700 bg-red-100 rounded-lg",
		success: "relative py-3 pl-4 pr-10 leading-normal text-green-700 bg-green-100 rounded-lg",
	};
	return (
		<div className={alertType[type as keyof typeof alertType]} role="alert">
			<h3 className="capitalize ">{type}</h3>
			{children}
			<span className="absolute inset-y-0 right-0 flex items-center mr-4" onClick={callback}>
				<svg className="w-4 h-4 fill-current" role="button" viewBox="0 0 20 20">
					<path
						d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z"
						clipRule="evenodd"
						fillRule="evenodd"></path>
				</svg>
			</span>
		</div>
	);
};

export default Alert;
