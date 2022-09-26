import {Container, Badge, Link, List, ListItem} from '@chakra-ui/react'
import {ExternalLinkIcon} from "@chakra-ui/icons";
import {Title, WorkImage, Meta} from '../../components/work'
import P from '../../components/paragraph'
import Layout from '../../components/layouts/article'

const Work = () => {
    return (
        <Layout title={"Manim"}>
            <Container maxW={"700px"}>
                <Title>
                    Manim <Badge>2022</Badge>
                </Title>
                <P>
                    Manim is an open-source Python library, written by {' '}
                    <Link href={"https://www.youtube.com/c/3blue1brown"}>3Blue1Brown</Link>,
                    that allows you to make animated math videos. Our task was to extend the library
                    with new packages, which are related to algorithm and datastructures. So we
                    implemented following datastructures: Stack, Queue, BinaryTree, Graph, single and double linked
                    (Ring-)List. Feel free to take a look.
                </P>
                <List ml={4} my={4}>
                    <ListItem>
                        <Meta>Github</Meta>
                        <Link href={'/works'}>soon <ExternalLinkIcon mx={"2px"}/></Link>
                    </ListItem>
                    <ListItem>
                        <Meta>Language</Meta>
                        <span>Python </span>
                    </ListItem>
                </List>
                <WorkImage src={"/images/works/manim1.png"} alt={"soon"} />
                <WorkImage src={"/images/works/manim2.png"} alt={"soon"} />
            </Container>
        </Layout>
    )
}

export default Work