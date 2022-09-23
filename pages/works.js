import {Container, Divider, Heading, SimpleGrid} from "@chakra-ui/react";
import Section from '../components/section'
import {WorkGridItem} from "../components/grid-item";
import Layout from "../components/layouts/article";

import thumbWebsite from '../public/images/works/websitethumb.png'
import thumbManim from '../public/images/works/manimthumb.png'

const Works = () => {
    return (
        <Layout>
            <Container>
                <Divider useColor margin={"15px"}/>
                <Heading as={"h3"} fontSize={20} mb={4}>
                    Works
                </Heading>

                <SimpleGrid columns={[1, 1, 2]} gap={6}>
                    <Section valueY={10} delay={0.1}>
                        <WorkGridItem id="website" title={"Website"} thumbnail={thumbWebsite}>
                            My first Website
                        </WorkGridItem>
                    </Section>
                    <Section valueY={10} delay={0.2}>
                        <WorkGridItem id="sopro" title={"Software Project"} thumbnail={thumbManim}>
                            Manim Software Project
                        </WorkGridItem>
                    </Section>
                </SimpleGrid>
            </Container>
        </Layout>
    )
}

export default Works