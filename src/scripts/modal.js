// Sistema de gestión de modales
class ModalManager {
  constructor() {
    this.init();
  }

  init() {
    // Agregar event listeners para abrir modales
    document.addEventListener('click', (e) => {
      const button = e.target.closest('[data-open-modal]');
      if (button) {
        const modalId = button.getAttribute('data-open-modal');
        this.openModal(modalId);
      }
    });

    // Agregar event listeners para cerrar modales
    document.addEventListener('click', (e) => {
      const closeButton = e.target.closest('[data-close-modal]');
      if (closeButton) {
        const modalId = closeButton.getAttribute('data-close-modal');
        this.closeModal(modalId);
      }

      // Cerrar modal al hacer clic en el backdrop
      if (e.target.classList.contains('modal-backdrop')) {
        const modal = e.target.closest('.modal');
        if (modal) {
          this.closeModal(modal.id);
        }
      }
    });

    // Cerrar modal con ESC
    document.addEventListener('keydown', (e) => {
      if (e.key === 'Escape') {
        const activeModal = document.querySelector('.modal.active');
        if (activeModal) {
          this.closeModal(activeModal.id);
        }
      }
    });

    // Manejar envío de formularios
    this.initFormHandlers();
    
    // Inicializar sistema de pestañas
    this.initTabSystem();
    
    // Inicializar modo de edición
    this.initEditMode();
  }

  openModal(modalId) {
    const modal = document.getElementById(modalId);
    if (modal) {
      modal.classList.add('active');
      document.body.style.overflow = 'hidden';
      
      // Focus en el primer input del formulario o primer tab
      const firstInput = modal.querySelector('input, select, textarea');
      const firstTab = modal.querySelector('.tab-button');
      
      if (firstInput) {
        setTimeout(() => firstInput.focus(), 100);
      } else if (firstTab) {
        setTimeout(() => firstTab.focus(), 100);
      }
    }
  }

  closeModal(modalId) {
    const modal = document.getElementById(modalId);
    if (modal) {
      modal.classList.remove('active');
      document.body.style.overflow = '';
      
      // Limpiar formulario
      const form = modal.querySelector('form');
      if (form) {
        form.reset();
      }
      
      // Resetear modo de edición
      this.disableEditMode(modal);
    }
  }

  initFormHandlers() {
    // Manejar envío de formularios
    document.addEventListener('submit', (e) => {
      const form = e.target;
      if (form.closest('.modal')) {
        e.preventDefault();
        this.handleFormSubmit(form);
      }
    });
  }

  async handleFormSubmit(form) {
    const formData = new FormData(form);
    const data = Object.fromEntries(formData.entries());
    
    // Si es el formulario de obras, obtener las fases dinámicamente
    if (form.id === 'obras-form') {
      console.log('=== FORMULARIO DE OBRAS ===');
      
      // Verificar si estamos editando
      const editId = form.getAttribute('data-edit-id');
      const isEditing = !!editId;
      
      console.log('¿Estamos editando?', isEditing, 'ID:', editId);
      
      try {
        // Obtener las fases desde la base de datos
        const fasesResponse = await fetch('/api/fases/get');
        const fasesData = await fasesResponse.json();
        
        if (fasesData.success) {
          const fasesPiezas = fasesData.fases_piezas;
          const fasesConjuntos = fasesData.fases_conjuntos;
          
          // Agregar las fases al objeto de datos
          data.fases_piezas = fasesPiezas;
          data.fases_conjuntos = fasesConjuntos;
          
          console.log('Fases de piezas obtenidas de BD:', fasesPiezas);
          console.log('Fases de conjuntos obtenidas de BD:', fasesConjuntos);
          console.log('Datos completos:', data);
          
          // Enviar al API
          this.sendObraToAPI(data, form, isEditing, editId);
        } else {
          throw new Error('Error al obtener fases: ' + fasesData.error);
        }
      } catch (error) {
        console.error('Error al obtener fases:', error);
        
        // Fallback: usar fases por defecto si hay error
        const fasesPiezas = ["Para cortar", "Cortado"];
        const fasesConjuntos = [
          "Incompleto", 
          "Para montar", 
          "Completado"
        ];
        
        data.fases_piezas = fasesPiezas;
        data.fases_conjuntos = fasesConjuntos;
        
        console.log('Usando fases por defecto debido a error:', fasesPiezas, fasesConjuntos);
        
        // Enviar al API
        this.sendObraToAPI(data, form, isEditing, editId);
      }
    } else {
      // Para otros formularios, comportamiento normal
      console.log('Datos del formulario:', data);
      this.showSuccessMessage(form);
      
      setTimeout(() => {
        const modal = form.closest('.modal');
        if (modal) {
          this.closeModal(modal.id);
        }
      }, 1500);
    }
  }

