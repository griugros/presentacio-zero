import { motion } from 'framer-motion';
import PropTypes from 'prop-types';

// Títol animat

function Mh(props){

    const {children, variant, h} = props;    

    // La mida per defecte dels títols és de h3
    const is = h === undefined ? "3" : h; 
   
    // Animacions

    const horitzontal = {
        amagat:{ opacity: 0, x: -25 },        
        visible: {
            opacity: 1,
            x: 0,
            transition: {
                staggerChildren: 0.3,
                duration: 0.2,
                ease: "easeIn"
            }
        },
        sortida: {
            opacity: 0,
            x: -25,
            transition: {
                staggerChildren: 0.25,
                duration: 0.2,
                ease: "easeOut"
            }
        }
    }

    const vertical = {
        amagat:{ opacity: 0, y: -25 },        
        visible: {
            opacity: 1,
            y: 0,
            transition: {
                staggerChildren: 0.3,
                duration: 0.2,
                ease: "easeIn"
            }
        },
        sortida: {
            opacity: 0,
            y: -25,
            transition: {
                staggerChildren: 0.25,
                duration: 0.5,
                ease: "easeOut"
            }
        }
    }

    // La variant per defecte és horitzontal
    const moviment= variant === undefined || variant === "horitzontal" ? horitzontal : vertical;

    return (
        <motion.h1
            
            key={`titol-${children}`}
            className={`title is-${is}`}
            initial="amagat"
            animate="visible"
            exit="sortida"
            variants={moviment}>

            {children}

        </motion.h1>
    )
}


// Comprovem que el component rep allò que estem esperant

Mh.propTypes = {

    children: PropTypes.string,
    variant: PropTypes.oneOf(['horitzontal', 'vertical']),
    h: PropTypes.oneOf(['1', '2','3','4','5','6'])

}

export default Mh;
