import { reactive } from 'vue'
import f from './f.js'

export const theater = theaterJS()
export const UI = reactive({ bg: 0 })

let block = false
let string = ''

export function clear () {
  string = ''
  UI.bg = 0
}

export function input (i) {
  if (block) return
  string += i
  UI.bg = 1
  if (f[string]) {
    block = true
    f[string](theater.addScene)
    clear()
    theater.addScene(done => {
      block = false
      done()
    })
  } 
}
