export type UserRole = 
  | 'DIRECTOR_FACULTAD' 
  | 'DIRECTOR_CIENCIAS_TECNOLOGIA' 
  | 'DIRECTOR_HUMANIDADES' 
  | 'DIRECTOR_EDUCACION'
  | 'INVITADO';

export interface UserPermissions {
  role: UserRole;
  name: string;
  escuelasPermitidas: string[];
  label: string;
}

export const USERS_ROLE_MAP: Record<string, UserPermissions> = {
  // Director de Facultad: Ve GENERALES y todas las escuelas
  'vvilcaro@unsa.edu.pe': {
    role: 'DIRECTOR_FACULTAD',
    name: 'Director / Decano de Facultad',
    label: 'Dirección de Facultad (Acceso Total)',
    escuelasPermitidas: ['GENERALES', 'CIENCIAS Y TECNOLOGÍA', 'HUMANIDADES Y LETRAS', 'EDUCACIÓN BÁSICA INTEGRAL'],
  },

  // Director de Escuela: Ciencias y Tecnología
  'lmendoza@unsa.edu.pe': {
    role: 'DIRECTOR_CIENCIAS_TECNOLOGIA',
    name: 'Director de Escuela',
    label: 'Escuela de Ciencias y Tecnología',
    escuelasPermitidas: ['CIENCIAS Y TECNOLOGÍA'],
  },

  // Director de Escuela: Humanidades y Letras
  'jleonq@unsa.edu.pe': {
    role: 'DIRECTOR_HUMANIDADES',
    name: 'Director de Escuela',
    label: 'Escuela de Humanidades y Letras',
    escuelasPermitidas: ['HUMANIDADES Y LETRAS'],
  },

  // Director de Escuela: Educación Básica e Integral
  'dir.educacion@unsa.edu.pe': {
    role: 'DIRECTOR_EDUCACION',
    name: 'Director de Escuela',
    label: 'Escuela de Educación Básica Integral',
    escuelasPermitidas: ['EDUCACIÓN BÁSICA INTEGRAL'],
  },
};

export const ROLE_LABELS: Record<UserRole, string> = {
  DIRECTOR_FACULTAD: 'Dirección General de Facultad',
  DIRECTOR_CIENCIAS_TECNOLOGIA: 'Dirección de Ciencias y Tecnología',
  DIRECTOR_HUMANIDADES: 'Dirección de Humanidades y Letras',
  DIRECTOR_EDUCACION: 'Dirección de Educación Básica Integral',
  INVITADO: 'Acceso Restringido',
};