  showSuccessMessage(form) {
    const submitButton = form.querySelector('[type="submit"]');
    if (submitButton) {
      const originalText = submitButton.innerHTML;
      submitButton.innerHTML = `
        <svg width="16" height="16" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7" />
        </svg>
        ¡Guardado!
      `;
      submitButton.style.background = '#10b981';
      
      setTimeout(() => {
        submitButton.innerHTML = originalText;
        submitButton.style.background = '';
      }, 1500);
    }
  }

  initTabSystem() {
    document.addEventListener('click', (e) => {
      const tabButton = e.target.closest('.tab-button');
      if (tabButton) {
        const tabId = tabButton.getAttribute('data-tab');
        const modal = tabButton.closest('.modal');
        
        if (modal && tabId) {
          this.switchTab(modal, tabId);
        }
      }
    });
  }

  switchTab(modal, activeTabId) {
    // Desactivar todas las pestañas
    const allTabs = modal.querySelectorAll('.tab-button');
    const allPanels = modal.querySelectorAll('.tab-panel');
    
    allTabs.forEach(tab => tab.classList.remove('active'));
    allPanels.forEach(panel => panel.classList.remove('active'));
    
    // Activar la pestaña seleccionada
    const activeTab = modal.querySelector(`[data-tab="${activeTabId}"]`);
    const activePanel = modal.querySelector(`[data-panel="${activeTabId}"]`);
    
    if (activeTab && activePanel) {
      activeTab.classList.add('active');
      activePanel.classList.add('active');
    }
  }

  initEditMode() {
    document.addEventListener('click', (e) => {
      const editButton = e.target.closest('[data-edit-mode]');
      if (editButton) {
        const action = editButton.getAttribute('data-edit-mode');
        const modal = editButton.closest('.modal');
        
        if (modal) {
          switch (action) {
            case 'enable':
            case 'toggle':
              this.enableEditMode(modal);
              break;
            case 'cancel':
              this.disableEditMode(modal);
              break;
            case 'save':
              this.saveChanges(modal);
              break;
          }
        }
      }
    });
  }

  enableEditMode(modal) {
    modal.classList.add('edit-mode');
    
    // Mostrar/ocultar botones apropiados
    const viewActions = modal.querySelector('.footer-actions.view-mode');
    const editActions = modal.querySelector('.footer-actions.edit-mode');
    
    if (viewActions) viewActions.style.display = 'none';
    if (editActions) editActions.style.display = 'flex';
    
    // Convertir campos editables en inputs
    const editableFields = modal.querySelectorAll('.info-value.editable');
    editableFields.forEach(field => {
      this.convertToInput(field);
    });
  }

  disableEditMode(modal) {
    modal.classList.remove('edit-mode');
    
    // Mostrar/ocultar botones apropiados
    const viewActions = modal.querySelector('.footer-actions.view-mode');
    const editActions = modal.querySelector('.footer-actions.edit-mode');
    
    if (viewActions) viewActions.style.display = 'flex';
    if (editActions) editActions.style.display = 'none';
    
    // Restaurar campos editables
    const editableFields = modal.querySelectorAll('.info-value.editable');
    editableFields.forEach(field => {
      this.convertToText(field);
    });
  }

