import { Formik, Form, Field, ErrorMessage } from "formik";
import { styled } from "styled-components";
import * as Yup from "yup";
import { InputWrapper, StarInput } from "./JoinUsForm.styled";
import { InputGroup } from "../InputGroup/InputGroup";
import { InputLeftAddon } from "../InputLeftAddon/InputLeftAddon";
import { InputRightAddon } from "../InputRightAddon/InputRightAddon";
import { useState } from "react";
import { EyeButton } from "../EyeButton/EyeButton";

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
	email: Yup.string().email("Is not valid email").required("Please complete this field"),
	phone: Yup.string()
		.matches(/^\+(?:[0-9] ?){6,14}[0-9]$/, "Is not valid phone number")
		.required("Please complete this field"),
	password: Yup.string().required("Please complete this field").min(8, "Password must be at least 8 characters long"),
	confirmPassword: Yup.string()
		.oneOf([Yup.ref("password"), undefined], "Cоnfirm password does not match the password entered")
		.required("Please complete this field"),
});

const initialValues = {
	email: "",
	phone: "",
	password: "",
	confirmPassword: "",
};

export const JoinUsForm = () => {
	const [showPassword, setShowPassword] = useState(false);
	const [showConfirmPassword, setConfirmPassword] = useState(false);
	const onShowPasswordButtonClick: () => void = () => setShowPassword(!showPassword);
	const onShowConfirmPasswordButtonClick: () => void = () => setConfirmPassword(!showConfirmPassword);

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
						<InputGroup name="email">
							<InputLeftAddon>
								<StarInput>*</StarInput>
							</InputLeftAddon>
							<Input type="email" name="email" onBlur={handleBlur} placeholder="Enter email" />
						</InputGroup>
						<ErrorMessageStyled name="email" component="div" />
					</InputWrapper>

					<InputWrapper>
						<InputGroup name="phone">
							<InputLeftAddon>
								<StarInput>*</StarInput>
							</InputLeftAddon>
							<Input type="tel" name="phone" onBlur={handleBlur} placeholder="+38(0__) ___ __ __" />
						</InputGroup>

						<ErrorMessageStyled name="phone" component="div" />
					</InputWrapper>

					<InputWrapper>
						<InputGroup name="password">
							<InputLeftAddon>
								<StarInput>*</StarInput>
							</InputLeftAddon>
							<Input
								type={!showPassword ? "password" : "text"}
								name="password"
								onBlur={handleBlur}
								placeholder="Password"
							/>
							<InputRightAddon>
								<EyeButton onClick={onShowPasswordButtonClick} showPassword={showPassword} />
							</InputRightAddon>
						</InputGroup>

						<ErrorMessageStyled name="password" component="div" />
					</InputWrapper>

					<InputWrapper>
						<InputGroup name="confirmPassword">
							<InputLeftAddon>
								<StarInput>*</StarInput>
							</InputLeftAddon>
							<Input
								type={!showConfirmPassword ? "password" : "text"}
								name="confirmPassword"
								onBlur={handleBlur}
								placeholder="Confirm Password"
							/>
							<InputRightAddon>
								<EyeButton onClick={onShowConfirmPasswordButtonClick} showPassword={showConfirmPassword} />
							</InputRightAddon>
						</InputGroup>

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
