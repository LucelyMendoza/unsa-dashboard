'use client';

import React, { createContext, useContext, useEffect, useState } from 'react';
import {
  User,
  onAuthStateChanged,
  signInWithPopup,
  signInWithRedirect,
  getRedirectResult,
  signOut
} from 'firebase/auth';
import { auth, googleProvider } from '@/lib/firebase';
import { USERS_ROLE_MAP, UserPermissions, UserRole } from '@/lib/roles';
import { useRouter } from 'next/navigation';

interface AuthContextType {
  user: User | null;
  permissions: UserPermissions | null;
  loading: boolean;
  loginWithGoogle: () => Promise<void>;
  logout: () => Promise<void>;
}

const AuthContext = createContext<AuthContextType>({} as AuthContextType);

export function AuthProvider({ children }: { children: React.ReactNode }) {
  const [user, setUser] = useState<User | null>(null);
  const [permissions, setPermissions] = useState<UserPermissions | null>(null);
  const [loading, setLoading] = useState(true);
  const router = useRouter();

  useEffect(() => {
    // Procesa el retorno en caso de que se haya ejecutado signInWithRedirect
    getRedirectResult(auth)
      .then((result) => {
        if (result?.user) {
          router.push('/');
        }
      })
      .catch((err) => {
        console.error('Error al capturar redirect result:', err);
      });

    const unsubscribe = onAuthStateChanged(auth, (currentUser) => {
      if (currentUser && currentUser.email) {
        setUser(currentUser);
        const userPerms = USERS_ROLE_MAP[currentUser.email.toLowerCase()] || {
          role: 'INVITADO' as UserRole,
          name: currentUser.displayName || currentUser.email,
          label: 'Usuario sin permisos específicos',
          facultadesPermitidas: [],
          escuelasPermitidas: [],
        };
        setPermissions(userPerms);
      } else {
        setUser(null);
        setPermissions(null);
      }
      setLoading(false);
    });

    return () => unsubscribe();
  }, [router]);

  const loginWithGoogle = async () => {
    try {
      const res = await signInWithPopup(auth, googleProvider);
      if (res.user) {
        router.push('/');
      }
    } catch (err: any) {
      // Fallback si el navegador bloquea la ventana emergente
      if (
        err.code === 'auth/popup-blocked' ||
        err.code === 'auth/cancelled-popup-request' ||
        err.code === 'auth/popup-closed-by-user'
      ) {
        console.warn('Popup bloqueado o cerrado. Redirigiendo...');
        await signInWithRedirect(auth, googleProvider);
      } else {
        console.error('Error al autenticar:', err);
        alert('Error al conectar con Google: ' + err.message);
      }
    }
  };

  const logout = async () => {
    await signOut(auth);
    router.push('/login');
  };

  return (
    <AuthContext.Provider value={{ user, permissions, loading, loginWithGoogle, logout }}>
      {children}
    </AuthContext.Provider>
  );
}

export const useAuth = () => useContext(AuthContext);