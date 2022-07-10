import React from 'react'
import Image from "next/image"
import Link from "next/link"
import MoscowImage from "../public/images/Moscow.jpg"
import OdessaImage from "../public/images/Odessa.jpg"
import BucharestImage from "../public/images/Bucharest.jpg"
import ParisImage from "../public/images/Paris.jpg"
import { PlacesWrapper, PlacesRow, PlacesImagesWrapper, PlacesBox, PlacesSpan, PlacesAnchorTag } from '../styles/layout.style'

const places = [
    {
        name: "Moscow",
        image: MoscowImage,
        url: "/location/moscow-524901",
    },
    {
        name: "Odessa",
        image: OdessaImage,
        url: "location/odessa-698740",
    },
    {
        name: "Bucharest",
        image: BucharestImage,
        url: "/location/bucharest-683506",
    },
    {
        name: "Paris",
        image: ParisImage,
        url: "/location/paris-2968815",
    },
]

export default function FamousPlaces() {


    return (
        <PlacesWrapper>
            <PlacesRow>
                {places.length > 0 && places.map((place, index) => (
                    <PlacesBox key={index}>
                        <Link href={place.url}>
                            <PlacesAnchorTag>
                                <PlacesImagesWrapper>
                                    <Image src={place.image} alt={`${place.name} Image`} layout="fill" objectFit="cover" />
                                </PlacesImagesWrapper>

                                <PlacesSpan>{place.name}</PlacesSpan>
                            </PlacesAnchorTag>
                        </Link>
                    </PlacesBox>
                ))}
            </PlacesRow>
        </PlacesWrapper>
    )
}
