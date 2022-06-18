import React from "react";
import Head from "next/head";
import styles from"../styles/Contato.module.css"

export default function Contact() {
    const submitForm = () => {};
  return (
    <>
      <Head>
        <title>Contato | Go Gift</title>
      </Head>
      <div className="h-full flex justify-center flex-col">
        <div className="w-1/3 m-auto p-8 shadow-lg">
          <h1 className="text-4x1 font-bold flex items-center ">
            <svg 
              xmlns="http://www.w3.org/2000/svg"
              className="h-12 transform translate-20,2.5 rotate-45"
              viewBox="0 0 20 20"
              fill="currentColor"
            >
              <path d="M10.894 2.553a1 1 0 00-1.788 0l-7 14a1 1 0 001.169 1.409l5-1.429A1 1 0 009 15.571V11a1 1 0 112 0v4.571a1 1 0 00.725.962l5 1.428a1 1 0 001.17-1.408l-7-14z" />
            </svg>
            <div className='text-4xl font-bold'>CONTATE-NOS</div>
          </h1>
          <form action="https://formsubmit.co/daniel.fn@sempreceub.com"
          method="POST">
            <div className="my-2 flex flex-col">
                <label htmlFor="nome">Nome</label>
                <input type="text" name="name" className="border-2 p-2" required/>
            </div>
            <div className="my-2 flex flex-col">
                <label htmlFor="email">Email</label>
                <input type="email" name="email" className="border-2 p-2" required/>
            </div>
            <div className="my-2 flex flex-col">
                <label htmlFor="message">Descreva seu problema</label>
                <textarea name="message" className="border-2 p-2" placeholder="..." required></textarea>
                {/* <input type="hidden" name="_captcha" value={false}/>  */}
               
            </div>
            <button className={styles.botao}>
                Enviar 
            </button>
            

          </form>
        </div>
      </div>
    </>
  );
}
