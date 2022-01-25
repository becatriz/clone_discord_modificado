import Document, {Html, Head, Main, NextScript}  from "next/document"

export default class MyDocyment extends Document {
    render(){
        return(
         <Html>
         <Head>
         <meta property="og:image"  content="https://i.imgur.com/EPU2oe5.png" key="ogimage" />
         <meta property="og:image:width" content="500" />
         <meta property="og:image:height" content="500" /> 
         <meta property="og:title" content="BeCord - Matrix" key="ogtitle" />
        <meta property="og:description" content="Bem vindes ao BeCord Matrix, seu mundo de chat nunca mais será o mesmo" key="ogdesc" />
         </Head>   
         <body>
             <Main/>
             <NextScript/>
         </body>     
         </Html>
            
        )
    }
}