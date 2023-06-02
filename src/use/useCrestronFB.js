import { ref } from 'vue'

export function useCrestronFB(Join) {
  const digFB = ref(false),
    anFB = ref(0),
    stringFB = ref('')

  CrComLib.subscribeState('b', Join, v => {
    digFB.value = v
  })

  CrComLib.subscribeState('n', Join, v => {
    anFB.value = v
  })

  CrComLib.subscribeState('s', Join, v => {
    stringFB.value = s ? s : 'none'
  })
  return { digFB, anFB, stringFB }
}
