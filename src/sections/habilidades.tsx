import html from '../assets/languages/html.svg'
import css from '../assets/languages/css.svg'
import js from '../assets/languages/javascript.svg'
import ts from '../assets/languages/typescript.svg'
import reactjs from '../assets/languages/react.svg'
import nextjs from '../assets/languages/nextjs.svg'
import styledcomponents from '../assets/languages/styledcomponents.svg'
import tailwindcss from '../assets/languages/tailwindcss.svg'
import sass from '../assets/languages/sass.svg'

export default function hablidades() {
    return(
        <section id="habilidades">
                <div className="flex justify-center flex-col items-center gap-10 px-10">
                    <h1 className='text-4xl'>Habilidades</h1>
                    <div className="flex justify-center gap-10 flex-wrap">
                        <div className="box" key="0">
                            HTML5
                            <img src={html} alt="html"/>
                        </div>
                        
                        <div className="box" key="1">
                            CSS3
                            <img src={css} alt="html"/>
                        </div>
                        
                            <div className="box" key="2">
                                Javascript
                            <img src={js} alt="html"/>
                            </div>
                        
                            <div className="box" key="3">
                            TypeScript
                            <img src={ts} alt="html"/>
                            </div>
                        
                            <div className="box" key="4">
                            React.js
                            <img src={reactjs} alt="html"/>
                            </div>
                        
                            <div className="box" key="5">
                            Next.js
                            <img src={nextjs} alt="html"/>
                            </div>
                        
                            <div className="box" key="6">
                            CSS-in-JS
                            <img src={styledcomponents} alt="html"/>
                            </div>
                        
                            <div className="box" key="8">
                            Tailwind CSS
                            <img src={tailwindcss} alt="html"/>
                            </div>
                        
                            <div className="box" key="16">
                            SASS
                            <img src={sass} alt="html"/>
                        </div>
                    </div>
                </div>
        </section>
    )
}