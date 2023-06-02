import { ref } from 'vue'
let interval = null

export function useCrestronAct() {
  // a function that takes a join number as a strin and pulses it when function is run
  const dPulse = j => {
      CrComLib.publishEvent('b', j, true)
      CrComLib.publishEvent('b', j, false)
    },
    // function that typicaly bound to a clickDown or touchStart even that holds the join high take $event and joing as arguments
    dHoldStart = (ev, j) => {
      if (interval !== null) return
      CrComLib.publishEvent('o', j, { repeatdigital: true })
      interval = setInterval(() => {
        CrComLib.publishEvent('o', j, { repeatdigital: true })
      }, 250) // 250 mseconds repeat
    },
    // function that typicaly bound to a clickUp or touchEnd even that sends the joing low, take $event and joing as arguments
    dHoldEnd = (ev, j) => {
      if (interval !== null) {
        clearInterval(interval)
        interval = null
      }
      CrComLib.publishEvent('o', j, { repeatdigital: false })
    },
    // function that send a Number/intiger to a crestron Join, argumnts are join number/name and value
    anSend = (j, val) => {
      CrComLib.publishEvent('n', j, val)
    },
    // function that send a String  to a crestron Join, argumnts are join number/name and value
    stringSend = (j, val) => {
      CrComLib.publishEvent('s', j, val)
    }

  return { dPulse, dHoldStart, dHoldEnd, anSend, stringSend }
}