  convertToInput(field) {
    const currentValue = field.textContent.trim();
    const fieldName = field.getAttribute('data-field');
    const dataType = field.getAttribute('data-type');
    
    // Si es un select, crear un elemento select
    if (dataType === 'select') {
      const optionsAttr = field.getAttribute('data-options');
      const currentValueAttr = field.getAttribute('data-value');
      
      try {
        const options = JSON.parse(optionsAttr || '[]');
        const select = document.createElement('select');
        select.className = 'edit-input edit-select';
        select.setAttribute('data-original-value', currentValue);
        
        // Añadir opción vacía
        const emptyOption = document.createElement('option');
        emptyOption.value = '';
        emptyOption.textContent = 'Seleccionar...';
        select.appendChild(emptyOption);
        
        // Añadir opciones
        options.forEach(option => {
          const optionElement = document.createElement('option');
          optionElement.value = option.value;
          optionElement.textContent = option.label;
          if (option.value === currentValueAttr) {
            optionElement.selected = true;
          }
          select.appendChild(optionElement);
        });
        
        field.innerHTML = '';
        field.appendChild(select);
        return;
      } catch (e) {
        console.error('Error parsing select options:', e);
      }
    }
    
    // Determinar el tipo de input basado en el campo
    let inputType = 'text';
    if (fieldName && fieldName.includes('fecha')) {
      inputType = 'date';
    } else if (fieldName && (fieldName.includes('valor') || fieldName.includes('precio'))) {
      inputType = 'number';
    }
    
    const input = document.createElement('input');
    input.type = inputType;
    input.value = currentValue.replace('€', '').replace(',', '');
    input.className = 'edit-input';
    input.setAttribute('data-original-value', currentValue);
    
    field.innerHTML = '';
    field.appendChild(input);
    
    // Focus en el primer input
    if (!modal.querySelector('.edit-input:focus')) {
      input.focus();
    }
  }

  convertToText(field) {
    const input = field.querySelector('.edit-input');
    if (input) {
      const originalValue = input.getAttribute('data-original-value');
      field.textContent = originalValue;
    }
  }

  async sendObraToAPI(data, form, isEditing = false, editId = null) {
    const submitButton = form.querySelector('[type="submit"]');
    if (submitButton) {
      // Deshabilitar botón durante el envío
      submitButton.disabled = true;
      const originalText = submitButton.innerHTML;
      submitButton.innerHTML = isEditing ? 'Actualizando...' : 'Creando...';
    }

    try {
      const url = isEditing ? `/api/obras/${editId}` : '/api/obras/create';
      const method = isEditing ? 'PUT' : 'POST';
      
      console.log('Enviando a:', url, 'método:', method);
      
      const res = await fetch(url, {
        method: method,
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(data)
      });

      const json = await res.json();
      
      if (json.success) {
        // Mostrar éxito
        if (submitButton) {
          submitButton.innerHTML = isEditing ? '¡Obra actualizada!' : '¡Obra creada!';
          submitButton.style.background = '#10b981';
        }
        
        // Recargar la página después de un breve delay
        setTimeout(() => {
          location.reload();
        }, 1500);
      } else {
        throw new Error(json.error || `Error al ${isEditing ? 'actualizar' : 'crear'} la obra`);
      }
    } catch (error) {
      console.error(`Error al ${isEditing ? 'actualizar' : 'crear'} obra:`, error);
      
      // Mostrar error
      if (submitButton) {
        submitButton.innerHTML = `Error al ${isEditing ? 'actualizar' : 'crear'}`;
        submitButton.style.background = '#ef4444';
        submitButton.disabled = false;
        
        setTimeout(() => {
          submitButton.innerHTML = originalText;
          submitButton.style.background = '';
        }, 2000);
      }
    }
  }

