import { AvatarImage, AvatarWrapper } from "./Avatar.styled";
import { nftAvatars } from "../../constans/avatars";

interface IAvatarProps {
	indexItem: number;
}

export const Avarar: React.FC<IAvatarProps> = ({ indexItem }) => {
	return (
		<AvatarWrapper>
			<AvatarImage
				srcSet={`${nftAvatars[indexItem][0]} 1x, ${nftAvatars[indexItem][1]} 2x`}
				src={nftAvatars[indexItem][0]}
				alt="Розробка інтерфейсу для смартфонів"
				width="150px"
				height="311px"
			/>
		</AvatarWrapper>
	);
};
