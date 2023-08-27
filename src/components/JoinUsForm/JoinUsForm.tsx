import { Formik, Form, Field, ErrorMessage } from "formik";
import { styled } from "styled-components";
import * as Yup from "yup";
import { InputWrapper } from "./JoinUsForm.styled";

const FormStyled = styled(Form)`
	border: 1px solid red;
	padding: 2.9375rem 2.5rem;
	margin-bottom: 0.25rem;
	display: flex;
	flex-direction: column;
	gap: 10px;
`;

const Input = styled(Field)`
	width: 100%;
	background-color: initial;
	border: none;
	padding: initial;

	color: ${props => props.theme.colors.inputTextColor};
	font-size: ${props => props.theme.fontSizes.body.mobile};
	line-height: 1.33;
	letter-spacing: 0.0225rem;

	border-bottom: 1px solid ${props => props.theme.colors.inputBorderBottom};

	&::placeholder {
		color: ${props => props.theme.colors.inputPlaceholder};
		font-size: ${props => props.theme.fontSizes.body.mobile};
		line-height: 1.33;
		letter-spacing: 0.0225rem;
	}
`;

const ErrorMessageStyled = styled(ErrorMessage)`
	color: ${props => props.theme.colors.errorMessageColor};
	font-size: ${props => props.theme.fontSizes.error};

	font-weight: ${props => props.theme.fontWeights.medium};
	line-height: 1.84;
	letter-spacing: 0.0163rem;
`;

const validationSchema = Yup.object().shape({
	email: Yup.string().email("Invalid email address").required("Email is required"),
	phone: Yup.string()
		.matches(/^\+(?:[0-9] ?){6,14}[0-9]$/, "Invalid phone number")
		.required("Phone number is required"),
	password: Yup.string().required("Password is required").min(8, "Password must be at least 8 characters long"),
	confirmPassword: Yup.string()
		.oneOf([Yup.ref("password"), undefined], "Passwords must match")
		.required("Confirm password is required"),
});

const initialValues = {
	email: "",
	phone: "",
	password: "",
	confirmPassword: "",
};

export const JoinUsForm = () => {
	const handleSubmit = (values: typeof initialValues) => {
		console.log("values:", values);
	};

	return (
		<Formik
			initialValues={initialValues}
			onSubmit={handleSubmit}
			validationSchema={validationSchema}
			validateOnMount
			validateOnChange={false}
		>
			{({ isValid, handleBlur }) => (
				<FormStyled autoComplete="off">
					<InputWrapper>
						<Input type="email" name="email" onBlur={handleBlur} placeholder="Enter email" />
						<ErrorMessageStyled name="email" component="div" />
					</InputWrapper>

					<InputWrapper>
						<Input type="tel" name="phone" onBlur={handleBlur} placeholder="+38(0__) ___ __ __" />
						<ErrorMessageStyled name="phone" component="div" />
					</InputWrapper>

					<InputWrapper>
						<Input type="password" name="password" onBlur={handleBlur} placeholder="Password" />
						<ErrorMessageStyled name="password" component="div" />
					</InputWrapper>

					<InputWrapper>
						<Input type="password" name="confirmPassword" onBlur={handleBlur} placeholder="Confirm Password" />
						<ErrorMessageStyled name="confirmPassword" component="div" />
					</InputWrapper>

					<button type="submit" disabled={!isValid}>
						Submit
					</button>
				</FormStyled>
			)}
		</Formik>
	);
};
