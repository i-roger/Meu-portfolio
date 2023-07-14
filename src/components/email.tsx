import emailJs from '@emailjs/browser'

export default function Email() {

    const handleSubmit = (e) => {
        const form = {
            FirstName: e.target.fName.value,
            Email: e.target.email.value,
            Message: e.target.message.value,
        }
        console.log("form values" + form)

        //Configuração do serviço EMAILJS <----------
        emailJs.send('service_g6mqap2', 'template_hx6p8ta', form, 'Y3i-_-0ZmNnpmVe-z') //Chave do serviço(GMAIL), Chave do template Emailjs, de onde o OBJETO esta sendo enviado, Minha chave Publica
        .then(res => {
            return res
        })
        .then(data =>{
            console.log("data from response", JSON.stringify(data))
            if(data.status<299) {
                 e.target.fName.value = '';
                 e.target.email.value = '';
                 e.target.message.value = '';
            }
        })
        .catch(error => {
            console.log("ERROR \n" + JSON.stringify(error))
        })
    }

    return(
        <div className='bg-zinc-800 rounded-xl xl:w-[800px]'>
            <form className='flex flex-col p-10 text-xl gap-1 text-white' onSubmit={(e) => {e.preventDefault(e); handleSubmit(e);}}>
                <label className="" htmlFor='fName'>Nome</label>
                <input className='w-full rounded h-8 p-2' type='text' required name='fName' id='fName'></input>
                <br/>
                <label className="" htmlFor='email'>Seu Email</label>
                <input className='w-full rounded h-8 p-2' type='text' required name='email' id='email'></input>
                <br/>
                <label className="" htmlFor='message'>Messagem</label>
                <textarea className='w-full rounded resize-none p-2' rows={5} cols={50} required name='message' id='message'></textarea>
                <br/>
                <div className='flex justify-center'>
                    <button className={`w-96 h-12 text-white bg-gradient-to-r from-green-400 
                    via-green-500 to-green-600 hover:bg-gradient-to-br 
                    focus:ring-4 focus:outline-none focus:ring-green-300 dark:focus:ring-green-800 shadow-lg 
                    shadow-green-500/50 dark:shadow-lg dark:shadow-green-800/80 font-medium rounded-lg text-sm px-5 py-2.5 
                    text-center mr-2 mb-2 hover:scale-95 transition`} 
                    type='submit'>Submit</button>
                </div>
            </form>
        </div>
    )
}