import Layout from "../../components/layouts/article";
import {Container, Divider, Heading} from "@chakra-ui/react";


const Website = () => {
    return (
        <Layout>
            <Container>
                <Divider useColor margin={"15px"}/>
                <Heading as={"h3"} fontSize={20} mb={4}>
                    Website description coming soon!
                </Heading>
            </Container>
        </Layout>
    )
}

export default Website