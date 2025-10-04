'use strict'

const clock = document.getElementById('clock')
const calendar = document.getElementById('calendar')
const hex = document.getElementById('hex')
const appContainer = document.getElementById('app-container')

const secondsInDay = 60 * 60 * 24

const getHexFromDate = date => {
  return (
    String(date.getHours()).padStart(2, '0') +
    String(date.getMinutes()).padStart(2, '0') +
    String(date.getSeconds()).padStart(2, '0')
  ).toString(16)
}

const changeHex = date => {
  const newHex = `#${getHexFromDate(date)}`
  hex.innerHTML = newHex
  appContainer.style.backgroundColor = newHex
}

const updateClock = date => {
  clock.innerHTML = `
    ${String(date.getHours()).padStart(2, '0')} :
    ${String(date.getMinutes()).padStart(2, '0')} :
    ${String(date.getSeconds()).padStart(2, '0')}`
}

const updateDate = date => {
  calendar.innerHTML = `
    ${String(date.getMonth() + 1).padStart(2, '0')} /
    ${String(date.getDate()).padStart(2, '0')} /
    ${String(date.getFullYear())}`
}

const setAllValues = () => {
  const date = new Date()
  changeHex(date)
  updateClock(date)
  updateDate(date)
}

setAllValues()

setInterval(setAllValues, 1000)
