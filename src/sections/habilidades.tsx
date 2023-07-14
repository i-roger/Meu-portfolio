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
                <div className="flex justify-center flex-col items-center gap-10 mx-auto px-10 pt-32">
                    <h1 className='text-4xl'>Habilidades</h1>
                    <div className="flex justify-center w-[60%] gap-10 flex-wrap">
                        <div className="box" key="0">
                            <p>HTML5</p>
                            <img src={html} alt="html"/>
                        </div>
                        
                        <div className="box" key="1">
                            <p>CSS3</p>
                            <img src={css} alt="html"/>
                        </div>
                        
                            <div className="box" key="2">
                            <p>JavaScript</p>
                            <img src={js} alt="html"/>
                            </div>
                        
                            <div className="box" key="3">
                            <p>TypeScript</p>
                            <img src={ts} alt="html"/>
                            </div>
                        
                            <div className="box" key="4">
                            <p>React.js</p>
                            <img src={reactjs} alt="html"/>
                            </div>
                        
                            <div className="box" key="5">
                            <p>Next.js</p>
                            <img src={nextjs} alt="html"/>
                            </div>
                        
                            <div className="box" key="6">
                            <p>CSS-in-JS</p>
                            <img src={styledcomponents} alt="html"/>
                            </div>
                        
                            <div className="box" key="8">
                            <p>Tailwind CSS</p>
                            <img src={tailwindcss} alt="html"/>
                            </div>
                        
                            <div className="box" key="16">
                            <p>SASS</p>
                            <img src={sass} alt="html"/>
                        </div>
                    </div>
                </div>
        </section>
    )
}