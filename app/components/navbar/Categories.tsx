'use client';

import CategoryBox from "../CategoryBox";


import { TbBeach, TbPool } from 'react-icons/tb'
import { GiCampingTent } from 'react-icons/gi'
import { MdOutlineVilla, MdPark } from 'react-icons/md';
import { FaSkiingNordic } from 'react-icons/fa';
import { GoKey } from 'react-icons/go';
import { GiIsland, GiFlyingFox } from 'react-icons/gi';

export const categories = [
    {
        label: 'Plage',
        icon: TbBeach,
        description: 'Cette propriété est proche de la plage!',
    },
    {
        label: 'Camping',
        icon: GiCampingTent,
        description: 'Vous logerez dans un caomping'
    },
    {
        label: 'Moderne',
        icon: MdOutlineVilla,
        description: 'Cette propriété est moderne'
    },
    {
        label: 'Nouveautés',
        icon: GoKey,
        description: 'Cette propriété est moderne'
    },
    {
        label: 'Ski',
        icon: FaSkiingNordic,
        description: 'Cette propriété est moderne'
    },
    {
        label: 'Iles',
        icon: GiIsland,
        description: 'Cette propriété est moderne'
    },
    {
        label: 'Parcs régionaux',
        icon: MdPark,
        description: 'Cette propriété est moderne'
    },
    {
        label: 'Sensations fortes',
        icon: GiFlyingFox,
        description: 'Cette propriété est moderne'
    },
    {
        label: 'Piscine',
        icon: TbPool,
        description: 'Cette propriété possède une piscine privée ou a proximité'
    },
]

const Categories = () => {
    return (

        <div className="
                    flex
                    flex-row
                    items-center
                    justify-center
                    pt-4
                    overflow-x-auto
                    overscroll-behavior-inline-contain
                "
        >
            {categories.map((item) => (
                <CategoryBox
                    key={item.label}
                    label={item.label}
                    icon={item.icon}
                />
            ))}
        </div>
    )
}

export default Categories;