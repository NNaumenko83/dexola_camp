import React from "react";
import Icon from "../Icon/Icon";

type Props = {
	name: string;
};

export const SocialMediaLinksItem: React.FC<Props> = ({ name }) => {
	return (
		<li>
			<Icon name={name} width={32} height={32} />
		</li>
	);
};
