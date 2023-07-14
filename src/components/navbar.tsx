import { Link } from 'react-router-dom'

export default function navbar() {
    return(
        <nav className='sticky z-20 top-0 bg-zinc-800 p-5 flex justify-center gap-5'>
            <a className='hover:scale-110 duration-500 text-zinc-50 font-semibold text-2xl' href="#sobremim">Home</a>
            <a className='hover:scale-110 duration-500 text-zinc-50 font-semibold text-2xl' href="#sobremim">Sobre</a>
            <a className='hover:scale-110 duration-500 text-zinc-50 font-semibold text-2xl' href="#habilidades">Skills</a>
            <a className='hover:scale-110 duration-500 text-zinc-50 font-semibold text-2xl' href="#contato">Contato</a>

        </nav>
    )
}