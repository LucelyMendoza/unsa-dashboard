export type UserRole = 
  | 'DIRECTOR_FACULTAD' 
  | 'DIRECTOR_CIENCIAS_TECNOLOGIA' 
  | 'DIRECTOR_HUMANIDADES' 
  | 'DIRECTOR_EDUCACION'
  | 'INVITADO';

export interface UserPermissions {
  role: UserRole;
  name: string;
  facultadesPermitidas: string[];
  escuelasPermitidas: string[];
  label: string;
}
export const USERS_ROLE_MAP: Record<string, UserPermissions> = {
  'lmendoza@unsa.edu.pe': {
    role: 'DIRECTOR_FACULTAD',
    name: 'Dr. Hugo Rivera (Decano / Director de Facultad)',
    label: 'Director de Facultad',
    facultadesPermitidas: ['TODAS'],
    escuelasPermitidas: ['TODAS'],
  },
  'dir.ciencias@unsa.edu.pe': {
    role: 'DIRECTOR_CIENCIAS_TECNOLOGIA',
    name: 'Dra. Carmen Suárez (Directora Cs. y Tecnología)',
    label: 'Director de Escuela: Cs. y Tecnología',
    facultadesPermitidas: ['Ingeniería de Procesos', 'Ingeniería de Producción y Servicios', 'Ciencias Naturales'],
    escuelasPermitidas: ['Ingeniería de Sistemas', 'Ciencia de la Computación', 'Química', 'Física'],
  },
  'dir.humanidades@unsa.edu.pe': {
    role: 'DIRECTOR_HUMANIDADES',
    name: 'Mg. Roberto Mendoza (Director Humanidades)',
    label: 'Director de Escuela: Humanidades y Letras',
    facultadesPermitidas: ['Filosofía y Humanidades', 'Ciencias Histórico Sociales'],
    escuelasPermitidas: ['Literatura y Lingüística', 'Filosofía', 'Historia', 'Artes'],
  },
  'dir.educacion@unsa.edu.pe': {
    role: 'DIRECTOR_EDUCACION',
    name: 'Dra. Elena Vargas (Directora Educación Básica)',
    label: 'Director de Escuela: Educación Básica e Integral',
    facultadesPermitidas: ['Ciencias de la Educación'],
    escuelasPermitidas: ['Educación Inicial', 'Educación Primaria', 'Educación Secundaria'],
  },
};

export const ROLE_LABELS: Record<UserRole, string> = {
  DIRECTOR_FACULTAD: 'Dirección General de Facultad',
  DIRECTOR_CIENCIAS_TECNOLOGIA: 'Dirección de Escuela de Ciencias y Tecnología',
  DIRECTOR_HUMANIDADES: 'Dirección de Humanidades y Letras',
  DIRECTOR_EDUCACION: 'Dirección de Educación Básica e Integral',
  INVITADO: 'Acceso Restringido',
};