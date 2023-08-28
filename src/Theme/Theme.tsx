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
		//ButtonColors
		buttonTextColor: "#FFFFFF",
		buttonBackgroundColor: "#272A2E",
		buttonHoverBackgroundColor: "#B3B3B3",
		// SocmediaColors
		socMediaIcons: "#FFFFFF",
		socMediaIconsHover: "#2F2F2F",
		// Hero title color
		heroTitle: "#FFFFFF",
		// Title color
		title: "#FFFFFF",
		// Subtitle color
		subtitle: "#FFFFFF",
		// Card border color
		borderCard: "#09237E",
		// Bottom border for title
		titleBottomBorder: "#FFFFFF",
		// Hero images list border
		heroImagesListBorder: "#204FFE",
		// Hero images list border
		heroImagesBorder: "#204FFE",
		// header bottom border
		headerBottomColor: "#204FFE",
		// footer borders
		footerBordersColor: "#204FFE",
		// Table row second background
		tableRowSecondBackground: "#080B27",
		// Table head color
		tableHead: "#FFFFFF",
		// Table body color
		tableBody: "#FFFFFF",
		// Input border bottom
		inputBorderBottom: "#FFFFFF",
		// Input Error border bottom
		inputErrorBorderBottom: "#EB3795",
		// Input Star Color
		inputStarColor: "#EB3795",
		// Input text color
		inputTextColor: "#FFFFFF",
		// Input text color
		inputPlaceholder: "#B3B3B3",
		// Error message
		errorMessageColor: "#EB3795",
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

		tableHead: {
			web: "1.5rem",
			tablet: "1.25rem",
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

		error: "0.8125rem",

		heroTitle: { web: "21.25rem", tablet: "17.5rem", mobile: "7.5rem" },
	},

	fontWeights: {
		// normal: 400,
		medium: 500,
	},

	breakpoints: {
		web: "1440px",
		tablet: "744px",
		maxMobile: "743px",
		mobile: "480px",
	},
};

interface IPropsTheme {
	children: ReactNode;
}

export default function Theme({ children }: IPropsTheme) {
	return <ThemeProvider theme={theme}>{children}</ThemeProvider>;
}
