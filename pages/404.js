import NextLink from 'next/link'
import {
    Box,
    Heading,
    Text,
    Container,
    Divider,
    Button
} from "@chakra-ui/react";

const NotFound = () => {
    return (
        <Container>
            <Heading as={"h1"}>Not Found</Heading>
            <Text>I don&apos;t know what you expected to find, but here is nothing.
                I promise.
                </Text>
            <Divider my={6}/>

            <Box my={6} align={"center"}>
                <NextLink href={"/"}>
                    <Button colorScheme={"purple"}>Return to home</Button>
                </NextLink>
            </Box>
        </Container>
    )
}

export default NotFound