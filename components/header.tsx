import React from 'react'
import Link from 'next/link'
import { IoBagAdd } from 'react-icons/io5'

type Props = {}

const Header = (props: Props) => {
    return (
        <header className='w-10/12 mx-auto'>
            <div className='flex p-4 justify-between items-center'>
                <Link href='/' className='text-3xl font-semibold text-red-700' >Easy Buy</Link>
                <Link href='/' className='text-white bg-sky-900 rounded-full px-4 py-1.5 flex items-center justify-center gap-2 hover:bg-sky-800 active:scale-95 transition-all'> <IoBagAdd/> Upload new products</Link>
            </div>
        </header>
    )
}

export default Header