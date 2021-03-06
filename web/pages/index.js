import Head from 'next/head';
import Link from 'next/link';
import { motion } from 'framer-motion';

// Components
import NavFooter from '../components/NavFooter';

export default function Home() {

  // Animacions Framer

  const container = {
    hidden: { opacity: 0, y:25},
    visible: {
      opacity: 1,
      y:0,      
      transition: {
        staggerChildren: 0.50,
        duration:0.75
      }  
    },
    exit:{
      opacity: 0,
      y:-25,
      transition: {
        staggerChildren: -0.25,
        duration: 0.5
      }  
    }
  } 

  const logo = {
    amagat:{
      opacity:0,     
      scale:6
    },
    visible:{
      opacity:1,    
      scale:1,    
      transition:{
        delay: 1.25
      }
    },
    sortida:{     
      scale:2,
      opacity:0
    }
  }


  const botoLogo = {
    amagat:{
      opacity:0, 
      y:50 
      
    },
    visible:{      
      opacity:1, 
      y:0, 
      transition:{
        delay: 1.5
      }
    },
    sortida:{     
      scale:0,
      opacity:0
    }
  }



  const item = {
    hidden: { opacity: 0, y:25 },
    visible: { opacity: 1, y:0 },
    exit: { opacity: 0, y:25 }
  }

  return (
    <div>
      <Head>
        <title>Què és Sàvies.cat?</title>
        <link rel="icon" href="/favicon.ico?v=4" />
        {/* Tags Facebook*/}
        <meta property="og:url"                content="https://presentacio-savies.now.sh/" />
        <meta property="og:type"               content="web" />
        <meta property="og:title"              content="Què és Sàvies.cat?" />
        <meta property="og:description"        content="Sàvies és una plataforma divulgativa d'educació en el lleure." />
        <meta property="og:image"              content="https://presentacio-savies.now.sh/img/fons_savies.png" />
        {/* Tags Twitter*/}
        <meta name="twitter:card" content="summary" />
        <meta name="twitter:site" content="@somsavies" />        
      </Head>
      <section className="hero is-fullheight is-success">
        <div className="hero-body" style={{overflow:"hidden"}}>   
        <div className="container">  
          
           <div className="level">
            <motion.div
              className="container"
              initial="hidden"
              animate="visible"   
              exit="exit"    
              variants={container}             
            >
              <p variants={item} className="title">
              <motion.span variants={item}>És un joc?</motion.span> <motion.span variants={item}>És un magazine?</motion.span>
              </p>
              <motion.p variants={item} className="subtitle">
                Presentem Sàvies.cat
              </motion.p>           
            </motion.div>
          </div>
            <div className="container container-logo">
              <motion.img 
                id="logo-home-savies"
                initial="amagat"
                animate="visible" 
                exit="sortida"  
                variants={logo}
              src="/img/savies_400.svg"/>
              <motion.div
                initial="amagat"
                animate="visible" 
                exit="sortida"  
                variants={botoLogo}
              >
                <Link href="/presentacio"><a className="button is-primary">Veure la presentació</a></Link>
              </motion.div>
            </div>
          </div>
        </div>

        <NavFooter/>

      </section>


    </div>
  )
}
