import Layout from "../components/layouts/article";
import {Container, Divider, Heading} from "@chakra-ui/react";


const Mio = () => {
    return (
        <Layout>
            <Container>
                <Divider useColor margin={"15px"}/>
                <Heading as={"h3"} fontSize={20} mb={4}>
                    Mio coming soon!
                </Heading>

                {/*} <SimpleGrid columns={[1, 1, 2]} gap={6}>
                    <Section valueY={10} delay={0.1}>
                        <WorkGridItem id="Mio1" title={"Mio"} thumbnail={mio1}>
                            Mio 1
                        </WorkGridItem>
                    </Section>
                    <Section valueY={10} delay={0.1}>
                        <WorkGridItem id="Mio1" title={"Mio"} thumbnail={mio1}>
                            Mio 2
                        </WorkGridItem>
                    </Section>
                    <Section valueY={10} delay={0.1}>
                        <WorkGridItem id="Mio1" title={"Mio"} thumbnail={mio1}>
                            Mio 3
                        </WorkGridItem>
                    </Section>
                    <Section valueY={10} delay={0.1}>
                        <WorkGridItem id="Mio1" title={"Mio"} thumbnail={mio1}>
                            Mio 4
                        </WorkGridItem>
                    </Section>
                    <Section valueY={10} delay={0.1}>
                        <WorkGridItem id="Mio1" title={"Mio"} thumbnail={mio1}>
                            Mio 5
                        </WorkGridItem>
                    </Section>
                    <Section valueY={10} delay={0.1}>
                        <WorkGridItem id="Mio1" title={"Mio"} thumbnail={mio1}>
                            Mio 6
                        </WorkGridItem>
                    </Section>

                </SimpleGrid>*/}
            </Container>
        </Layout>
    )
}

export default Mio