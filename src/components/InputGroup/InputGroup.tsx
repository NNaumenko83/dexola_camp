import { ReactNode } from "react";
import { InputGroupStyled } from "./InputGroup.styled";
import { useFormikContext } from "formik";

interface IInputGroupProps {
	children: ReactNode;
	name: string;
}

export const InputGroup: React.FC<IInputGroupProps> = ({ children, name }) => {
	const formik = useFormikContext();

	const isFieldInvalid =
		formik.touched[name as keyof typeof formik.touched] && formik.errors[name as keyof typeof formik.errors];
	return <InputGroupStyled $isInvalid={isFieldInvalid}>{children}</InputGroupStyled>;
};
