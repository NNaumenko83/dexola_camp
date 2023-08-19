import React from "react";
import icons from "../../assets/symbol-defs_min.svg";
import { StyledIcon } from "./Icon.styled";

interface IconProps {
	name: string;
	width?: number;
	height?: number;
}

const Icon: React.FC<IconProps> = ({ name, width = 24, height = 24, ...rest }) => (
	<StyledIcon width={width} height={height} {...rest}>
		<use href={icons + `#${name}`} />
	</StyledIcon>
);

export default Icon;
