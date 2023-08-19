import React from "react";
import Icon from "../Icon/Icon";
import { Link } from "./SocialMediaLinksItem.styled";

type IProps = {
	name: string;
};

export const SocialMediaLinksItem: React.FC<IProps> = ({ name }) => {
	return (
		<li>
			<Link href="#" target="_blank" rel="noopener nofollow noreferrer">
				<Icon name={name} width={32} height={32} />
			</Link>
		</li>
	);
};
