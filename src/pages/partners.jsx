import React from 'react';
import Head from 'next/head';
import styles from '../styles/Parceiro.module.css'
import Input from "../components/Input";

export default function Contact() {
    const submitForm = () => {
    };
    return (
        <div className='h-full'>
            <Head>
                <title>Contato | Go Gift</title>
            </Head>
            <div className="flex justify-center flex-col h-full">
                <div className="w-4/12 m-auto p-8 shadow-2xl rounded-xl">
                    <h1 className="text-4x1 font-bold flex items-center ">
                        <div className='text-4xl font-bold'>Seja um parceiro</div>
                    </h1>
                    <form >
                        <div className="my-2 flex flex-col">
                            <label htmlFor="" className='font-bold w-full'>Razão Social</label>
                            <input type="text" name="name" className="border-2 p-2 rounded-xl w-full" required/>
                        </div>
                        <div className="my-2 flex flex-col">
                            <label htmlFor="email" className='font-bold w-full'>Email</label>
                            <input type="email" name="email" className="border-2 p-2 rounded-xl w-full" required/>
                        </div>
                        <div className="my-2 flex flex-col">
                            <label htmlFor="tel" className='font-bold w-full'>Telefone</label>
                            <input type="tel" name="tel" className="border-2 p-2 rounded-xl w-full" required/>
                        </div>
                        <div className="my-2 flex flex-col">
                            <label htmlFor="address" className='font-bold w-full'>Endereço</label>
                            <input type="text" name="address" className="border-2 p-2 rounded-xl w-full" required/>
                        </div>
                        <div className="my-2 flex flex-col">
                            <label htmlFor="state" className='font-bold w-full'>Estado</label>
                            <input type="text" name="state" className="border-2 p-2 rounded-xl w-full" required/>
                        </div>
                        <div className="my-2 flex flex-col">
                            <label htmlFor="cnpj" className='font-bold w-full'>CNPJ</label>
                            <input type="num" name="cnpj" className="border-2 p-2 rounded-xl w-full" required/>
                        </div>
                        <div className="my-2 flex flex-col">
                            <label htmlFor="password" className='font-bold w-full'>Senha</label>
                            <input type="password" name="senha" className="border-2 p-2 rounded-xl w-full" required/>
                        </div>
                        <div className="my-2 flex flex-col">
                            <label htmlFor="password" className='font-bold w-full'>Confirme a Senha</label>
                            <input type="password" name="senha" className="border-2 p-2 rounded-xl w-full" required/>
                        </div>
                        <div className='flex w-full justify-center align-center'>
                            <button type='submit' className='btn btn-ghost w-28 bg-purple text-white'>
                                Enviar
                            </button>

                        </div>
                    </form>
                </div>
            </div>
        </div>
    );
}