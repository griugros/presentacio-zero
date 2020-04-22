// Documentació https://nextjs.org/docs/advanced-features/custom-document
import Document, { Html, Head, Main, NextScript } from 'next/document'


class MyDocument extends Document {
  static async getInitialProps(ctx) {
    const initialProps = await Document.getInitialProps(ctx)
    return { ...initialProps }
  }

  render() {
    return (
      <Html lang="ca">
        <Head/>           
        <body>
          <img src="https://vicesalles.me/analytics/matomo.php?idsite=3&amp;rec=1" style={{top:0,left:0, width:1, border:0, position:"fixed", zIndex:9}} alt="" />
          <Main />
          <NextScript />            
          <noscript>
           <img src="https://vicesalles.me/analytics/matomo.php?idsite=3&amp;rec=1" style={{top:0, postion:"fixed", border:0, zIndex:900}} alt="" />
          </noscript>        
          
        </body>
      </Html>
    )
  }
}

export default MyDocument

