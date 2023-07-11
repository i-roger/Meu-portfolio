import Email from '../components/email'

export default function Contato(){
    return(
        <>
        <div className='flex flex-col items-center mx-10'>
            <div className='mb-10'>
                <h1 className='text-4xl text-center'>Me envie um email!
                </h1>
            </div>
            <Email/>
        </div>
        </>
    )
}