  async saveChanges(modal) {
    const editableFields = modal.querySelectorAll('.info-value.editable');
    const changes = {};
    
    editableFields.forEach(field => {
      const input = field.querySelector('.edit-input');
      if (input) {
        const fieldName = field.getAttribute('data-field');
        let newValue = input.value;
        
        // Convertir valores numéricos
        if (fieldName === 'estado_actual' && newValue !== '') {
          newValue = parseInt(newValue);
        }
        
        changes[fieldName] = newValue;
        
        // Actualizar el valor mostrado en el DOM
        if (input.tagName === 'SELECT') {
          const selectedOption = input.options[input.selectedIndex];
          field.innerHTML = `<span class="estado-actual-badge">${selectedOption.textContent}</span>`;
          // Actualizar el data-value para futuras ediciones
          field.setAttribute('data-value', newValue.toString());
        } else {
          field.textContent = newValue;
        }
      }
    });
    
    // Determinar el tipo de entidad y el ID
    const modalId = modal.id;
    let entityType = '';
    let entityId = '';
    
    if (modalId.includes('detail-pieza-')) {
      entityType = 'piezas';
      entityId = modalId.replace('detail-pieza-', '');
    } else if (modalId.includes('detail-conjunto-')) {
      entityType = 'conjuntos';
      entityId = modalId.replace('detail-conjunto-', '');
    } else if (modalId.includes('detail-obra-')) {
      entityType = 'obras';
      entityId = modalId.replace('detail-obra-', '');
    }
    
    console.log('Cambios a guardar:', changes);
    console.log('Entidad:', entityType, 'ID:', entityId);
    
    const saveButton = modal.querySelector('[data-edit-mode="save"]');
    if (saveButton) {
      const originalText = saveButton.innerHTML;
      saveButton.disabled = true;
      saveButton.innerHTML = `
        <svg width="16" height="16" fill="none" viewBox="0 0 24 24" stroke="currentColor" class="animate-spin">
          <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 4v5h.582m15.356 2A8.001 8.001 0 004.582 9m0 0H9m11 11v-5h-.581m0 0a8.003 8.003 0 01-15.357-2m15.357 2H15" />
        </svg>
        Guardando...
      `;
      
      try {
        const response = await fetch(`/api/${entityType}/${entityId}`, {
          method: 'PUT',
          headers: {
            'Content-Type': 'application/json'
          },
          body: JSON.stringify(changes)
        });
        
        const result = await response.json();
        
        if (result.success) {
          // Mostrar mensaje de éxito
          saveButton.innerHTML = `
            <svg width="16" height="16" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7" />
            </svg>
            ¡Guardado!
          `;
          saveButton.style.background = '#10b981';
          
          setTimeout(() => {
            saveButton.innerHTML = originalText;
            saveButton.style.background = '';
            saveButton.disabled = false;
            this.disableEditMode(modal);
            // Recargar la página para reflejar cambios
            location.reload();
          }, 1500);
        } else {
          throw new Error(result.error || 'Error al guardar');
        }
      } catch (error) {
        console.error('Error al guardar cambios:', error);
        
        // Mostrar error
        saveButton.innerHTML = `
          <svg width="16" height="16" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12" />
          </svg>
          Error al guardar
        `;
        saveButton.style.background = '#ef4444';
        
        setTimeout(() => {
          saveButton.innerHTML = originalText;
          saveButton.style.background = '';
          saveButton.disabled = false;
        }, 2000);
      }
    }
  }
}

// Funciones globales para compatibilidad
window.openModal = function(modalId) {
  if (window.modalManager) {
    window.modalManager.openModal(modalId);
  } else {
    console.error('ModalManager no está inicializado');
  }
};

window.closeModal = function(modalId) {
  if (window.modalManager) {
    window.modalManager.closeModal(modalId);
  } else {
    console.error('ModalManager no está inicializado');
  }
};

// Inicializar cuando el DOM esté listo
document.addEventListener('DOMContentLoaded', () => {
  console.log('Inicializando ModalManager...');
  window.modalManager = new ModalManager();
  console.log('ModalManager inicializado:', window.modalManager);
  
  // Agregar estilos para el modo de edición
  const style = document.createElement('style');
  style.textContent = `
    .edit-input, .edit-select {
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
  `;
  document.head.appendChild(style);
});