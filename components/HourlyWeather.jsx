import moment from "moment"
import Image from "next/image"
import { HourlyBoxInner, HourlyBoxWrapper, HourlyInner, HourlyWrapper } from "../styles/layout.style"

export default function HourlyWeather({ hourlyWeather, timezone }) {

    return (
        <HourlyWrapper>
            <HourlyInner>
                {hourlyWeather.length > 0 && hourlyWeather.map((weather, index) => (
                    <HourlyBoxWrapper key={weather.dt}>
                        <HourlyBoxInner>
                            <span className={`${index == 0 ? "now" : ""}`}>
                                {index == 0 ? "Now" : moment.unix(weather.dt).tz(timezone).format("LT")}
                            </span>
                            <Image src={`https://openweathermap.org/img/wn/${weather.weather[0].icon}@2x.png`} alt={weather.weather[0].description} width="100" height="100" />
                            <span>{weather.temp.toFixed(0)}&deg;C</span>
                        </HourlyBoxInner>
                    </HourlyBoxWrapper>
                ))}
            </HourlyInner>
        </HourlyWrapper>
    )
}
