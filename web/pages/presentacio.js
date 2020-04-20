import Head from 'next/head';
import NavFooter from '../components/NavFooter';
import { motion } from 'framer-motion';

// Components

import Mh from '../components/animacions/Mh';
import Mp from '../components/animacions/Mp';

function Presentacio() {

    return (<div>
        <Head>
            <title>Sàvies.cat - Organització</title>
            <link rel="icon" href="/favicon.ico?v=5" />
        </Head>
        <section className="hero is-warning">
            <div className="hero-body">
                <div className="container">
                    <Mh h="3">Sàvies.cat</Mh>
                    <h2 className="subtitle">
                        Què és?
                     </h2>
                </div>
            </div>
        </section>
        <section className="section">
            <div className="container content"> 

                <Mh h="4">Esperit de Joc</Mh> 
                <Mp>Sàvies.cat té esperit de joc. Sempre tendirà a la simplificació i a prioritzar l'usabilitat.</Mp>

                <Mh h="4">Categories</Mh> 

                <Mp>Els continguts de Sàvies.cat es divideixen en tres grans categories:</Mp>
                <ul className="presentacio-llista-categories">
                    <li><div className="es-terra">Terra</div></li>
                    <li><div className="es-poble">Poble</div></li>
                    <li><div className="es-progres">Progrés</div></li>
                </ul>
                <Mp>Tots els reptes, col.leccions i entrevistes quedaran organitzats sota aquestes grans categories.</Mp>

                <Mh h="4">Continguts</Mh> 

                <p>Inicialment, Sàvies.cat comptarà amb tres tipus de continguts:</p>
                <ul>
                    <li>Reptes: Inicialment es limitaran a preguntes de resposta múltiple.</li>
                    <li>Entrevistes a persones a rellevants que inclouran un repte creat per les mateixes.</li>
                    <li>Maletes: Conjunts de recursos i reptes relacionats amb temàtiques, esdeveniments o productes culturals concrets.</li>
                </ul>

                <Mh h="4">Valors</Mh> 

                <p>Sense privacitat no hi ha llibertat. Sempre treballarem per implementar i divulgar accions que empoderin les persones.</p>

                <Mh h="4">Full de ruta</Mh> 

                <Mp>Aquests són els passos a seguir:</Mp>

                <ol>
                    <li>Crear la infraestructura bàsica per poder produir Entrevistes i Reptes.</li>
                    <li>Organitzar la redacció i iniciar el procés de producció d'entrevistes.</li>
                    <li>Produir algunes maletes inicials.</li>
                    <li>Implementar un sistema de monitorització de l'activitat a la plataforma respectuós amb la llibertat individual de les persones.</li>
                    <li>Obertura de l'apartat de producció de reptes a la comunitat.</li>
                </ol>

                <Mh h="4">Stack</Mh> 

                <Mp>Treballem amb aquest stack:</Mp>

                <ol>                    
                    <li>Nextjs</li>
                    <li>Strapi</li>
                    <li>Bulma(scss)</li>
                    <li>Framer Motion</li>
                </ol>    

                <Mh h="4">Sense ànim de lucre</Mh>

                <p>Aquest projecte és sense ànim de lucre. Els costos de manteniment són assumits per l'<a className="griuGros" href="http://ipfs.io/ipns/QmR7wbEoXbwJPDMF86X3MKFNpiBLcdHMg6qdFCFjbyEdUy" target="_blank">Associació Cultural Griu Gros</a> (G-66745555)</p> 

               

            </div>
        </section>
        <section>
            <NavFooter />
        </section>

    </div>)

}

export default Presentacio;