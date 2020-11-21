const alerts = document.querySelector('.alert')
const btn = document.querySelector('.btn')
const btn2 = document.querySelector('.btn2')
const phoneh2 = document.querySelector('.phoneh2')


function f1() {
const vol = document.getElementById('vol')
const cvadrat = document.querySelector('.cvadrat')
const cub = document.querySelector('.cub')
const m = document.querySelector('.m')
cvadrat.innerHTML = vol.value * 200 + ' грн'
cub.innerHTML = vol.value * 700 + ' грн'
m.innerHTML = vol.value + ' м²'

}
btn.addEventListener('click',(e) => {
phoneh2.textContent = 'Дякуємо ми звяжемся з вами!'
    
})
btn2.addEventListener('click',(e) => {
  alerts.textContent = 'Дякую ми звяжемся з вами!'
      
  })

          