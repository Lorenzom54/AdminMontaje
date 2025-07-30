class l{constructor(){this.init()}init(){document.addEventListener("click",t=>{const e=t.target.closest("[data-open-modal]");if(e){const o=e.getAttribute("data-open-modal");this.openModal(o)}}),document.addEventListener("click",t=>{const e=t.target.closest("[data-close-modal]");if(e){const o=e.getAttribute("data-close-modal");this.closeModal(o)}if(t.target.classList.contains("modal-backdrop")){const o=t.target.closest(".modal");o&&this.closeModal(o.id)}}),document.addEventListener("keydown",t=>{if(t.key==="Escape"){const e=document.querySelector(".modal.active");e&&this.closeModal(e.id)}}),this.initFormHandlers(),this.initTabSystem(),this.initEditMode()}openModal(t){const e=document.getElementById(t);if(e){e.classList.add("active"),document.body.style.overflow="hidden";const o=e.querySelector("input, select, textarea"),i=e.querySelector(".tab-button");o?setTimeout(()=>o.focus(),100):i&&setTimeout(()=>i.focus(),100)}}closeModal(t){const e=document.getElementById(t);if(e){e.classList.remove("active"),document.body.style.overflow="";const o=e.querySelector("form");o&&o.reset(),this.disableEditMode(e)}}initFormHandlers(){document.addEventListener("submit",t=>{const e=t.target;e.closest(".modal")&&(t.preventDefault(),this.handleFormSubmit(e))})}handleFormSubmit(t){const e=new FormData(t),o=Object.fromEntries(e.entries());console.log("Datos del formulario:",o),this.showSuccessMessage(t),setTimeout(()=>{const i=t.closest(".modal");i&&this.closeModal(i.id)},1500)}showSuccessMessage(t){const e=t.querySelector('[type="submit"]');if(e){const o=e.innerHTML;e.innerHTML=`
        <svg width="16" height="16" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7" />
        </svg>
        ¡Guardado!
      `,e.style.background="#10b981",setTimeout(()=>{e.innerHTML=o,e.style.background=""},1500)}}initTabSystem(){document.addEventListener("click",t=>{const e=t.target.closest(".tab-button");if(e){const o=e.getAttribute("data-tab"),i=e.closest(".modal");i&&o&&this.switchTab(i,o)}})}switchTab(t,e){const o=t.querySelectorAll(".tab-button"),i=t.querySelectorAll(".tab-panel");o.forEach(d=>d.classList.remove("active")),i.forEach(d=>d.classList.remove("active"));const s=t.querySelector(`[data-tab="${e}"]`),a=t.querySelector(`[data-panel="${e}"]`);s&&a&&(s.classList.add("active"),a.classList.add("active"))}initEditMode(){document.addEventListener("click",t=>{const e=t.target.closest("[data-edit-mode]");if(e){const o=e.getAttribute("data-edit-mode"),i=e.closest(".modal");if(i)switch(o){case"enable":case"toggle":this.enableEditMode(i);break;case"cancel":this.disableEditMode(i);break;case"save":this.saveChanges(i);break}}})}enableEditMode(t){t.classList.add("edit-mode");const e=t.querySelector(".footer-actions.view-mode"),o=t.querySelector(".footer-actions.edit-mode");e&&(e.style.display="none"),o&&(o.style.display="flex"),t.querySelectorAll(".info-value.editable").forEach(s=>{this.convertToInput(s)})}disableEditMode(t){t.classList.remove("edit-mode");const e=t.querySelector(".footer-actions.view-mode"),o=t.querySelector(".footer-actions.edit-mode");e&&(e.style.display="flex"),o&&(o.style.display="none"),t.querySelectorAll(".info-value.editable").forEach(s=>{this.convertToText(s)})}convertToInput(t){const e=t.textContent.trim(),o=t.getAttribute("data-field");let i="text";o&&o.includes("fecha")?i="date":o&&(o.includes("valor")||o.includes("precio"))&&(i="number");const s=document.createElement("input");s.type=i,s.value=e.replace("€","").replace(",",""),s.className="edit-input",s.setAttribute("data-original-value",e),t.innerHTML="",t.appendChild(s),modal.querySelector(".edit-input:focus")||s.focus()}convertToText(t){const e=t.querySelector(".edit-input");if(e){const o=e.getAttribute("data-original-value");t.textContent=o}}saveChanges(t){const e=t.querySelectorAll(".info-value.editable"),o={};e.forEach(s=>{const a=s.querySelector(".edit-input");if(a){const d=s.getAttribute("data-field"),c=a.value;o[d]=c,s.textContent=c}}),console.log("Cambios guardados:",o);const i=t.querySelector('[data-edit-mode="save"]');if(i){const s=i.innerHTML;i.innerHTML=`
        <svg width="16" height="16" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7" />
        </svg>
        ¡Guardado!
      `,i.style.background="#10b981",setTimeout(()=>{i.innerHTML=s,i.style.background="",this.disableEditMode(t)},1500)}}}window.openModal=function(n){window.modalManager.openModal(n)};window.closeModal=function(n){window.modalManager.closeModal(n)};document.addEventListener("DOMContentLoaded",()=>{window.modalManager=new l;const n=document.createElement("style");n.textContent=`
    .edit-input {
      width: 100%;
      padding: 6px 8px;
      border: 1px solid #3b82f6;
      border-radius: 4px;
      font-size: 14px;
      font-weight: 500;
      background: white;
      color: #111827;
      outline: none;
      box-shadow: 0 0 0 3px rgba(59, 130, 246, 0.1);
    }
    
    .edit-input:focus {
      border-color: #2563eb;
      box-shadow: 0 0 0 3px rgba(59, 130, 246, 0.2);
    }
  `,document.head.appendChild(n)});
