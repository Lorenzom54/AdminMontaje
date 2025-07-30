import { searchOperarios } from '../../../lib/operario_api';

export const prerender = false;

export async function GET({ url }) {
  try {
    const searchParams = new URL(url).searchParams;
    
    const filters = {
      rol: searchParams.get('rol'),
      nombre: searchParams.get('nombre'),
      email: searchParams.get('email'),
      usuario: searchParams.get('usuario')
    };

    // Remover filtros vacíos
    Object.keys(filters).forEach(key => {
      if (!filters[key]) {
        delete filters[key];
      }
    });

    const operarios = await searchOperarios(filters);

    return new Response(JSON.stringify({ success: true, data: operarios }), {
      status: 200,
      headers: { 'Content-Type': 'application/json' },
    });

  } catch (error) {
    console.error('Error en /api/operarios/search:', error);
    return new Response(JSON.stringify({ success: false, error: 'Error al buscar operarios' }), {
      status: 500,
      headers: { 'Content-Type': 'application/json' },
    });
  }
}