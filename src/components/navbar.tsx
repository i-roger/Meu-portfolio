import { Link } from 'react-router-dom'

export default function navbar() {
    return(
        <nav className='sticky z-20 top-0 bg-zinc-500 p-5 flex justify-center gap-5 mb-16'>
            <Link className='hover:scale-110 duration-500 text-zinc-50 font-semibold text-2xl' to="/">Home</Link>
            <Link className='hover:scale-110 duration-500 text-zinc-50 font-semibold text-2xl' to="/sobre">Sobre</Link>
            <Link className='hover:scale-110 duration-500 text-zinc-50 font-semibold text-2xl' to="/contato">Contato</Link>

        </nav>
    )
}