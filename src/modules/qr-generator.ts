import QRCode from 'qrcode';

export async function generateQR(
    text: string,
    canvas: HTMLCanvasElement,
): Promise<string> {
    await QRCode.toCanvas(canvas, text, {
        width: 300,
        margin: 2,
        errorCorrectionLevel: 'M',
        color: {
            dark: '#000000',
            light: '#ffffff',
        },
    });

    // Export canvas as JPEG (white background guaranteed by QRCode.toCanvas)
    return canvas.toDataURL('image/jpeg', 0.95);
}

export function downloadQR(dataUrl: string, filename = 'qr-code.jpg'): void {
    const anchor = document.createElement('a');
    anchor.href = dataUrl;
    anchor.download = filename;
    document.body.appendChild(anchor);
    anchor.click();
    document.body.removeChild(anchor);
}
