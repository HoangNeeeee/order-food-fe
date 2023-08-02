import { IconDefinition, IconProp } from "@fortawesome/fontawesome-svg-core";
import { FontAwesomeIcon, FontAwesomeIconProps } from "@fortawesome/react-fontawesome";

interface FAIconProps extends FontAwesomeIconProps {
	icon: IconDefinition;
}

export const FAIcon = (props: FAIconProps) => {
	const { icon: faIcon } = props;
	return <FontAwesomeIcon className="flex justify-center mt-2" {...props} icon={faIcon as IconProp} />;
};
