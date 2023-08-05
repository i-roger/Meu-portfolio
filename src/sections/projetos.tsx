export default function projetos() {
    return(
        <section id="projetos" className="flex justify-center flex-col items-center gap-10 px-10">
            <h1 className="text-4xl">Projetos</h1>
            <div className="flex flex-col gap-10">
                
                <a href="https://mrclimatempo.netlify.app">
                <div className="card hover:saturate-200">
                    <div className='z-1 p-4 rounded-t-xl bg-black/80 backdrop-blur-sm drop-shadow-2xl'>
                        <h1 className='text-4xl text-green-400'>Clima App</h1>
                        <p className='text-[#f9f9f9]'>Aqui você encontra informações sobre Temperatura, Umidade e Vento em tempo real! </p>
                    </div>
                </div>
                </a>

            </div>
        </section>
    )
}