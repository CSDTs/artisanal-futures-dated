import { Flex, Text } from "@chakra-ui/react";
import PropTypes from "prop-types";

const PanelHeading = ({ title, subtitle, textColor }) => {
	return (
		<Flex mb="40px">
			<Flex direction="column" align="center" justify="center" textAlign="center" w="80%" mx="auto">
				<Text color={textColor} fontSize="lg" fontWeight="bold" mb="4px">
					{title}
				</Text>
				<Text color="gray.400" fontWeight="normal" fontSize="sm">
					{subtitle}
				</Text>
			</Flex>
		</Flex>
	);
};

PanelHeading.propTypes = {
	title: PropTypes.string,
	subtitle: PropTypes.string,
	textColor: PropTypes.string,
};

export default PanelHeading;