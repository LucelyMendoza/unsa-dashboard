'use client';

import React, { useEffect } from 'react';
import { useAuth } from '@/context/AuthContext';
import { useRouter } from 'next/navigation';
import TopBar from '@/components/TopBar';
import { AlertCircle } from 'lucide-react';

export default function DashboardPage() {
  const { user, permissions, loading } = useAuth();
  const router = useRouter();

  useEffect(() => {
    if (!loading && !user) {
      router.push('/login');
    }
  }, [user, loading, router]);

  if (loading || !user || !permissions) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-papel">
        <div className="text-center font-serif text-granate animate-pulse text-base">
          Cargando entorno institucional...
        </div>
      </div>
    );
  }

  if (permissions.role === 'INVITADO') {
    return (
      <main className="min-h-screen p-6 bg-papel">
        <div className="max-w-2xl mx-auto mt-20 bg-white p-8 rounded-3xl border border-red-200 text-center shadow-lg">
          <AlertCircle size={48} className="text-granate mx-auto mb-4" />
          <h2 className="text-xl font-serif font-bold text-granate mb-2">Acceso No Autorizado</h2>
          <p className="text-sm text-texto-sec mb-6">
            La cuenta <b>{user.email}</b> no cuenta con un rol directivo autorizado para este tablero.
          </p>
          <button
            onClick={() => router.push('/login')}
            className="px-5 py-2.5 bg-granate text-white rounded-xl text-xs font-semibold hover:bg-granate-dark transition"
          >
            Iniciar con otra cuenta
          </button>
        </div>
      </main>
    );
  }

  // Se pasa el rol y correo como parámetros al HTML local
  const queryParams = new URLSearchParams({
    role: permissions.role,
    user: user.email || '',
    escuelas: permissions.escuelasPermitidas.join(','),
  }).toString();

  return (
    <main className="min-h-screen p-4 sm:p-6 lg:p-8 max-w-[1600px] mx-auto">
      <TopBar />
      
      {/* Contenedor que renderiza tu dashboard HTML con altura completa */}
      <section className="w-full h-[85vh] bg-white rounded-2xl border border-linea shadow-sm overflow-hidden">
        <iframe
          src={`/dashboard-unsa.html?${queryParams}`}
          className="w-full h-full border-0"
          title="Tablero de Control Académico UNSA"
        />
      </section>
    </main>
  );
}