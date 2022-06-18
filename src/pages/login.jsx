import React from 'react';
import Head from 'next/head';
import styles from '../styles/LoginStyle.module.css'





export default function login() {
  return (
    <>
      <Head>
        <title>
          Entre | GoGift
        </title>
      </Head>
      <div className={styles.login_container}>
        <img className={styles.imgSize} src="./icons/logomarca_png.png" alt="logo do gogift"/>
        <div className={styles.loginBorder}>
          

          <form>
            <div className={styles.formLogin}>
              <div>
                <legend>
                  <label>E-mail<br></br></label>
                  <input type="email" placeholder="seuemail@gmail.com"  />

                </legend>
              </div>

              <div>
                <label>Senha<br></br></label>
                <input  type="password"/>

              </div>
              <div>
                Não possui uma conta?<a href='/cadastro'> Registre-se</a>
              </div>
            </div>
            <div className={styles.behindButton}>
              <button>Entrar</button>
            </div>

          </form>
        </div>
      </div>
    </>
  )
}