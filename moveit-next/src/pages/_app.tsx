import "../styles/global.css"

import { ChallengesProvider} from "../contexts/ChallengesContext"
import { CountdownProvider } from "../contexts/CountdownContext"

function MyApp({ Component, pageProps }) {
  return (
    // todos os elementos dentro do provider terão acesso aos dados do contexto
    // como o Countdown depende do Challenge, ele deve ficar por dentro do primeiro
    <ChallengesProvider>
      <CountdownProvider>
        <Component {...pageProps} />
      </CountdownProvider>
    </ChallengesProvider>
    
  
  )
}

export default MyApp
