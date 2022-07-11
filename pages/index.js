import Head from "next/head"
import SearchBox from "../components/SearchBox"
import FamousPlaces from "../components/FamousPlaces"
import { Wrapper, Container, AnchorSignOut, ButtonsWrapper } from "../styles/layout.style"
import ChangeColor from "../components/ChangeColor"
import Image from "next/image"
import { useSelector } from "react-redux"
import { useSession, signIn, signOut } from 'next-auth/react'
import { useEffect, useState } from "react"


export default function Home() {

  const [results, setResults] = useState({})
  const { data: session } = useSession();

  useEffect(() => {
    const successCallBack = async (position) => {
      const res = await fetch(`https://api.openweathermap.org/data/2.5/onecall?lat=${position.coords.latitude}&units=metric&lon=${position.coords.longitude}&exclude={part}&appid=bafeaacf382d2a409b06051a7050bbf4`)
      const data = await res.json()
      if (data)
        setResults(data)

    }

    const errorCallBack = (err) => {
      console.error(err)
    }

    navigator.geolocation.getCurrentPosition(successCallBack, errorCallBack), {
      enableHighAccuracy: true,
      timeout: 5000
    }
  }, [])


  const handleSignin = (e) => {
    e.preventDefault()
    signIn()
  }
  const handleSignout = (e) => {
    e.preventDefault()
    signOut()
  }


  const themeColor = useSelector((state) => state.theme.value)

  return (
    <div>
      <Head>
        <title>Weather App </title>
      </Head>

      <Wrapper style={{ backgroundColor: themeColor }}>
        <Container>
          <h1>Temperature in your location is : {results.current ? results.current.temp.toFixed(0) : ".."}&deg;C</h1>
          <SearchBox placeholder="Search for a city" />
          <FamousPlaces />
          <ChangeColor />
          {session &&
            <ButtonsWrapper>
              <h3>{session.user.email}</h3>
              <h3>{session.user.name}</h3>
              <Image src={session.user.image} width={200} height={200} alt="20" />
              <AnchorSignOut onClick={handleSignout}>Sign out</AnchorSignOut>
              {!session && <AnchorSignOut onClick={handleSignin}>Sign in</AnchorSignOut>}
            </ButtonsWrapper>
          }
          <ButtonsWrapper>
            {!session && <AnchorSignOut onClick={handleSignin}>Sign in</AnchorSignOut>}
          </ButtonsWrapper>
        </Container>
      </Wrapper>
    </div >
  )
}



