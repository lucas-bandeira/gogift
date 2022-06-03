import React from 'react';
import Head from 'next/head';

export default function Home() {
    return (
        <>
            <Head>
                <title>
                    Home | Go Gift
                </title>
            </Head>
            <div className='px-14'>
                <div className='flex flex-row bg-red_600 h-[120px] text-white p-8 rounded-2xl'>
                    <div>
                        <h1 className='text-xl mb-2'>80% OFF NO DIA DAS MÃES!</h1>
                        <p>Ganhe até 80% de desconto nos produtos selecionados até o dia 8/5! Saiba mais aqui.</p>
                    </div>
                    <div className='2xl:ml-48 md:ml-10 mt-[-35px]'>
                        <img src="./icons/motherChilling.svg" alt="logo do gogift"/>
                    </div>
                </div>
                <div className=' bg-red_600 h-[588px] mt-[35px] text-white p-4 relative rounded-2xl'>
                    <div className='flex flex-col bg-[url("/icons/backgroundCarroussel.svg")] h-full'>
                        <div className='flex flex-row h-full text-white p-8 rounded-2xl'>
                            <img className='h-80 mx-auto' src="./icons/redGift.svg" alt="logo do gogift"/>
                            <img className='h-64 absolute right-[660px] top-40 mx-auto' src="./icons/whiteGift.svg"
                                 alt="logo do gogift"/>
                        </div>
                        <div className='flex w-full justify-evenly p-4'>
                            <button className='btn btn-ghost bg-red_900 rounded-3xl w-fit px-20 text-lg'>
                                Entrega Express
                            </button>
                            <button className='btn btn-ghost bg-red_900 rounded-3xl w-fit px-20 text-lg'>
                                Comprar Presente
                            </button>
                            <button className='btn btn-ghost bg-red_900 rounded-3xl w-fit px-20 text-lg'>
                                Seja um parceiro!
                            </button>
                        </div>
                    </div>
                </div>
                <div className='flex w-full text-red_400 text-7xl font-bold '>
                    <div className='mx-auto mt-10'>
                        <h1>Seu presente entrege em até 48 horas</h1>
                    </div>
                </div>
                <div className='flex flex-col w-full h-[423px] mt-10 bg-gray-background'>
                    <div className='mx-auto font-bold text-3xl mt-5'>
                        <h1>Produto em destaque</h1>
                    </div>
                    <div className='flex flex-row mx-auto'>
                        <div>
                            <img className='h-80' src="./icons/redGift.svg" alt="logo do gogift"/>
                        </div>
                        <div className='flex flex-col my-auto'>
                            <p className='font-bold text-xl'>Cesta 12345</p>
                            <p className='my-2'>Descrição da cesta</p>
                            <p className='mb-2'>de R$120,25</p>
                            <p className='font-bold text-lg'>por R$100,00</p>

                            <button className='btn btn-ghost bg-red_900 rounded-3xl w-56 mt-5 text-white text-lg'>
                                Comprar
                            </button>
                        </div>
                    </div>

                </div>
                <div className='flex flex-row mt-10 h-fit'>
                    <div className='bg-gray-background2 h-[webkit-fill-avaiable] w-3/12 mr-5 px-5 py-8'>
                        <div>
                            <p className='font-bold text-xl'>Preços</p>
                        </div>
                        <div>
                            <div className='flex flex-row w-full justify-between mt-5'>
                                <div>Alcance</div>
                                <div>R$120-300</div>
                            </div>
                            <div className='mt-3'>
                                <input type="range" min="0" max="100" className="range range-xs"/>
                            </div>
                        </div>
                        <div className='mt-5'>
                            <p className='font-bold text-xl'>Categorias</p>
                            <div className='flex flex-row mt-3'>
                                <input type="checkbox" className="checkbox checkbox-sm"/>
                                <p className='my-auto ml-3 font-bold'>Cestas</p>
                            </div>
                            <div className='flex flex-row mt-3'>
                                <input type="checkbox" className="checkbox checkbox-sm"/>
                                <p className='my-auto ml-3 font-bold'>Cervejas Artesanais</p>
                            </div>
                            <div className='flex flex-row mt-3'>
                                <input type="checkbox" className="checkbox checkbox-sm"/>
                                <p className='my-auto ml-3 font-bold'>Vinhos</p>
                            </div>
                            <div className='flex flex-row mt-3'>
                                <input type="checkbox" className="checkbox checkbox-sm"/>
                                <p className='my-auto ml-3 font-bold'>Flores</p>
                            </div>
                            <div className='mt-3'>
                                <a href='#' className='text-red_900 mx-auto'>+ 4 mais</a>
                            </div>
                        </div>
                        <div className='mt-5'>
                            <p className='font-bold text-xl'>Datas comemorativas</p>
                            <div className='flex flex-row mt-3'>
                                <input type="checkbox" className="checkbox checkbox-sm"/>
                                <p className='my-auto ml-3 font-bold'>Natal</p>
                            </div>
                            <div className='flex flex-row mt-3'>
                                <input type="checkbox" className="checkbox checkbox-sm"/>
                                <p className='my-auto ml-3 font-bold'>Dia dos namorados</p>
                            </div>
                            <div className='flex flex-row mt-3'>
                                <input type="checkbox" className="checkbox checkbox-sm"/>
                                <p className='my-auto ml-3 font-bold'>Aniversário</p>
                            </div>
                            <div className='flex flex-row mt-3'>
                                <input type="checkbox" className="checkbox checkbox-sm"/>
                                <p className='my-auto ml-3 font-bold'>Páscoa</p>
                            </div>
                            <div className='flex flex-row mt-3'>
                                <input type="checkbox" className="checkbox checkbox-sm"/>
                                <p className='my-auto ml-3 font-bold'>Dia das Mães</p>
                            </div>
                            <div className='mt-3'>
                                <a href='#' className='text-red_900 mx-auto'>+ 5 mais</a>
                            </div>
                        </div>
                        <div className='mt-5'>
                            <p className='font-bold text-xl'>Localidades</p>
                            <div className='flex flex-row mt-3'>
                                <input type="checkbox" className="checkbox checkbox-sm"/>
                                <p className='my-auto ml-3 font-bold'>Vicente Pires</p>
                            </div>
                            <div className='flex flex-row mt-3'>
                                <input type="checkbox" className="checkbox checkbox-sm"/>
                                <p className='my-auto ml-3 font-bold'>Taguatinga Norte</p>
                            </div>
                            <div className='flex flex-row mt-3'>
                                <input type="checkbox" className="checkbox checkbox-sm"/>
                                <p className='my-auto ml-3 font-bold'>Samambaia</p>
                            </div>
                            <div className='flex flex-row mt-3'>
                                <input type="checkbox" className="checkbox checkbox-sm"/>
                                <p className='my-auto ml-3 font-bold'>Guará</p>
                            </div>
                            <div className='mt-3'>
                                <a href='#' className='text-red_900 mx-auto'>+ 3 mais</a>
                            </div>
                        </div>
                    </div>
                    <div className='flex flex-col w-full'>
                        <div className='flex flex-row justify-evenly w-full'>
                            <div className='flex flex-col border border-gray-border rounded'>
                                <div className='relative'>
                                    <div>
                                        <img  src="./icons/Chocolates.svg" alt="imagem do chocolate"/>
                                    </div>
                                    <div className='absolute right-4 top-4 bg-brown p-2'>
                                        <img  src="./icons/heart.svg" alt="imagem do chocolate"/>
                                    </div>
                                </div>
                                <div className='font-bold ml-4 mt-3'>Chocolate Ao Leite</div>
                                <div className='flex flex-row justify-between w-full'>
                                    <div className='flex flex-col'>
                                        <div className=' ml-4 mt-3 line-through text-[#808080]'>
                                            R$ 120,00
                                        </div>
                                        <div className='font-bold ml-4 text-xl'>
                                            R$ 80,00
                                        </div>
                                    </div>
                                    <div className='font-bold mt-3'>
                                        <p>24 unidades</p>
                                    </div>
                                </div>
                            </div>
                            <div className='flex flex-col border border-gray-border rounded'>
                                <div className='relative'>
                                    <div>
                                        <img  src="./icons/Chocolates.svg" alt="imagem do chocolate"/>
                                    </div>
                                    <div className='absolute right-4 top-4 bg-brown p-2'>
                                        <img  src="./icons/heart.svg" alt="imagem do chocolate"/>
                                    </div>
                                </div>
                                <div className='font-bold ml-4 mt-3'>Chocolate Ao Leite</div>
                                <div className='flex flex-row justify-between w-full'>
                                    <div className='flex flex-col'>
                                        <div className=' ml-4 mt-3 line-through text-[#808080]'>
                                            R$ 120,00
                                        </div>
                                        <div className='font-bold ml-4 text-xl '>
                                            R$ 80,00
                                        </div>
                                    </div>
                                    <div className='font-bold mt-3'>
                                        <p>24 unidades</p>
                                    </div>
                                </div>
                            </div>
                            <div className='flex flex-col border border-gray-border rounded'>
                                <div className='relative'>
                                    <div>
                                        <img  src="./icons/Chocolates.svg" alt="imagem do chocolate"/>
                                    </div>
                                    <div className='absolute right-4 top-4 bg-brown p-2'>
                                        <img  src="./icons/heart.svg" alt="imagem do chocolate"/>
                                    </div>
                                </div>
                                <div className='font-bold ml-4 mt-3'>Chocolate Ao Leite</div>
                                <div className='flex flex-row justify-between w-full'>
                                    <div className='flex flex-col'>
                                        <div className=' ml-4 mt-3 line-through text-[#808080]'>
                                            R$ 120,00
                                        </div>
                                        <div className='font-bold ml-4 text-xl '>
                                            R$ 80,00
                                        </div>
                                    </div>
                                    <div className='font-bold mt-3'>
                                        <p>24 unidades</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className='flex flex-row justify-evenly w-full mt-10'>
                            <div className='flex flex-col border border-gray-border rounded'>
                                <div className='relative'>
                                    <div>
                                        <img  src="./icons/Chocolates.svg" alt="imagem do chocolate"/>
                                    </div>
                                    <div className='absolute right-4 top-4 bg-brown p-2'>
                                        <img  src="./icons/heart.svg" alt="imagem do chocolate"/>
                                    </div>
                                </div>
                                <div className='font-bold ml-4 mt-3'>Chocolate Ao Leite</div>
                                <div className='flex flex-row justify-between w-full'>
                                    <div className='flex flex-col'>
                                        <div className=' ml-4 mt-3 line-through text-[#808080]'>
                                            R$ 120,00
                                        </div>
                                        <div className='font-bold ml-4 text-xl '>
                                            R$ 80,00
                                        </div>
                                    </div>
                                    <div className='font-bold mt-3'>
                                        <p>24 unidades</p>
                                    </div>
                                </div>
                            </div>
                            <div className='flex flex-col border border-gray-border rounded'>
                                <div className='relative'>
                                    <div>
                                        <img  src="./icons/Chocolates.svg" alt="imagem do chocolate"/>
                                    </div>
                                    <div className='absolute right-4 top-4 bg-brown p-2'>
                                        <img  src="./icons/heart.svg" alt="imagem do chocolate"/>
                                    </div>
                                </div>
                                <div className='font-bold ml-4 mt-3'>Chocolate Ao Leite</div>
                                <div className='flex flex-row justify-between w-full'>
                                    <div className='flex flex-col'>
                                        <div className=' ml-4 mt-3 line-through text-[#808080]'>
                                            R$ 120,00
                                        </div>
                                        <div className='font-bold ml-4 text-xl '>
                                            R$ 80,00
                                        </div>
                                    </div>
                                    <div className='font-bold mt-3'>
                                        <p>24 unidades</p>
                                    </div>
                                </div>
                            </div>
                            <div className='flex flex-col border border-gray-border rounded'>
                                <div className='relative'>
                                    <div>
                                        <img  src="./icons/Chocolates.svg" alt="imagem do chocolate"/>
                                    </div>
                                    <div className='absolute right-4 top-4 bg-brown p-2'>
                                        <img  src="./icons/heart.svg" alt="imagem do chocolate"/>
                                    </div>
                                </div>
                                <div className='font-bold ml-4 mt-3'>Chocolate Ao Leite</div>
                                <div className='flex flex-row justify-between w-full'>
                                    <div className='flex flex-col'>
                                        <div className=' ml-4 mt-3 line-through text-[#808080]'>
                                            R$ 120,00
                                        </div>
                                        <div className='font-bold ml-4 text-xl '>
                                            R$ 80,00
                                        </div>
                                    </div>
                                    <div className='font-bold mt-3'>
                                        <p>24 unidades</p>
                                    </div>
                                </div>
                            </div>
                        </div>

                    </div>
                </div>
            </div>
            <footer className='mt-10 px-14'>
                <div className='flex flex-row bg-gray-background2 justify-between p-2'>
                    <div className='flex flex-col'>
                        <div className='font-bold text-lg'>
                            AJUDA E SUPORTE
                        </div>
                        <a href='#' className='mb-2 mt-6'>Informações sobre entrega</a>
                        <a href='#' className='my-2'>Devolução</a>
                        <a href='#' className='my-2'>Como pedir</a>
                        <a href='#' className='my-2'>Como acompanhar</a>
                    </div>
                    <div className='flex flex-col'>
                        <div className='font-bold text-lg'>
                            ATENDIMENTO AO CONSUMIDOR
                        </div>
                        <a href='#' className='mb-2 mt-6'>Contate-nos</a>
                        <a href='#' className='my-2'>Meios de Pagamento</a>
                        <a href='#' className='my-2'>Bonus Point</a>
                    </div>
                    <div className='flex flex-col'>
                        <div className='font-bold text-lg'>
                            SOCIAIS
                        </div>
                        <div className='flex flex-row my-6'>
                            <div className='mx-3'>
                                <img src="./icons/facebook.svg" alt="logo do gogift"/>
                            </div>
                            <div className='mx-3'>
                                <img src="./icons/twitter.svg" alt="logo do gogift"/>
                            </div>
                            <div className='mx-3'>
                                <img src="./icons/instagram.svg" alt="logo do gogift"/>
                            </div>
                            <div className='mx-3'>
                                <img src="./icons/tiktok.svg" alt="logo do gogift"/>
                            </div>
                            <div className='mx-3'>
                                <img src="./icons/snapchat.svg" alt="logo do gogift"/>
                            </div>
                        </div>
                        <div className='mt-auto '>
                            <label className='font-bold' htmlFor="email">Inscreva-se aqui para receber promoções</label> <br/>
                            <div className='flex flex-row mt-1'>
                                <div className='w-full'>
                                    <input className='border w-full h-11 p-2' type="text" placeholder='seu e-mail'/>
                                </div>
                                <div className='w-fit ml-2'>
                                    <button className='p-3 bg-gray-button h-11 text-white w-48'>INSCREVA-SE</button>
                                </div>
                            </div>
                        </div>
                        <div className='mt-4'>
                            <p>By clicking the SUBSCRIBE button, you are agreeing to our <a href="#" className='text-blue'><i>Privacy & Cookie Policy</i> </a></p>
                        </div>
                    </div>
                    <div className='flex flex-col ml-[-200px]'>
                        <div className='font-bold text-lg'>
                            PLATAFORMAS
                        </div>
                        <div className='flex flex-row mt-6'>
                            <div className='mx-3'>
                                <img src="./icons/android.png" alt="logo do gogift"/>
                            </div>
                            <div className='mx-3'>
                                <img  src="./icons/apple.png" alt="logo do gogift"/>
                            </div>

                        </div>
                    </div>
                    <div></div>
                </div>

            </footer>
        </>

    )
}
