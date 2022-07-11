import cities from "../../lib/city.list.json"
import Head from "next/head"
import TodaysWeather from "../../components/TodaysWeather"
import moment from "moment-timezone"
import HourlyWeather from "../../components/HourlyWeather"
import WeeklyWeather from "../../components/WeeklyWeather"
import SearchBox from "../../components/SearchBox"
import Link from "next/link"
import { AnchorHomeLink, Container, PageWrapper } from "../../styles/layout.style"
import { useSession } from 'next-auth/react'
import AccessDenied from "../../components/AccessDenied"



export async function getServerSideProps(context) {
    const city = getCity(context.params.city)

    // IF THERE IS NO CITY, REDIRECT TO 404
    if (!city) {
        return {
            notFound: true,
        }
    }


    const res = await fetch(`https://api.openweathermap.org/data/2.5/onecall?lat=${city.coord.lat}&lon=${city.coord.lon}&appid=${process.env.API_KEY}&units=metric&exclude=minutely`)

    const data = await res.json()

    // IF THERE IS NO DATA, REDIRECT TO 404
    if (!data) {
        return {
            notFound: true
        }
    }

    const hourlyWeather = getHourlyWeather(data.hourly, data.timezone);

    return {
        props: {
            city: city,
            timezone: data.timezone,
            currentWeather: data.current,
            dailyWeather: data.daily,
            hourlyWeather: hourlyWeather,
        }
    }
}

const getCity = (param) => {
    const cityParam = param.trim();
    // GET THE ID OF THE CITY
    const splitCity = cityParam.split("-")
    const id = splitCity[splitCity.length - 1]

    if (!id) {
        return null;
    }

    const city = cities.find(city => city.id.toString() == id)

    if (city) {
        return city;
    } else {
        return null;
    }
}

const getHourlyWeather = (hourlyData, timezone) => {
    const endOfDay = moment().tz(timezone).endOf("day").valueOf();
    // TURN FROM MILISECONDS TO SECONDS
    const endOfDayTimeStamp = Math.floor(endOfDay / 1000)

    const todaysData = hourlyData.filter(data => data.dt < endOfDayTimeStamp)

    return todaysData

}


export default function City({ hourlyWeather, dailyWeather, city, timezone }) {

    const { data: session, status } = useSession();

    if (status === "loading") {
        return <p>Loading..</p>
    }

    if (status === "unauthenticated") {
        return <AccessDenied />
    }





    return (
        <>

            <Head>
                <title>{city.name} Weather</title>
            </Head>
            <PageWrapper>

                <Container>
                    <Link href="/">
                        <AnchorHomeLink>&larr; Home</AnchorHomeLink>
                    </Link>
                    <SearchBox placeholder="Search for another location.." />
                    <TodaysWeather city={city} weather={dailyWeather[0]} timezone={timezone} />
                    <HourlyWeather hourlyWeather={hourlyWeather} timezone={timezone} />
                    <WeeklyWeather weeklyWeather={dailyWeather} timezone={timezone} />
                </Container>
            </PageWrapper >

        </>
    )
}




