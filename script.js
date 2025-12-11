document.addEventListener('DOMContentLoaded', function(){

  document.querySelectorAll('.row').forEach((r,i)=>{
    r.setAttribute('tabindex','0');
    r.addEventListener('keydown', (e)=>{
      if(e.key === 'Enter') r.classList.toggle('selected');
    });
  });
});