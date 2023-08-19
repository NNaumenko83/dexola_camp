import { iconsId } from "../../constans/icons";
import { SocialMediaLinksItem } from "../SocialMediaLinksItem/SocialMediaLinksItem";

export const SocialMediaLinksList = () => {
	return (
		<ul>
			{[...Object.keys(iconsId)].map(item => (
				<SocialMediaLinksItem key={item} name={iconsId[item]} />
			))}
		</ul>
	);
};
