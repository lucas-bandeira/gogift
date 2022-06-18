import React from 'react';
import Head from 'next/head';
import styles from '../styles/Cadastro.module.css'


export default function cadastro () {
  return (
    <>
      <Head>
        <title>
          Cadastro | Go Gift
        </title>
      </Head>
      <div className={styles.container}>
        <div>
          <h1>Cadastro</h1>
        </div>
        <div >
          <form className={styles.formStyle}>
            <div>
              <label for="user_cpf">CPF:<br></br></label>
              <input type="text" id="user_cpf" name='cpf' placeholder='123.123.123-12'/>
            </div>

            <div>
              <label for='user_name'>Nome completo:<br></br></label>
              <input placeholder='Digite seu nome:' id='user_name' name='nome' required/>
            </div>

            <div>
              <label for='user_email'>E-mail:<br></br></label>
              <input type="email" id="user_email" placeholder='você@exemplo.com' name='email' required/>
            </div>

            <div>
              <label for='data_de_nascimento'>Data de nascimento:<br></br></label>
              <input type="date" id='data-de-nascimento' required/>
            </div>

            <div>
              <label for='user_password'>Senha:<br></br></label>
              <input type="password" id='user_password' name='password' required/>
            </div>

            <div>
              <label for='user_password'>Confirmar senha:<br></br></label>
              <input type="password" id='user_password' name='password' required/>
            </div>


            <button className={styles.enviar_button}>Enviar</button>

          </form>
        </div>
        
      </div>


    
    </>

  )
}