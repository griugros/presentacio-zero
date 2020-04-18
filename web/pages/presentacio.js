import Head from 'next/head';
import NavFooter from '../components/NavFooter';
import { motion } from 'framer-motion';


function Presentacio() {

    const titols = {
      
            amagat:{
              opacity:0,
              x: -5   
             
            },
            visible:{
              opacity:1,    
              x:0,
              transition: {
                  duration: 0.5
              }              
            },
            sortida:{  
              opacity:0
            }
         
    }

    return (<div>
        <Head>
            <title>Sàvies.cat - Organització</title>
            <link rel="icon" href="/favicon.ico?v=5" />
        </Head>
        <section className="hero is-warning">
            <div className="hero-body">
                <div className="container">
                    <motion.h1 
                         initial="amagat"
                         animate="visible"
                         exit="sortida"
                         variants={titols}
                        className="title">
                        Sàvies.cat
                    </motion.h1>
                    <h2 className="subtitle">
                        Què és?
                     </h2>
                </div>
            </div>
        </section>
        <section className="container container-blog">
            <div className="content">
            <motion.h2
                initial="amagat"
                animate="visible"
                exit="sortida"
                variants={titols}
            >Esperit de Joc</motion.h2>

            <p>Sàvies.cat té esperit de joc. Sempre tendirà a la simplificació i a prioritzar l'usabilitat.</p>

            <motion.h2
                initial="amagat"
                animate="visible"
                exit="sortida"
                variants={titols}
            >Categories</motion.h2>

            <p>Els continguts de Sàvies.cat es divideixen en tres grans categories:</p>
            <ul>
                <li>Terra</li>
                <li>Poble</li>
                <li>Progrés</li>
            </ul>
            <p>Tots els reptes, col.leccions i entrevistes quedaran organitzats sota aquestes grans categories.</p>

            <motion.h2
                 initial="amagat"
                 animate="visible"
                 exit="sortida"
                 variants={titols}
            >Continguts</motion.h2>

            <p>Inicialment, Sàvies.cat comptarà amb tres tipus de continguts:</p>
            <ul>
                <li>Reptes: Inicialment es limitaran a preguntes de resposta múltiple.</li>
                <li>Entrevistes a persones a rellevants que inclouran un repte creat per les mateixes.</li>
                <li>Col·leccions: Conjunts de reptes relacionats amb esdeveniments o productes culturals concrets.</li>
            </ul>

            <motion.h2
                 initial="amagat"
                 animate="visible"
                 exit="sortida"
                 variants={titols}
            >Valors</motion.h2>

            <p>Sense privacitat no hi ha llibertat. Sempre treballarem per implementar i divulgar accions que empoderin les persones.</p>

            <motion.h2
                 initial="amagat"
                 animate="visible"
                 exit="sortida"
                 variants={titols}
            >Full de ruta</motion.h2>

            <p>Aquests són els passos a seguir:</p>

            <ol>
                <li>Crear la infraestructura bàsica per poder produir Entrevistes i Reptes.</li>
                <li>Organitzar la redacció i iniciar el procés de producció d'entrevistes.</li>
                <li>Produir algunes col·leccions inicials.</li>
                <li>Implementar un sistema de monitorització de l'activitat a la plataforma respectuós amb la llibertat individual de les persones.</li>
                <li>Obertura de l'apartat de producció de reptes a la comunitat.</li>
            </ol>

            </div>
        </section>
        <section>
            <NavFooter />
        </section>

    </div>)

}

export default Presentacio;