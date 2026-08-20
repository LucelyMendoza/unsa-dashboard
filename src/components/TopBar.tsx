'use client';

import React from 'react';
import { LogOut, ShieldCheck, UserCheck } from 'lucide-react';
import { useAuth } from '@/context/AuthContext';

export default function TopBar() {
  const { user, permissions, logout } = useAuth();

  if (!user || !permissions) return null;

  return (
    <header className="overflow-hidden rounded-2xl border border-granate-dark bg-papel shadow-[0_8px_24px_rgba(90,22,32,0.12)] mb-6">
      <div className="px-4 sm:px-6 py-4 sm:py-5 border-b-4 border-dorado bg-granate text-white">
        <div className="flex flex-col gap-4 md:flex-row md:items-end md:justify-between">
          <div className="max-w-2xl">
            <p className="text-[11px] sm:text-[12px] uppercase tracking-[0.16em] text-dorado-light font-semibold mb-1">
              Universidad Nacional de San Agustín de Arequipa
            </p>
            <h1 className="text-xl sm:text-2xl font-serif font-bold text-white tracking-wide">
              Tablero de Control - Facultad de Educación
            </h1>
            <p className="text-xs sm:text-sm text-crema/90 italic mt-0.5">
              Dirección de Servicios Académicos
            </p>
          </div>

          <div className="text-left md:text-right text-xs leading-relaxed px-4 py-2.5 rounded-xl border border-white/20 bg-white/10 backdrop-blur-sm">
            <div className="font-semibold text-white flex items-center md:justify-end gap-1.5">
              <UserCheck size={14} className="text-dorado-light" />
              {permissions.name}
            </div>
            <div className="text-dorado-light font-medium flex items-center md:justify-end gap-1.5 mt-0.5">
              <ShieldCheck size={13} />
              {permissions.label}
            </div>
            <div className="text-[11px] text-crema/80 truncate max-w-[240px]">{user.email}</div>
          </div>
        </div>
      </div>

      <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-3 px-4 sm:px-6 py-3 bg-crema border-t border-linea">
        <div className="text-[11px] uppercase tracking-wider text-texto-sec font-semibold">
          Acceso verificado
        </div>
        <button
          onClick={logout}
          className="flex items-center gap-1.5 text-xs font-semibold text-white px-3 py-1.5 rounded-lg bg-granate hover:bg-granate-dark transition border border-granate-dark shadow-sm"
        >
          <LogOut size={14} />
          Cerrar Sesión
        </button>
      </div>
    </header>
  );
}