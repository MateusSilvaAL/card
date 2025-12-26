/* script.js — Minimal interaction for Kinta Card */

(function(){
  // toggles the small info blocks
  document.addEventListener('click', function(e){
    if(e.target.matches('.btn.reveal')){
      const id = e.target.getAttribute('data-id');
      const el = document.getElementById(id);
      if(!el) return;
      el.style.display = el.style.display === 'block' ? 'none' : 'block';
    }

    // header buttons scroll to a panel (keeps structure JS-light)
    if(e.target.matches('.btn[data-target]')){
      const id = e.target.getAttribute('data-target');
      const panel = document.getElementById(id);
      if(panel) panel.scrollIntoView({behavior:'smooth',block:'center'});
    }
  });
})();