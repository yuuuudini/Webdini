import {Container, Box, Heading, Icon, List, ListItem, Image, Button, Divider, Link} from '@chakra-ui/react'
import Section from '../components/section'
import Paragraph from "../components/paragraph"
import NextLink from "next/link";
import {ChevronRightIcon} from "@chakra-ui/icons";
import Layout from "../components/layouts/article";
import {BioSection, BioYear} from "../components/bio"
import {
    IoLogoInstagram,
    IoLogoGithub,
    IoLogoDiscord
} from "react-icons/io5";


const Page = () => {
    return (
        <Layout>
            <Container maxW={'900px'}>
                <Divider my={"15px"}/>

                <Box display={{md: 'flex'}}>
                    <Box flexGrow={1} >
                        <Heading as={"h2"} variant={"page-title"}>
                            Dominik &apos;dini&apos; Apel
                        </Heading>
                        <Heading variant={"looks-cool"}>
                            Computer Science Student
                        </Heading>
                        <Divider my={"15px"}/>
                        <Paragraph>
                            Hey! You might know me - or not, I&apos;m
                            just some random coding human being, trying to get better in frontend development.
                            This homepage will grow and become (hopefully) better from time to time.
                            This website is based on a tutorial from Takuya Matsuyama, check him out on {' '}
                            <Link href={'https://www.youtube.com/c/devaslife'}>Youtube</Link>.
                        </Paragraph>
                    </Box>
                    <Section valueX={10} delay={0.1}>
                        <Box flexShrink={0} mt={{base: 4, md: 0}} ml={{md: 6}} align={"center"}>
                            <Image borderColor={"whiteAlpha.800"}
                                   borderWidth={4}
                                   borderStyle={"solid"}
                                   maxWidth={"200px"}
                                   display={"inline-block"}
                                   borderRadius={"full"}
                                   src={"images/pfpdini.jpg"}
                                   alt={"Profile Image"}/>
                        </Box>
                    </Section>
                </Box>

                <Section valueX={-10} delay={0.1}>
                    <Heading as={"h3"} variant={"section-title"}>
                        Work
                    </Heading>
                    <Paragraph>
                        Poggers Highlights incoming, but check-out my portfolio!
                    </Paragraph>
                    <Box align={"center"} my={4}>
                        <NextLink href={"/works"}>
                            <Button rightIcon={<ChevronRightIcon/>} colorScheme={'purple'}>
                                My portfolio
                            </Button>
                        </NextLink>
                    </Box>
                </Section>
                <Section valueX={-10} delay={0.3}>
                    <Heading as={"h3"} variant={"section-title"}>
                        Bio
                    </Heading>
                    <BioSection>
                        <BioYear>Jul 2000</BioYear>
                        Born in Plauen, Germany.
                    </BioSection>
                    <BioSection>
                        <BioYear>Oct 2020 - present</BioYear>
                        Bachelor of Science Student in Computational visualistics at Otto-von-Guericke University.
                    </BioSection>
                    <BioSection>
                        <BioYear>Mar 2022 - present</BioYear>
                        Working as Student trainee at regiocom with focus on frontend/backend development.
                    </BioSection>
                </Section>
                <Section valueX={-10} delay={0.5}>
                    <Heading as={"h3"} variant={"section-title"}>
                        Mio
                    </Heading>
                    <Paragraph>
                        Mio Section coming soon™.
                    </Paragraph>
                </Section>
                <Section valueX={-10} delay={0.7}>
                    <Heading as={"h3"} variant={"section-title"}>
                        On the web
                    </Heading>
                    <List>
                        <ListItem>
                            <NextLink href={"https://github.com/yuuuudini"} target={"_blank"}>
                                <Button variant={"ghost"} colorScheme={"purple"} leftIcon={<Icon as={IoLogoGithub}/>}>
                                    @yuuuudini
                                </Button>
                            </NextLink>
                        </ListItem>
                        <ListItem>
                            <NextLink href={"https://instagram.com/yuuuudini"} target={"_blank"}>
                                <Button variant={"ghost"} colorScheme={"purple"} leftIcon={<Icon as={IoLogoInstagram}/>}>
                                    @yuuuudini
                                </Button>
                            </NextLink>
                        </ListItem>
                        <ListItem>
                            <NextLink href={"https://www.discordapp.com/users/294916935546830849"} target={"_blank"}
                                  disable={true}>
                                <Button variant={"ghost"} colorScheme={"purple"} leftIcon={<Icon as={IoLogoDiscord}/>}>
                                    yuuuudini#0001
                                </Button>
                            </NextLink>
                        </ListItem>

                    </List>
                </Section>
            </Container>
        </Layout>
    )
}

export default Page