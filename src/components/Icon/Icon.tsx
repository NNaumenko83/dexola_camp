import React from "react";
import icons from "../../assets/symbol-defs_min.svg";
import { StyledIcon } from "./Icon.styled";

interface IconProps {
	name: string;
	width?: number;
	height?: number;
	visible?: boolean;
}

const Icon: React.FC<IconProps> = ({ name, width = 24, height = 24, visible = true, ...rest }) => (
	<StyledIcon width={width} height={height} $visible={visible} {...rest}>
		<use href={icons + `#${name}`} />
	</StyledIcon>
);

export default Icon;
