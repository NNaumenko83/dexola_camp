import { styled } from "styled-components";

export const FooterContainer = styled.div`
	padding-top: 4.0625rem;
	padding-bottom: 2.125rem;

	display: grid;

	grid-template-areas:
		"list"
		"design"
		"copy";

	line-height: 1.28;

	@media screen and (min-width: ${props => props.theme.breakpoints.tablet}) {
		padding-top: 1.75rem;
		padding-bottom: 1.75rem;

		font-size: ${props => props.theme.fontSizes.body.tablet};
		line-height: 1.31;

		grid-template-areas:
			"design list"
			"copy list";
	}

	@media screen and (min-width: ${props => props.theme.breakpoints.web}) {
		position: relative;
		font-size: ${props => props.theme.fontSizes.body.web};
		line-height: 1.33;
		grid-template-areas: "design list copy";
		/* border: 1px solid ${props => props.theme.colors.footerBordersColor}; */

		&::before,
		&::after {
			content: "";
			position: absolute;
			top: 0;
			width: 1px;
			height: 100%;
			background-color: ${props => props.theme.colors.footerBordersColor};
		}

		&::before {
			left: 33.33%;
		}

		&::after {
			left: 66.67%;
		}
	}
`;

export const DesignedByText = styled.p`
	grid-area: design;
	align-self: end;
	justify-self: center;

	@media screen and (max-width: ${props => props.theme.breakpoints.maxMobile}) {
		margin-top: 8px;
	}

	@media screen and (min-width: ${props => props.theme.breakpoints.tablet}) {
		justify-self: start;
	}

	@media screen and (min-width: ${props => props.theme.breakpoints.web}) {
		align-self: center;
		justify-self: center;
	}
`;

export const CopyrightText = styled.p`
	grid-area: copy;
	justify-self: center;

	@media screen and (min-width: ${props => props.theme.breakpoints.tablet}) {
		justify-self: start;
	}
	@media screen and (min-width: ${props => props.theme.breakpoints.web}) {
		align-self: center;
		justify-self: center;
	}
`;

export const Border = styled.div``;
