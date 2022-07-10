import moment from "moment";
import Image from "next/image";
import { PrevDiv, WeeklyCard, WeeklyH3, WeeklyIconWrapper, WeeklyInner, WeeklyLeftContent, WeeklyRightContent, WeeklySpan, WeeklySunTimes, WeeklyTitle, WeeklyWrapper, WeeklyH4, WeeklyH5 } from "../styles/layout.style";

export default function WeeklyWeather({ weeklyWeather, timezone }) {
    return (
        <WeeklyWrapper>
            <WeeklyTitle>
                Weekly <span>Weather</span>
            </WeeklyTitle>

            {weeklyWeather.length > 0 && weeklyWeather.map((weather, index) => {
                if (index == 0) {
                    return;
                }

                return (
                    <WeeklyCard key={weather.dt}>
                        <WeeklyInner>
                            <WeeklyLeftContent>
                                <div style={{ paddingLeft: "15px", paddingRight: "15px", minWidth: "161px" }}>
                                    <WeeklyH3>
                                        {moment.unix(weather.dt).tz(timezone).format("dddd")}
                                    </WeeklyH3>

                                    <WeeklyH4>
                                        <span>{weather.temp.max.toFixed(0)}&deg;C</span>
                                        <span>{weather.temp.min.toFixed(0)}&deg;C</span>
                                    </WeeklyH4>
                                </div>

                                <WeeklySunTimes>
                                    <div style={{ marginRight: "20px" }}>
                                        <WeeklySpan>Sunrise</WeeklySpan>
                                        <WeeklySpan>
                                            {moment.unix(weather.sunrise).tz(timezone).format("LT")}
                                        </WeeklySpan>
                                    </div>
                                </WeeklySunTimes>

                                <div>
                                    <div>
                                        <WeeklySpan>Sunset</WeeklySpan>
                                        <WeeklySpan>
                                            {moment.unix(weather.sunset).tz(timezone).format("LT")}
                                        </WeeklySpan>
                                    </div>
                                </div>
                            </WeeklyLeftContent>

                            <WeeklyRightContent>
                                <WeeklyIconWrapper>
                                    <div>
                                        <Image src={`https://openweathermap.org/img/wn/${weather.weather[0].icon}@2x.png`} alt={weather.weather[0].description} layout="fill" />
                                    </div>
                                </WeeklyIconWrapper>

                                <WeeklyH5>{weather.weather[0].description}</WeeklyH5>
                            </WeeklyRightContent>
                        </WeeklyInner>
                    </WeeklyCard>
                )
            })}
        </WeeklyWrapper>
    )
}
