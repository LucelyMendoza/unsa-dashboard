'use client';

import React, { createContext, useContext, useEffect, useState } from 'react';
import { User, onAuthStateChanged, signInWithPopup, signOut } from 'firebase/auth';
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
    const unsubscribe = onAuthStateChanged(auth, (currentUser) => {
      if (currentUser && currentUser.email) {
        setUser(currentUser);
        // Si el correo está en la tabla de asignación de roles, se extraen sus permisos
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
  }, []);

  const loginWithGoogle = async () => {
    try {
      const res = await signInWithPopup(auth, googleProvider);
      if (res.user) {
        router.push('/');
      }
    } catch (err: any) {
      console.error('Error al autenticar:', err);
      alert('Error al conectar con Google: ' + err.message);
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