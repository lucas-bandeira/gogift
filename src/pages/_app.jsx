import React from 'react';
import '../styles/globals.scss';
import Link from "next/link";

function MyApp({ Component, pageProps }) {
  return (

      <div>
        <div className='flex flex-row w-full px-10 h-fit justify-between justify-center align-center '>
            <div className='mt-auto'>
                <img src="./icons/logo.svg" alt="logo do gogift"/>
            </div>
            <div className='mt-auto'>
                <input className='border-b w-80' type="text" placeholder='Pesquise um produto'/>
            </div>
            <div className='flex flex-row mt-auto'>
                <div className='mr-5'>
                    <Link  href="/">
                        Conta
                    </Link>
                </div>
                <div className='flex flex-row '>
                    <Link  href="/">
                        Carrinho
                    </Link>
                    <div className='ml-1'>
                        <img className='w-4' src="./icons/cartIcon.svg" alt="logo do gogift"/>
                    </div>
                </div>
            </div>
        </div>
        <div className='flex flex-row 2xl:w-2/5 md:w-3/5 font-bold text-xl px-14 py-10 justify-between'>
            <div>
                <Link  href="/">
                    Produtos
                </Link>
            </div>
            <div>
                <Link  href="/">
                    Categorias
                </Link>
            </div>
            <div>
                <Link  href="/aboutUs">
                    Sobre Nós
                </Link>
            </div>
            <div>
                <Link  href="/">
                    Seja um parceiro
                </Link>
            </div>
            <div>
                <Link  href="/contact">
                    Contato
                </Link>
            </div>
        </div>
        <div>
          <Component {...pageProps} />
        </div>
      </div>
  )
}

export default MyApp
