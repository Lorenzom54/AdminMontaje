// Sistema de paginación para piezas
class PiezasPagination {
  constructor() {
    this.currentPage = 1;
    this.pageSize = 10;
    this.totalPages = 1;
    this.totalCount = 0;
    this.isLoading = false;
    this.init();
  }

  init() {
    // Cargar datos iniciales
    this.loadPiezas(this.currentPage, this.pageSize);
    
    // Configurar event listeners para filtros
    this.initFilters();
  }

  async loadPiezas(page = 1, pageSize = 10) {
    if (this.isLoading) return;
    
    this.isLoading = true;
    this.showLoading();
    
    try {
      const response = await fetch(`/api/piezas?page=${page}&pageSize=${pageSize}`);
      const result = await response.json();
      
      if (result.success) {
        this.currentPage = result.page;
        this.pageSize = result.pageSize;
        this.totalPages = result.totalPages;
        this.totalCount = result.count;
        
        this.renderTable(result.data);
        this.renderPagination();
        this.updateStats(result.phaseCounts, result.count);
      } else {
        console.error('Error al cargar piezas:', result.error);
        this.showError('Error al cargar las piezas');
      }
    } catch (error) {
      console.error('Error en la petición:', error);
      this.showError('Error de conexión');
    } finally {
      this.isLoading = false;
      this.hideLoading();
    }
  }

