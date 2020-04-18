import React from 'react';
import App from 'next/app';
import { AnimatePresence } from 'framer-motion';

import '../estil/principal.scss';


// Amb aquest HOC del Framer Motion permetem fer transicions entre pàgines.
        // Info => https://reacttricks.com/animating-next-page-transitions-with-framer-motion/



class Presentacio extends App {
  render() {
    
    const { Component, pageProps, router } = this.props;
    return (
      <AnimatePresence exitBeforeEnter>
        <Component {...pageProps} key={router.route} />
      </AnimatePresence>
    );
  }
}

export default Presentacio;