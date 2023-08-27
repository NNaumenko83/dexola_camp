import { Formik, Form, Field, ErrorMessage } from "formik";
import * as Yup from "yup";

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
				<Form autoComplete="off">
					<Field type="email" name="email" onBlur={handleBlur} placeholder="Enter email" />
					<ErrorMessage name="email" component="div" className="error" />

					<Field type="tel" name="phone" onBlur={handleBlur} placeholder="+38(0__) ___ __ __" />
					<ErrorMessage name="phone" component="div" className="error" />

					<Field type="password" name="password" onBlur={handleBlur} placeholder="Password" />
					<ErrorMessage name="password" component="div" className="error" />

					<Field type="password" name="confirmPassword" onBlur={handleBlur} placeholder="Confirm Password" />
					<ErrorMessage name="confirmPassword" component="div" className="error" />

					<button type="submit" disabled={!isValid}>
						Submit
					</button>
				</Form>
			)}
		</Formik>
	);
};
