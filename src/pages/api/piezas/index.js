import { fetchPiezas } from '../../../lib/pieza_api';

export const prerender = false;

export async function GET() {
}
export async function GET({ url }) {
  try {
    const searchParams = new URL(url).searchParams;
    const page = parseInt(searchParams.get('page')) || 1;
    const pageSize = parseInt(searchParams.get('pageSize')) || 10;
    
    const result = await fetchPiezas(page, pageSize);
    
    return new Response(JSON.stringify({ 
      success: true, 
      data: result.data, 
      count: result.count,
      page: page,
      pageSize: pageSize,
      totalPages: Math.ceil(result.count / pageSize)
    }), {
      status: 200,
      headers: { 'Content-Type': 'application/json' },
    });

  } catch (error) {
    console.error('Error en /api/piezas:', error);
    return new Response(JSON.stringify({ success: false, error: 'Error al obtener piezas' }), {
      status: 500,
      headers: { 'Content-Type': 'application/json' },
    });
  }
}