import "../styles/global.css"

import { ChallengesProvider} from "../contexts/ChallengesContext"

function MyApp({ Component, pageProps }) {
  return (
    // todos os elementos dentro do provider terão acesso aos dados do contexto
    <ChallengesProvider>
      <Component {...pageProps} />
    </ChallengesProvider>
    
  
  )
}

export default MyApp
