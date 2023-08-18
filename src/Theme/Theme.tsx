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
		buttonBackgroundColorColor: "#B3B3B3",
	},

	fontSizes: {
		title: {
			web: "140px",
			tablet: "112px",
			mobile: "48px",
		},

		subTitle: {
			web: "24px",
			tablet: "20px",
			mobile: "16px",
		},

		body: {
			web: "18px",
			tablet: "16px",
			mobile: "14px",
		},
	},

	fontWeights: {
		normal: 400,
		medium: 500,
	},

	breakpoints: {
		web: "1440px",
		tablet: "768px",
		mobile: "480px",
	},
};

interface IPropsTheme {
	children: ReactNode;
}

export default function Theme({ children }: IPropsTheme) {
	return <ThemeProvider theme={theme}>{children}</ThemeProvider>;
}
