import {useState, useEffect} from 'react'

import styles from "../styles/components/Countdown.module.css"

export function Countdown(){
   const [time, setTime] = useState(25 * 60);
   const [active, setActive] = useState(false);

   // arredonda pra baixo
   const minutes = Math.floor(time / 60);
   // pega o resto da divisao por 60
   const seconds = time % 60;

   // padStart está verificando se a string tem 2 caracteres. Se não tem, adiciona um 0
   // o array desetruturado pega os dois itens "gerados" no mesmo
   const [minuteLeft, minuteRight] = String(minutes).padStart(2, '0').split('')
   const [secondLeft, secondRight] = String(seconds).padStart(2, '0').split('')


   function startCountdown(){
      setActive(true)
   }

   useEffect(()=> {
      if(active && time> 0){
         setTimeout(()=>{
            setTime(time - 1)
         }, 1000)
      }
   }, [active, time])

    return (
       <div>
         <div className={styles.countdownContainer}>
            <div>
               <span>{minuteLeft}</span>
               <span>{minuteRight}</span>
            </div>
            <span>:</span>
            <div>
               <span>{secondLeft}</span>
               <span>{secondRight}</span>
            </div>
         </div>

         <button type="button" className={styles.countdownButton} onClick={()=>startCountdown()}>Iniciar um ciclo</button>
       </div>
    )
}