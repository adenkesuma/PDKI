"use client"
import { useState } from "react"
import Sidebar from "./sidebar"

const NavbarAdmin = () => {
    const [selectedCategory, setSelectedCategory] = useState<string>('dashboard')

    return (
        <nav className='p-4 bg-gray-100 relative'>
            <Sidebar selectedCategory={selectedCategory} setSelectedCategory={setSelectedCategory} />
        </nav>
    )
}

export default NavbarAdmin