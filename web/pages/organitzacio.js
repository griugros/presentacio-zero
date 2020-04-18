import Head from 'next/head';
import Link from 'next/link';
import { motion } from 'framer-motion';

// Components
import NavFooter from '../components/NavFooter';

export default function Objectius() {

    // Animacions Frame

    const container = {
        titolHidden:{ opacity: 0, x: -25 },
        hidden: { opacity: 0, x: 25 },
        visible: {
            opacity: 1,
            xx: 0,
            transition: {
                staggerChildren: 0.3,
                duration: 0.2,
                ease: "easeIn"
            }
        },
        exit: {
            opacity: 0,
            x: -25,
            transition: {
                staggerChildren: 0.25,
                duration: 0.5,
                ease: "easeOut"
            }
        }
    }

    const item = {
        hidden: { opacity: 0, x: 25 },
        visible: { opacity: 1, x: 0 },
        exit: { opacity: 0, x: 25 }
    }

    return (
        <div>
            <Head>
                <title>Sàvies.cat - Organització</title>
                <link rel="icon" href="/favicon.ico?v=4" />
            </Head>
            <section className="hero is-fullheight is-success">
                <div className="hero-body">
                    <div className="container">

                                <motion.h1 
                                    className="title" 
                                    initial="titolHidden"
                                    animate="visible"
                                    exit="exit"
                                    variants={container}>Organització</motion.h1>
                                    <motion.p className="subtitle subtitle-organitzacio"                                          
                                           initial="hidden"
                                           animate="visible"
                                           exit="exit"
                                           variants={container}
                                    >Som una organització digital amb vocació d'esdevenir Autònoma i Descentralitzada. Suma't al projecte:</motion.p>
                                                      
                            <motion.ul
                                className="container"
                                initial="hidden"
                                animate="visible"
                                exit="exit"
                                variants={container}
                            >
                                
                                <motion.li variants={item} className="subtitle">
                                    <a className="button is-dark" href="https://github.com/orgs/griugros/" target="_blank">Github</a>
                                </motion.li>
                                <motion.li variants={item} className="subtitle">
                                    <a className="button is-danger" href="https://gitter.im/griugros/Hola" target="_blank">Gitter</a>
                                </motion.li>   
                                
                            </motion.ul>                    
                        
                    </div>
                </div>

                <NavFooter/>

            </section>


        </div>
    )
}
