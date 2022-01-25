import Document, {Html, Head, Main, NextScript}  from "next/document"

export default class MyDocyment extends Document {
    render(){
        return(
         <Html>
         <Head>
         <link href="https://fonts.googleapis.com/css2?family=Roboto:wght@400;700;900&display=swap" rel="stylesheet"/>
         <meta property="og:image" content="https://i.imgur.com/EPU2oe5.png" key="ogimage" />
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