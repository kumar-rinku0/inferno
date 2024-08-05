'use client';

import React, { useEffect, useState } from 'react';

import { cn } from '@/lib/utils';
import { Monitor, Moon, Sun } from 'lucide-react';
import { useTheme } from 'next-themes';


export function ThemeToggle({ isDropDown = false }: { isDropDown?: boolean }) {
  const [mounted, setMounted] = useState(false);
  const { theme, setTheme } = useTheme();

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) {
    return null; // Or a loader, or whatever fallback you prefer
  }
  return (
    <>
      <div className="flex flex-row space-x-2 items-center rounded-full border border-neutral-200 dark:border-neutral-800 p-1">
        <button
          className={cn(
            theme === 'light'
              ? 'bg-neutral-200 rounded-full'
              : 'bg-transparent',
            'p-1',
          )}
          onClick={() => setTheme('light')}
        >
          <Sun size={18} className="stroke-1" />
        </button>

        <button
          className={cn(
            theme === 'system'
              ? 'bg-neutral-200 dark:bg-neutral-700 rounded-full'
              : 'bg-transparent',
            'p-1',
          )}
          onClick={() => setTheme('system')}
        >
          <Monitor size={18} className="stroke-1" />
        </button>

        <button
          className={cn(
            theme === 'dark' ? 'bg-neutral-700 rounded-full' : 'bg-transparent',
            'p-1',
          )}
          onClick={() => setTheme('dark')}
        >
          <Moon size={18} className="stroke-1" />
        </button>
      </div>
    </>
  );
}