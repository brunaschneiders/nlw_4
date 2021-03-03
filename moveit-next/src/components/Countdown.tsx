import {useState, useEffect, useContext} from 'react'
import { CountdownContext } from '../contexts/CountdownContext';

import styles from "../styles/components/Countdown.module.css"

export function Countdown(){
   const { 
      minutes, 
      seconds, 
      hasFinished, 
      isActive, 
      startCountdown, 
      resetCountdown 
   } = useContext(CountdownContext)

   // padStart está verificando se a string tem 2 caracteres. Se não tem, adiciona um 0
   // o array desetruturado pega os dois itens "gerados" no mesmo
   const [minuteLeft, minuteRight] = String(minutes).padStart(2, '0').split('')
   const [secondLeft, secondRight] = String(seconds).padStart(2, '0').split('')
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

         {hasFinished ? (
            <button disabled type="button" className={`${styles.countdownButton}`}>
              Ciclo encerrado
            </button>
         ) : (
            <>
            {isActive ? (
            <button type="button" className={`${styles.countdownButton} ${styles.countdownButtonActive}`} onClick={resetCountdown}>
               Abandonar ciclo
            </button>
               ):
               (
            <button type="button" className={styles.countdownButton} onClick={startCountdown}>
               Iniciar um ciclo
            </button>
            )}
            </>
         )}

       </div>
    )
}