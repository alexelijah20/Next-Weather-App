import React, { useEffect, useState } from 'react'
import cities from "../lib/city.list.json"
import Link from "next/link"
import Router from "next/router"
import { SearchInput } from '../styles/layout.style'
import { SlugList } from "../styles/layout.style"
import { SlugItem } from "../styles/layout.style"
import { AnchorTag } from "../styles/layout.style"



export default function SearchBox({ placeholder }) {
    const [query, setQuery] = useState("")
    const [results, setResults] = useState([])


    // CLEAR QUERY
    useEffect(() => {
        const clearQuery = () => setQuery("")

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

        return setResults(matchingCities)
    }


    return (
        <div style={{ position: "relative" }}>
            <SearchInput type="text" value={query} onChange={onChange} placeholder={placeholder ? placeholder : ""} />

            {query.length > 3 && (
                <SlugList>
                    {results.length > 0 ? (
                        results.map((city) => (
                            <SlugItem key={city.slug}>
                                <Link href={`/location/${city.slug}`}>
                                    <AnchorTag href="">
                                        {city.name}
                                        {city.state ? `, ${city.state} ` : ""}{" "}
                                        <span>({city.country})</span>
                                    </AnchorTag>
                                </Link>
                            </SlugItem>
                        ))
                    ) : (
                        <li style={{ padding: "15px 0" }}>No result</li>
                    )}
                </SlugList>
            )}
        </div>
    )
}


