import React from 'react';
import Head from 'next/head';

export default function Home() {
    return (
        <>
            <Head>
                <title>
                    Sobre nós | Go Gift
                </title>
            </Head>
            <div className='flex flex-col'>
                <div className='mx-auto text-5xl font-bold'>
                    <h1>
                        Sobre nós
                    </h1>
                </div>
                <div className='flex flex-row mt-20 px-10'>
                    <div>
                        <img className='h-[488px]' src="./icons/logo.svg" alt="logo do gogift"/>
                    </div>
                    <div className='md:w-[700px] 2xl:w-[1200px] ml-48 text-xl md:mt-40 2xl:mt-64 text-black'>
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed faucibus mi et nisi mollis, nec
                        aliquet eros ultricies. Etiam auctor aliquet orci non feugiat. Nunc egestas ullamcorper odio sed
                        ornare. Sed in tempor nunc. Pellentesque non dui pellentesque tortor ullamcorper suscipit congue
                        a magna. Duis eu pharetra sapien. Donec a dignissim mi. Ut nec varius odio. Cras et libero
                        nulla. In nec gravida quam, quis pulvinar velit. Nulla facilisi. Integer id sagittis risus.
                        Aliquam vulputate ac est sed interdum. Maecenas quis tempor mi. Quisque in sapien lectus.

                        Suspendisse potenti. Vivamus placerat elit sollicitudin diam ullamcorper, vitae interdum sapien
                        commodo. Suspendisse potenti. Vivamus placerat elit sollicitudin diam ullamcorper, vitae
                        interdum sapien commodo.
                    </div>
                </div>
                <div className='px-10 text-xl'>
                    &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                    Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos.
                    Suspendisse a porta odio. In non eros eros. Suspendisse pretium, mi id mattis volutpat, odio velit
                    sodales lacus, interdum aliquet urna dui quis enim. Donec scelerisque urna justo, non laoreet est
                    vulputate vel. Mauris ipsum augue, placerat eget luctus a, bibendum eget nunc. Etiam eu malesuada
                    mauris. Suspendisse aliquet molestie euismod. Duis in cursus justo. Proin sed mollis elit, quis
                    volutpat nulla. Pellentesque id justo sapien.Class aptent taciti sociosqu ad litora torquent per
                    conubia nostra, per inceptos himenaeos. Suspendisse a porta odio. In non eros eros. Suspendisse
                    pretium, mi id mattis volutpat, odio velit sodales lacus, interdum aliquet urna dui quis enim. Donec
                    scelerisque urna justo, non laoreet est vulputate vel. Mauris ipsum augue, placerat eget luctus a,
                    bibendum eget nunc. Etiam eu malesuada mauris. Suspendisse aliquet molestie euismod. Duis in cursus
                    justo. Proin sed mollis elit, quis volutpat nulla. Pellentesque id justo sapien.Class aptent taciti
                    sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Suspendisse a porta odio. In
                    non eros eros. Suspendisse pretium, mi id mattis volutpat, odio velit sodales lacus, interdum
                    aliquet urna dui quis enim. Donec scelerisque urna justo, non laoreet est vulputate vel. Mauris
                    ipsum augue, placerat eget luctus a, bibendum eget nunc. Etiam eu malesuada mauris. Suspendisse
                    aliquet molestie euismod. Duis in cursus justo. Proin sed mollis elit, quis volutpat nulla.
                    Pellentesque id justo sapien.
                </div>
                <div className='px-10 text-xl mt-5'>
                    &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                    Sed at interdum neque, sit amet pharetra justo. Nam molestie dolor neque, eget pellentesque orci
                    gravida a. Aliquam dignissim, magna eget aliquam ornare, dui nulla elementum leo, eget maximus orci
                    odio ut odio. Fusce at fringilla tortor. Etiam interdum aliquam massa, ac feugiat massa euismod
                    gravida. Nulla facilisi. Curabitur et tincidunt augue. Proin a nibh mauris. Nullam sodales a ex sit
                    amet consectetur. Cras quis diam id lorem viverra volutpat. Curabitur fringilla quis sem nec
                    suscipit. Vestibulum rutrum tortor mi, rhoncus viverra ex fringilla ut. Vestibulum luctus nisi a
                    pharetra euismod.Sed at interdum neque, sit amet pharetra justo. Nam molestie dolor neque, eget
                    pellentesque orci gravida a. Aliquam dignissim, magna eget aliquam ornare, dui nulla elementum leo,
                    eget maximus orci odio ut odio. Fusce at fringilla tortor. Etiam interdum aliquam massa, ac feugiat
                    massa euismod gravida. Nulla facilisi. Curabitur et tincidunt augue. Proin a nibh mauris. Nullam
                    sodales a ex sit amet consectetur. Cras quis diam id lorem viverra volutpat. Curabitur fringilla
                    quis sem nec suscipit. Vestibulum rutrum tortor mi, rhoncus viverra ex fringilla ut. Vestibulum
                    luctus nisi a pharetra euismod.Sed at interdum neque, sit amet pharetra justo. Nam molestie dolor
                    neque, eget pellentesque orci gravida a. Aliquam dignissim, magna eget aliquam ornare, dui nulla
                    elementum leo, eget maximus orci odio ut odio. Fusce at fringilla tortor. Etiam interdum aliquam
                    massa, ac feugiat massa euismod gravida. Nulla facilisi. Curabitur et tincidunt augue. Proin a nibh
                    mauris. Nullam sodales a ex sit amet consectetur. Cras quis diam id lorem viverra volutpat.
                    Curabitur fringilla quis sem nec suscipit. Vestibulum rutrum tortor mi, rhoncus viverra ex fringilla
                    ut. Vestibulum luctus nisi a pharetra euismod.
                </div>
            </div>
        </>

    )
}
