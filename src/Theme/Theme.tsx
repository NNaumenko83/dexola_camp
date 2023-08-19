import { ReactNode } from "react";
import { ThemeProvider } from "styled-components";

const theme = {
	colors: {
		white: "#FFFFFF",
		black: "#000000",
		accentBlue: "#09237E",
		darkGrey: "#2F2F2F",
		lightGrey: "#B3B3B3",
		background: "#060412",
		warningRose: "#e2e2e2",
		buttonTextColor: "#FFFFFF",
		buttonBackgroundColor: "#272A2E",
		buttonHoverBackgroundColor: "#B3B3B3",
	},

	fontSizes: {
		title: {
			web: "8.75rem",
			tablet: "7rem",
			mobile: "3rem",
		},

		subTitle: {
			web: "1.5rem",
			tablet: "1.25rem",
			mobile: "1rem",
		},

		body: {
			web: "1.125rem",
			tablet: "1rem",
			mobile: "0.875rem",
		},

		button: {
			small: "0.875rem",
			medium: "1rem",
		},
	},

	fontWeights: {
		normal: 400,
		medium: 500,
	},

	breakpoints: {
		web: "1440px",
		tablet: "768px",
		maxMobile: "767px",
		mobile: "480px",
	},
};

interface IPropsTheme {
	children: ReactNode;
}

export default function Theme({ children }: IPropsTheme) {
	return <ThemeProvider theme={theme}>{children}</ThemeProvider>;
}
