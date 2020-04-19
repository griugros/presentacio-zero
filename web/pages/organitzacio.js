import Head from 'next/head';
import Link from 'next/link';
import { motion } from 'framer-motion';

// Components
import NavFooter from '../components/NavFooter';
import Mh from '../components/animacions/Mh';

export default function Objectius() {

    // Animacions Frame

    const container = {
        
        hidden: { opacity: 0, x: 25 },
        visible: {
            opacity: 1,
            x: 0,
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
                duration: 0.2,
                ease: "easeOut"
            }
        }
    }

    const item = {
        hidden: { opacity: 0, x: 25 },
        visible: { opacity: 1, x: 0 },
        exit: { opacity: 0, x: -25 }
    }

    return (
        <div>
            <Head>
                <title>Sàvies.cat - Organització</title>
                <link rel="icon" href="/favicon.ico?v=4" />
            </Head>
            <section className="hero is-fullheight is-success">
                <div className="hero-body">
                    <section className="section">
                        <div className="container">

                            <Mh>Organització</Mh>                            
                               
                            <motion.p className="subtitle subtitle-organitzacio"    
                                    key="subtitol-organitzacio"                                      
                                    initial="hidden"
                                    animate="visible"
                                    exit="exit"
                                    variants={container}
                            >
                                Som una organització digital amb vocació d'esdevenir Autònoma i Descentralitzada. Suma't al projecte:
                            
                            </motion.p>

                            <section className="section">                        
                                <motion.ul
                                    key="canals-organitzacio"
                                    initial="hidden"
                                    animate="visible"
                                    exit="exit"
                                    variants={container}
                                >
                                    
                                    <motion.li key="canal-github" variants={item} className="subtitle">
                                        <a className="button is-dark" href="https://github.com/orgs/griugros/" target="_blank">Github</a>
                                    </motion.li>
                                    <motion.li key="canal-gitter" variants={item} className="subtitle">
                                        <a className="button is-danger" href="https://gitter.im/griugros/Hola" target="_blank">Gitter</a>
                                    </motion.li> 
                                    
                                </motion.ul> 
                            </section>                   
                        </div>
                    </section>
                </div>

                <NavFooter/>

            </section>


        </div>
    )
}
