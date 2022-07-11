import React, { useEffect, useState } from 'react'
import cities from "../lib/city.list.json"
import Router from "next/router"
import { SearchInput } from '../styles/layout.style'
import { SlugList } from "../styles/layout.style"
import { SlugItem } from "../styles/layout.style"
import { AnchorTag } from "../styles/layout.style"



export default function SearchBox({ placeholder }) {

    const [query, setQuery] = useState("")
    const [results, setResults] = useState([])

    const clearQuery = () => setQuery('')

    // CLEAR QUERY

    useEffect(() => {

        Router.events.on("routeChangeComplete", clearQuery)

        return () => {
            Router.events.off("routeChangeComplete", clearQuery)
        }

    }, [])



    const onChange = (e) => {
        const { value } = e.target;
        setQuery(value)

        let matchingCities = []


        if (value.length > 3) {
            for (let city of cities) {
                if (matchingCities.length >= 5) {
                    break;
                }

                const match = city.name.toLowerCase().startsWith(value.toLowerCase());


                if (match) {
                    const cityData = {
                        ...city,
                        slug: `${city.name.toLowerCase().replace(/ /g, "-")}-${city.id}`
                    }
                    matchingCities.push(cityData)
                }
            }
        }

        setResults(matchingCities)

    }

    const onChangeCity = city => {


        // Initialize an empty list
        let list = []

        // Check if there is anything saved in the storage
        if (localStorage.saved)
            try {
                // Parse the JSON from the Local Storage
                list = JSON.parse(localStorage.saved)
            } catch (err) {
                // do nothing
            }

        // Try/Catch in case JSON from the localStorage.saved is not valid
        // So it won' crash

        // Overwrite localStorage.saved as a JSON from a new list

        //  Where we put the actual city, followed by the last 3 cities from the LocalStorage
        localStorage.setItem("saved", JSON.stringify([city.name, ...list.slice(0, 3)]))

        // Redurect to the chosen location
        Router.push(`/location/${city.slug}`)


    }


    return (
        <div style={{ position: "relative" }}>
            <SearchInput type="text" value={query} onChange={onChange} placeholder={placeholder ? placeholder : ""} />

            {query.length > 3 && (
                <SlugList>
                    {results.length > 0 ? (
                        results.map((city) => (
                            <SlugItem key={city.slug}>
                                <div onClick={() => onChangeCity(city)}>
                                    <AnchorTag href={`/location/${city.slug}`}>
                                        {city.name}
                                        {city.state ? `, ${city.state} ` : ""}{" "}
                                        <span>({city.country})</span>
                                    </AnchorTag>
                                </div>
                            </SlugItem>
                        ))
                    ) : (
                        <li style={{ padding: "15px 0" }}>No result</li>
                    )}
                </SlugList>
            )
            }
        </div >
    )
}


