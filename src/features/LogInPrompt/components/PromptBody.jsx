import {
	Box,
	Button,
	Checkbox,
	Flex,
	FormControl,
	FormLabel,
	Heading,
	Input,
	Link,
	Stack,
	Text,
	useColorModeValue,
} from "@chakra-ui/react";

export default function PromptBody() {
	return (
		<Stack spacing={8} mx={"auto"} maxW={"lg"} py={12} px={6}>
			<Stack align={"left"}>
				<Heading fontSize={"4xl"}>Log back in </Heading>

				<Text fontSize={"lg"} color={"gray.600"}>
					to view your account changes
				</Text>
			</Stack>
			<Box rounded={"lg"} bg={useColorModeValue("white", "gray.700")} boxShadow={"lg"} p={8}>
				<Stack spacing={4}>
					<FormControl id="email">
						<FormLabel>Email address</FormLabel>
						<Input type="email" />
					</FormControl>
					<FormControl id="password">
						<FormLabel>Password</FormLabel>
						<Input type="password" />
					</FormControl>
					<Stack spacing={10}>
						<Stack direction={{ base: "column", sm: "row" }} align={"start"} justify={"space-between"}>
							<Checkbox>Remember me</Checkbox>
							<Link color={"blue.400"}>Forgot password?</Link>
						</Stack>
						<Button
							bg={"blue.400"}
							color={"white"}
							_hover={{
								bg: "blue.500",
							}}>
							Sign in
						</Button>
					</Stack>
				</Stack>
			</Box>
		</Stack>
	);
}