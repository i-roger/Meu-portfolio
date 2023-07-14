import Email from '../components/email'

export default function Contato(){
    return(
        <section id="contato">
        <div className='flex flex-col items-center mx-auto gap-10 px-10 pt-32'>
            <div>
                <h1 className='text-4xl text-center'>Me envie um email!</h1>
            </div>
            <div>
                <Email/>
            </div>
        </div>
        </section>
    )
}