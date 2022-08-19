import {
	Avatar,
	Link,
	Box,
	Button,
	Checkbox,
	Flex,
	FormControl,
	FormLabel,
	Grid,
	Icon,
	Input,
	Stack,
	VisuallyHidden,
	chakra,
	Tab,
	TabList,
	Switch,
	TabPanel,
	TabPanels,
	Tabs,
	Text,
	useColorModeValue,
	useDisclosure,
	FormHelperText,
	Image,
	Modal,
	ModalOverlay,
	ModalContent,
	ModalHeader,
	ModalFooter,
	ModalBody,
	ModalCloseButton,
	Textarea,
} from "@chakra-ui/react";
import { useState } from "react";

export default function PanelNavigation({ handleSubmit, handlePrev, handleNext, prevColor, isSubmit = false }) {
	const [loading, setLoading] = useState(false);
	return (
		<Flex justify={handlePrev ? "space-between" : "end"}>
			{handlePrev && (
				<Button
					variant="no-hover"
					bg={prevColor}
					alignSelf="flex-end"
					mt="24px"
					w={{ sm: "75px", lg: "100px" }}
					h="35px"
					onClick={handlePrev}
				>
					<Text fontSize="xs" color="gray.700" fontWeight="bold">
						PREV
					</Text>
				</Button>
			)}
			<Button
				variant="no-hover"
				bg="linear-gradient(81.62deg, #f13860 2.25%, #f51928 79.87%)"
				alignSelf="flex-end"
				mt="24px"
				w={{ sm: "75px", lg: "100px" }}
				h="35px"
				onClick={() => {
					setLoading(true);
					handleSubmit().then(() => setLoading(false));
				}}
				isLoading={loading}
			>
				<Text fontSize="xs" color="#fff" fontWeight="bold">
					Submit to WP
				</Text>
			</Button>
			{handleNext && (
				<Button
					variant="no-hover"
					bg="linear-gradient(81.62deg, #313860 2.25%, #151928 79.87%)"
					alignSelf="flex-end"
					mt="24px"
					w={{ sm: "75px", lg: "100px" }}
					h="35px"
					onClick={isSubmit ? handleSubmit : handleNext}
				>
					<Text fontSize="xs" color="#fff" fontWeight="bold">
						{isSubmit ? "SUBMIT" : "NEXT"}
					</Text>
				</Button>
			)}
		</Flex>
	);
}