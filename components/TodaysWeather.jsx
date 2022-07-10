import Image from "next/image"
import moment from "moment-timezone"
import { TodayWrapper, TodayInnerWrapper, TodayH1, TodayH2, TodaySpan, TodaySunTimes, TodaySunSpan, TodayIconWrapper, TodayRightContent } from "../styles/layout.style"

export default function TodaysWeather({ city, weather, timezone }) {


    return (
        <TodayWrapper>
            <TodayInnerWrapper>
                <div>
                    <TodayH1>{city.name} ({city.country})</TodayH1>

                    <TodayH2>
                        <TodaySpan>{weather.temp.max.toFixed(0)}&deg;C</TodaySpan>
                        <TodaySpan>{weather.temp.min.toFixed(0)}&deg;C</TodaySpan>
                    </TodayH2>

                    <TodaySunTimes>
                        <div style={{ marginRight: "20px" }}>
                            <TodaySunSpan>Sunrise</TodaySunSpan>
                            <TodaySunSpan>{moment.unix(weather.sunrise).tz(timezone).format("LT")}</TodaySunSpan>
                        </div>

                        <div>
                            <TodaySunSpan>Sunset</TodaySunSpan>
                            <TodaySunSpan>{moment.unix(weather.sunset).tz(timezone).format("LT")}</TodaySunSpan>
                        </div>
                    </TodaySunTimes>
                </div>

                <TodayRightContent>
                    <TodayIconWrapper>
                        <div>
                            <Image src={`https://openweathermap.org/img/wn/${weather.weather[0].icon}@2x.png`} alt={weather.weather[0].description} layout="fill" />
                        </div>
                    </TodayIconWrapper>
                    <h3>
                        {weather.weather[0].description}
                    </h3>
                </TodayRightContent>
            </TodayInnerWrapper>
        </TodayWrapper>
    )
}
