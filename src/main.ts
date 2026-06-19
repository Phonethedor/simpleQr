import './styles/styles.css';
import { initTheme, toggleTheme } from './modules/theme';
import { generateQR, downloadQR } from './modules/qr-generator';

const MAX_LENGTH = 500;

const inputEl = document.getElementById('qr-input') as HTMLTextAreaElement;
const generateBtn = document.getElementById('btn-generate') as HTMLButtonElement;
const themeBtn = document.getElementById('btn-theme') as HTMLButtonElement;
const canvas = document.getElementById('qr-canvas') as HTMLCanvasElement;
const downloadBtn = document.getElementById('btn-download') as HTMLButtonElement;
const resultEl = document.getElementById('result-section') as HTMLElement;
const errorEl = document.getElementById('error-msg') as HTMLElement;
const counterEl = document.getElementById('char-count') as HTMLElement;

let currentDataUrl = '';

// ---- Init ----
initTheme();

// ---- Theme toggle ----
themeBtn.addEventListener('click', toggleTheme);

// ---- Character counter ----
inputEl.addEventListener('input', () => {
    const len = inputEl.value.length;
    counterEl.textContent = `${len} / ${MAX_LENGTH}`;
    inputEl.classList.toggle('input--error', len > MAX_LENGTH);
});

// ---- Generate ----
generateBtn.addEventListener('click', async () => {
    const text = inputEl.value.trim();
    errorEl.textContent = '';

    if (!text) {
        errorEl.textContent = 'Enter some text or a URL first.';
        inputEl.focus();
        return;
    }

    if (text.length > MAX_LENGTH) {
        errorEl.textContent = `Input exceeds ${MAX_LENGTH} characters.`;
        return;
    }

    generateBtn.disabled = true;
    generateBtn.textContent = 'Generating...';

    try {
        currentDataUrl = await generateQR(text, canvas);
        resultEl.classList.remove('result--hidden');
        resultEl.scrollIntoView({ behavior: 'smooth', block: 'nearest' });
    } catch (err) {
        errorEl.textContent = 'Failed to generate QR code. Try shortening the input.';
        console.error('[QR Generator]', err);
    } finally {
        generateBtn.disabled = false;
        generateBtn.textContent = 'Generate QR';
    }
});

// ---- Download ----
downloadBtn.addEventListener('click', () => {
    if (currentDataUrl) {
        downloadQR(currentDataUrl);
    }
});
