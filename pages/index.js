import Head from "next/head"
import SearchBox from "../components/SearchBox"
import FamousPlaces from "../components/FamousPlaces"
import { Wrapper, Container } from "../styles/layout.style"
import ChangeColor from "../components/ChangeColor"
import { useSelector } from "react-redux"



export default function Home() {

  const themeColor = useSelector((state) => state.theme.value)

  return (
    <div>
      <Head>
        <title>Weather App </title>
      </Head>

      <Wrapper style={{ backgroundColor: themeColor }}>
        <Container>
          <SearchBox placeholder="Search for a city" />
          <FamousPlaces />
          <ChangeColor />
        </Container>
      </Wrapper>
    </div>
  )
}



