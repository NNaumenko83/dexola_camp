import { iconsId } from "../../constans/icons";
import { SocialMediaLinksItem } from "../SocialMediaLinksItem/SocialMediaLinksItem";
import { List } from "./SocialMediaLinksList.styled";

export const SocialMediaLinksList = () => {
	return (
		<List>
			{[...Object.keys(iconsId)].map(item => (
				<SocialMediaLinksItem key={item} name={iconsId[item]} />
			))}
		</List>
	);
};