  renderTable(piezas) {
    const tableWrapper = document.getElementById('piezas-table-wrapper');
    if (!tableWrapper) return;

    // Generar HTML de la tabla
    let tableHTML = `
      <div class="table-container">
        <table class="data-table">
          <thead>
            <tr>
              <th>Código</th>
              <th>Tipo Material</th>
              <th>Fase</th>
              <th>Conjunto</th>
              <th>Obra</th>
              <th>Chapa</th>
              <th>Colada</th>
              <th>Fecha Creación</th>
              <th>Acciones</th>
            </tr>
          </thead>
          <tbody>
    `;

    if (piezas.length === 0) {
      tableHTML += `
        <tr>
          <td colspan="9" style="text-align: center; padding: 48px; color: #6b7280;">
            No se encontraron piezas
          </td>
        </tr>
      `;
    } else {
      piezas.forEach(pieza => {
        const faseClass = `fase-${pieza.fase}`;
        const faseName = this.getFaseName(pieza.fase);
        
        tableHTML += `
          <tr>
            <td>
              <div class="pieza-info">
                <strong>${pieza.codigo}</strong>
                <span class="pieza-id">ID: ${pieza.id}</span>
              </div>
            </td>
            <td>
              <span class="material-badge">
                ${pieza.tipo_material || '-'}
              </span>
            </td>
            <td>
              <span class="fase-badge ${faseClass}">
                ${faseName}
              </span>
            </td>
            <td>
              <div class="conjunto-info">
                <span>${pieza.conjuntos?.codigo || '-'}</span>
              </div>
            </td>
            <td>
              <div class="obra-info">
                <span>${pieza.conjuntos?.obras?.nombre || '-'}</span>
              </div>
            </td>
            <td>
              <div class="chapa-info">
                <span>${pieza.chapas?.codigo ? `#${pieza.chapas.codigo}` : '-'}</span>
              </div>
            </td>
            <td>
              <div class="colada-info">
                <span>${pieza.colada || '-'}</span>
              </div>
            </td>
            <td>${this.formatDate(pieza.created_at)}</td>
            <td>
              <div class="action-buttons">
                <button class="btn-icon" title="Ver detalles" onclick="openModal('detail-pieza-${pieza.id}')">
                  <svg width="16" height="16" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z" />
                  </svg>
                </button>
                <button class="btn-icon" title="Editar" onclick="editPieza('${pieza.id}')">
                  <svg width="16" height="16" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M11 5H6a2 2 0 00-2 2v11a2 2 0 002 2h11a2 2 0 002-2v-5m-1.414-9.414a2 2 0 112.828 2.828L11.828 15H9v-2.828l8.586-8.586z" />
                  </svg>
                </button>
                <button class="btn-icon btn-delete" title="Eliminar" onclick="deletePieza('${pieza.id}', '${pieza.codigo}')">
                  <svg width="16" height="16" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16" />
                  </svg>
                </button>
              </div>
            </td>
          </tr>
        `;
      });
    }

    tableHTML += `
          </tbody>
        </table>
      </div>
    `;

    tableWrapper.innerHTML = tableHTML;
  }

  renderPagination() {
    const paginationWrapper = document.getElementById('pagination-controls');
    if (!paginationWrapper) return;

    const startItem = (this.currentPage - 1) * this.pageSize + 1;
    const endItem = Math.min(this.currentPage * this.pageSize, this.totalCount);

    let paginationHTML = `
      <div class="pagination-info">
        <span class="pagination-text">
          Mostrando ${startItem} - ${endItem} de ${this.totalCount} piezas
        </span>
        <div class="page-size-selector">
          <label for="page-size-select">Elementos por página:</label>
          <select id="page-size-select" class="page-size-select">
            <option value="10" ${this.pageSize === 10 ? 'selected' : ''}>10</option>
            <option value="25" ${this.pageSize === 25 ? 'selected' : ''}>25</option>
            <option value="50" ${this.pageSize === 50 ? 'selected' : ''}>50</option>
            <option value="100" ${this.pageSize === 100 ? 'selected' : ''}>100</option>
          </select>
        </div>
      </div>
      <div class="pagination-buttons">
        <button 
          class="pagination-btn" 
          id="prev-btn" 
          ${this.currentPage <= 1 ? 'disabled' : ''}
        >
          <svg width="16" height="16" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 19l-7-7 7-7" />
          </svg>
          Anterior
        </button>
        
        <div class="page-numbers">
    `;

    // Generar números de página
    const maxVisiblePages = 5;
    let startPage = Math.max(1, this.currentPage - Math.floor(maxVisiblePages / 2));
    let endPage = Math.min(this.totalPages, startPage + maxVisiblePages - 1);
    
    if (endPage - startPage + 1 < maxVisiblePages) {
      startPage = Math.max(1, endPage - maxVisiblePages + 1);
    }

    if (startPage > 1) {
      paginationHTML += `<button class="page-btn" data-page="1">1</button>`;
      if (startPage > 2) {
        paginationHTML += `<span class="page-ellipsis">...</span>`;
      }
    }

    for (let i = startPage; i <= endPage; i++) {
      paginationHTML += `
        <button 
          class="page-btn ${i === this.currentPage ? 'active' : ''}" 
          data-page="${i}"
        >
          ${i}
        </button>
      `;
    }

    if (endPage < this.totalPages) {
      if (endPage < this.totalPages - 1) {
        paginationHTML += `<span class="page-ellipsis">...</span>`;
      }
      paginationHTML += `<button class="page-btn" data-page="${this.totalPages}">${this.totalPages}</button>`;
    }

    paginationHTML += `
        </div>
        
        <button 
          class="pagination-btn" 
          id="next-btn" 
          ${this.currentPage >= this.totalPages ? 'disabled' : ''}
        >
          Siguiente
          <svg width="16" height="16" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 5l7 7-7 7" />
          </svg>
        </button>
      </div>
    `;

    paginationWrapper.innerHTML = paginationHTML;

    // Agregar event listeners
    this.attachPaginationListeners();
  }

  attachPaginationListeners() {
    // Botón anterior
    const prevBtn = document.getElementById('prev-btn');
    if (prevBtn) {
      prevBtn.addEventListener('click', () => {
        if (this.currentPage > 1) {
          this.loadPiezas(this.currentPage - 1, this.pageSize);
        }
      });
    }

    // Botón siguiente
    const nextBtn = document.getElementById('next-btn');
    if (nextBtn) {
      nextBtn.addEventListener('click', () => {
        if (this.currentPage < this.totalPages) {
          this.loadPiezas(this.currentPage + 1, this.pageSize);
        }
      });
    }

    // Botones de número de página
    const pageButtons = document.querySelectorAll('.page-btn');
    pageButtons.forEach(btn => {
      btn.addEventListener('click', () => {
        const page = parseInt(btn.getAttribute('data-page'));
        if (page !== this.currentPage) {
          this.loadPiezas(page, this.pageSize);
        }
      });
    });

    // Selector de tamaño de página
    const pageSizeSelect = document.getElementById('page-size-select');
    if (pageSizeSelect) {
      pageSizeSelect.addEventListener('change', () => {
        const newPageSize = parseInt(pageSizeSelect.value);
        this.pageSize = newPageSize;
        this.loadPiezas(1, newPageSize); // Volver a la primera página
      });
    }
  }

  initFilters() {
    // Mantener la funcionalidad de filtros existente pero adaptada para paginación
    const faseFilter = document.getElementById('fase-filter');
    const obraFilter = document.getElementById('obra-filter');
    const searchInput = document.getElementById('search-input');

    if (faseFilter) {
      faseFilter.addEventListener('change', () => {
        this.applyFilters();
      });
    }

    if (obraFilter) {
      obraFilter.addEventListener('change', () => {
        this.applyFilters();
      });
    }

    if (searchInput) {
      let debounceTimer;
      searchInput.addEventListener('input', () => {
        clearTimeout(debounceTimer);
        debounceTimer = setTimeout(() => {
          this.applyFilters();
        }, 300);
      });
    }
  }

  async applyFilters() {
    // Obtener valores de filtros
    const faseFilter = document.getElementById('fase-filter');
    const obraFilter = document.getElementById('obra-filter');
    const searchInput = document.getElementById('search-input');

    const filters = {};
    
    if (faseFilter && faseFilter.value) {
      filters.fase = faseFilter.value;
    }
    
    if (obraFilter && obraFilter.value) {
      filters.obra = obraFilter.value;
    }
    
    if (searchInput && searchInput.value.trim()) {
      filters.search = searchInput.value.trim();
    }

    // Construir URL con filtros
    const params = new URLSearchParams({
      page: '1', // Volver a la primera página al filtrar
      pageSize: this.pageSize.toString()
    });

    Object.entries(filters).forEach(([key, value]) => {
      params.append(key, value);
    });

    try {
      const response = await fetch(`/api/piezas/search?${params.toString()}`);
      const result = await response.json();
      
      if (result.success) {
        // Para filtros, usamos la API de búsqueda existente
        // pero necesitamos adaptar la respuesta
        this.currentPage = 1;
        this.totalCount = result.data.length;
        this.totalPages = Math.ceil(this.totalCount / this.pageSize);
        
        // Paginar los resultados filtrados en el cliente
        const startIndex = 0;
        const endIndex = this.pageSize;
        const paginatedData = result.data.slice(startIndex, endIndex);
        
        this.renderTable(paginatedData);
        this.renderPagination();
        this.updateStats(result.phaseCounts, result.count);
      }
    } catch (error) {
      console.error('Error al aplicar filtros:', error);
    }
  }

  updateStats(phaseCounts, totalCount) {
    // Actualizar estadísticas basadas en los conteos reales de la base de datos
    this.totalCount = totalCount;

    // Actualizar los números en las tarjetas de estadísticas
    const statCards = document.querySelectorAll('.stat-card');
    statCards.forEach((card, index) => {
      const numberElement = card.querySelector('.stat-number');
      if (numberElement) {
        switch (index) {
          case 0: // Total Piezas
            numberElement.textContent = totalCount;
            break;
          case 1: // En Corte
            numberElement.textContent = phaseCounts?.corte || 0;
            break;
          case 2: // En Soldadura
            numberElement.textContent = phaseCounts?.soldadura || 0;
            break;
          case 3: // En Montaje
            numberElement.textContent = phaseCounts?.montaje || 0;
            break;
        }
      }
    });
  }

  getFaseName(fase) {
    const fases = {
      0: 'Corte',
      1: 'Biselado',
      2: 'Montaje',
      3: 'Soldadura'
    };
    return fases[fase] || 'Desconocida';
  }

  formatDate(dateString) {
    if (!dateString) return '-';
    return new Date(dateString).toLocaleDateString('es-ES');
  }

  showLoading() {
    const tableWrapper = document.getElementById('piezas-table-wrapper');
    if (tableWrapper) {
      tableWrapper.innerHTML = `
        <div class="loading-state">
          <div class="loading-spinner">
            <svg width="24" height="24" fill="none" viewBox="0 0 24 24" stroke="currentColor" class="animate-spin">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 4v5h.582m15.356 2A8.001 8.001 0 004.582 9m0 0H9m11 11v-5h-.581m0 0a8.003 8.003 0 01-15.357-2m15.357 2H15" />
            </svg>
          </div>
          <p>Cargando piezas...</p>
        </div>
      `;
    }
  }

  hideLoading() {
    // El loading se oculta automáticamente al renderizar la tabla
  }

  showError(message) {
    const tableWrapper = document.getElementById('piezas-table-wrapper');
    if (tableWrapper) {
      tableWrapper.innerHTML = `
        <div class="error-state">
          <svg width="48" height="48" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 8v4m0 4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
          </svg>
          <p>${message}</p>
          <button class="btn-retry" onclick="window.piezasPagination.loadPiezas(1, ${this.pageSize})">
            Reintentar
          </button>
        </div>
      `;
    }
  }
}

// Inicializar cuando el DOM esté listo
document.addEventListener('DOMContentLoaded', () => {
  window.piezasPagination = new PiezasPagination();
});