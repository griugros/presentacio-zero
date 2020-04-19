import Head from 'next/head';
import Link from 'next/link';
import { motion } from 'framer-motion';

// Components
import NavFooter from '../components/NavFooter';
import Mh from '../components/animacions/Mh';

export default function Objectius() {

    // Animacions Frame

    const container = {        
        hidden: { opacity: 0, y: 25 },
        visible: {
            opacity: 1,
            y: 0,
            transition: {
                staggerChildren: 0.2,
                duration: 0.2,
                ease: "easeIn"
            }
        },
        exit: {
            opacity: 0,
            y: -25,
            transition: {
                staggerChildren: 0.25,
                duration: 0.2,
                ease: "easeOut"
            }
        }
    }

    const item = {
        hidden: { opacity: 0, y: 25 },
        visible: { opacity: 1, y: 0 },
        exit: { opacity: 0, y: -25 }
    }

    return (
        <div>
            <Head>
                <title>Sàvies.cat - Objectius</title>
                <link rel="icon" href="/favicon.ico?v=4" />
            </Head>
            <section className="hero is-fullheight is-success">
                <div className="hero-body">
                    <div className="container">
                        
                        <Mh h="3" variant="vertical">Objectius</Mh>
                        
                        <section className="section">    
                            <motion.ol
                                className="container"
                                initial="hidden"
                                animate="visible"
                                exit="exit"
                                variants={container}
                            >
                                
                                <motion.li variants={item} className="subtitle">
                                Divulgar coneixement de manera entretinguda
                                </motion.li>
                                <motion.li variants={item} className="subtitle">
                                    Crear eines per la producció i distribució de micro continguts
                                </motion.li>   
                                <motion.li variants={item} className="subtitle">
                                    Esdevenir un punt de trobada i cocreació de persones inquietes
                                </motion.li>   
                                <motion.li variants={item} className="subtitle">
                                    Donar visibilitat a persones rellevants
                                </motion.li>                        
                                
                                
                            </motion.ol>
                        </section>
                    </div>
                </div>

                <NavFooter/>

            </section>


        </div>
    )
}
