const toggle=document.querySelector('.menu-toggle');
const nav=document.querySelector('.nav');
if(toggle&&nav){
  toggle.addEventListener('click',()=>{
    const open=nav.classList.toggle('open');
    toggle.setAttribute('aria-expanded',String(open));
    toggle.setAttribute('aria-label',open?'Закрыть меню':'Открыть меню');
  });
  nav.querySelectorAll('a').forEach(link=>link.addEventListener('click',()=>{
    nav.classList.remove('open');
    toggle.setAttribute('aria-expanded','false');
    toggle.setAttribute('aria-label','Открыть меню');
  }));
}
const form=document.getElementById('demo-booking-form');
if(form){form.addEventListener('submit',event=>{
  event.preventDefault();
  const service=form.elements.service.value;
  const date=form.elements.date.value;
  document.getElementById('booking-feedback').textContent=`Демонстрация: выбрана услуга «${service}», дата ${date}. Данные никуда не отправлены.`;
});}
