import { motion } from 'framer-motion';
import PropTypes from 'prop-types';

// Paràgraf animat

function Mp(props){

    const {children, variant} = props;  
    
    const key = children.slice(0,5)

      
    // Animacions

    const horitzontal = {
        amagat:{ opacity: 0, x: -25 },        
        visible: {
            opacity: 1,
            x: 0,
            transition: {
                staggerChildren: 0.3,
                duration: 0.5,
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
        amagat:{ opacity: 0, y: 25 },        
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
    const moviment= variant === undefined || variant === "vertical" ? vertical : horitzontal;

    return (
        <motion.p     

            key={`paragraf-${key}`}            
            initial="amagat"
            animate="visible"
            exit="sortida"
            variants={moviment}>

            {children}

        </motion.p>
    )
}


// Comprovem que el component rep allò que estem esperant

Mp.propTypes = {

    children: PropTypes.string,
    variant: PropTypes.oneOf(['horitzontal', 'vertical'])
    

}

export default Mp;
