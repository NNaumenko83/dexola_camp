import React from "react";
import icons from "../../assets/symbol-defs_min.svg";

interface IconProps {
	name: string;
	width?: number;
	height?: number;
}

const Icon: React.FC<IconProps> = ({ name, width = 24, height = 24, ...rest }) => (
	<svg width={width} height={height} {...rest}>
		<use href={icons + `#${name}`} />
	</svg>
);

export default Icon;
