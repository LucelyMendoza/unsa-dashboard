export interface RendimientoItem {
  id: string;
  facultad: string;
  escuela: string;
  aprobados: number;
  desaprobados: number;
  retirados: number;
  promedioGeneral: number;
}

export const DATASET_ACADEMICO: RendimientoItem[] = [
  { id: '1', facultad: 'Ingeniería de Producción y Servicios', escuela: 'Ingeniería de Sistemas', aprobados: 480, desaprobados: 45, retirados: 12, promedioGeneral: 14.8 },
  { id: '2', facultad: 'Ingeniería de Producción y Servicios', escuela: 'Ciencia de la Computación', aprobados: 210, desaprobados: 20, retirados: 5, promedioGeneral: 15.2 },
  { id: '3', facultad: 'Ciencias Naturales', escuela: 'Física', aprobados: 120, desaprobados: 35, retirados: 8, promedioGeneral: 13.5 },
  { id: '4', facultad: 'Filosofía y Humanidades', escuela: 'Literatura y Lingüística', aprobados: 190, desaprobados: 15, retirados: 4, promedioGeneral: 15.8 },
  { id: '5', facultad: 'Filosofía y Humanidades', escuela: 'Filosofía', aprobados: 95, desaprobados: 10, retirados: 2, promedioGeneral: 16.1 },
  { id: '6', facultad: 'Ciencias de la Educación', escuela: 'Educación Primaria', aprobados: 310, desaprobados: 18, retirados: 6, promedioGeneral: 15.6 },
  { id: '7', facultad: 'Ciencias de la Educación', escuela: 'Educación Inicial', aprobados: 240, desaprobados: 12, retirados: 3, promedioGeneral: 16.0 },
];