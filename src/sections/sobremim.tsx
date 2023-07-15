export default function sobremim() {
    return(
        <section id="sobremim" className="">
            <div className="flex flex-col gap-20 mx-auto">
                <div className="banner flex justify-evenly gap-10 px-4 pt-32 max-sm:flex-col max-sm:items-center sm:flex-col sm:items-center md:flex-row">
                    <div className="w-60 h-60 sm:w-60 sm:h-60 md:h-72 md:w-72 rounded-xl bg-green-300 text-center transition hover:scale-110">
                        <p>IMAGEM</p>
                    </div>
                    <div className="intro flex flex-col gap-5 justify-center">
                        <div className="">
                            <h1 className="text-[2.5rem] font-[500]">Olá, eu sou o</h1>
                            <span className="text-[3.2rem] font-[500] text-emerald-500">Matheus Roger</span>
                            <p className="text-[1.7rem] font-[500]">Desenvolvedor Front-End</p>
                        </div>
                        <div className="btn flex gap-5 justify-evenly">
                            <a href="#" className="bg-gradient-to-r from-green-400 
                                                via-green-500 to-green-600 hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-green-300 dark:focus:ring-green-800 shadow-lg 
                                                shadow-green-500/50 dark:shadow-lg dark:shadow-green-800/80 rounded-full px-5 py-2.5 transition hover:scale-95">Download CV</a>
                            <a href="mailto:mroger.dev@gmail.com" className="border-2 border-green-400 hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-green-300 dark:focus:ring-green-800 shadow-lg 
                                                shadow-green-500/50 dark:shadow-lg dark:shadow-green-800/80 rounded-full px-4 py-2.5 transition hover:scale-95">Entrar em contato</a>
                        </div>
                    </div>
                </div>
                
                <div className="flex flex-col items-center gap-5 px-4">
                    <h1 className="text-4xl"> Sobre Mim </h1>
                    <p className="text-2xl text-center">Desenvolvedor Front-end com experiência em React.js, Vite.js, Next.js, JavaScript, TypeScript, Styled Components e consumo de APIs REST. Apaixonado pelo desenvolvimento de componentes reutilizáveis. Cursando a faculdade de Ciências da Computação, Curso tecnico em informática Completo.
                    </p>
                </div>
            </div>
        </section>
    )
}