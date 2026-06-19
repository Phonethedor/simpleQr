const THEME_KEY = 'qr-theme';
type Theme = 'light' | 'dark';

export function initTheme(): void {
    const saved = localStorage.getItem(THEME_KEY) as Theme | null;
    const preferred: Theme = window.matchMedia('(prefers-color-scheme: dark)').matches
        ? 'dark'
        : 'light';
    applyTheme(saved ?? preferred);
}

export function toggleTheme(): void {
    const current = document.documentElement.getAttribute('data-theme') as Theme;
    applyTheme(current === 'dark' ? 'light' : 'dark');
}

function applyTheme(theme: Theme): void {
    document.documentElement.setAttribute('data-theme', theme);
    localStorage.setItem(THEME_KEY, theme);
}
