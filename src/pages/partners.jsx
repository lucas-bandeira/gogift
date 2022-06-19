import React from 'react';
import Head from 'next/head';
import styles from '../styles/Parceiro.module.css'

export default function Partners() {
    return (
        <>
            <Head>
                <title>
                    Parceiros | Go Gift
                </title>
            </Head>
        <div className={styles.container}>
            <div>
                <h1>Cadastre sua loja aqui!</h1>
            </div>
                <form className={styles.formStyle}>
                    <div className="my-2 flex flex-col">
                        <label htmlFor="cnpj">CNPJ da loja</label>
                        <input type="text"  className="border-2 p-2" required/>
                    </div>
                    <div className="my-2 flex flex-col">
                        <label htmlFor="email">Email</label>
                        <input type="email" className="border-2 p-2" required/>
                    </div>
                    <div className="my-2 flex flex-col">
                        <label htmlFor="nome">Razão social</label>
                        <input type="text" className="border-2 p-2" required/>
                    </div>            <div className="my-2 flex flex-col">
                        <label htmlFor="tel">Telefone</label>
                        <input type="tel" className="border-2 p-2" required/>
                    </div>            <div className="my-2 flex flex-col">
                        <label htmlFor="estado">Estado</label>
                        <input type="text" className="border-2 p-2" required/>
                    </div>
                    <div className="my-2 flex flex-col">
                        <label htmlFor="password">Senha</label>
                        <input type="password" className="border-2 p-2" required/>
                    </div>
                    <button className={styles.botao}>
                        Enviar 
                    </button>
            

                </form>
                </div>
            </>

    )
}