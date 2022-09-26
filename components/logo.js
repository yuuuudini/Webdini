import Link from 'next/link'
import Image from 'next/image'
import {Text, useColorModeValue} from "@chakra-ui/react";
import styled from '@emotion/styled'
import "@fontsource/press-start-2p"

const LogoBox = styled.span`
  font-weight: bold;
  font-size: 18px;
  display: inline-flex;
  align-items: center;
  height: 30px;
  line-height: 20px;
  padding: 10px;
  
  &:hover img{
    transform:rotate(20deg);
  }
`

const Logo = () => {
    const logo = `/images/logo${useColorModeValue('light', 'dark')}.png`
    return (
        <Link href={"/"}>
            <a>
                <LogoBox>
                    <Image src={logo} width={50} height={50} alt={"logo"}/>
                    <Text
                        color={useColorModeValue('gray.800', 'whiteAlpha.900')}
                        fontFamily={"'Press Start 2P'"}
                        fontSize={30}
                        ml={2}
                        mt={4}
                    >

                        Webdini
                    </Text>
                </LogoBox>
            </a>
        </Link>

    )
}

export default Logo

