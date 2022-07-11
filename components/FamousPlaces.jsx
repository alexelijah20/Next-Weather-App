import React, { useEffect, useState } from 'react'
import { PlacesWrapper, PlacesRow, PlacesBox, PlacesTitle, PlacesAnchorTag } from '../styles/layout.style'

export default function FamousPlaces() {

    const [saved, setSaved] = useState([])

    useEffect(() => {

        let list = []

        // Parse again the saved locations when the user reaches the page with the desired city
        if (localStorage.saved)
            try {
                list = JSON.parse(localStorage.saved)
            } catch (err) {
                // do nothing
            }

        // We save in the state (memory) the found cities in the LocalStorage
        setSaved(list)

    }, [])

    return (
        <PlacesWrapper>
            <PlacesRow>
                {/* Display the saved city */}
                {saved.map((place, index) => (
                    <PlacesBox key={index}>
                        <PlacesAnchorTag>
                            {/* <PlacesImagesWrapper>
                                <Image src="https://placehold.co/150x200" priority={true} alt={`${place.name} Image`} layout="fill" objectFit="cover" />
                            </PlacesImagesWrapper> */}
                            <PlacesTitle>{place}</PlacesTitle>
                        </PlacesAnchorTag>
                    </PlacesBox>
                ))}
            </PlacesRow>
        </PlacesWrapper>
    )
}
