import { defineConfig } from '@playwright/test';

export default defineConfig({
  testDir: './specs',
  timeout: 60000,
  retries: 1,
  use: {
    headless: false, // Visível durante testes locais
    launchOptions: {
      slowMo: 300, // Ajuda a depurar visualmente
    },
    viewport: { width: 1280, height: 720 },
    userAgent: 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 Chrome/119.0.0.0 Safari/537.36',
    ignoreHTTPSErrors: true,
    screenshot: 'only-on-failure',
    video: 'retain-on-failure',
    actionTimeout: 15000, // Protege contra travamentos por espera indefinida
    navigationTimeout: 30000 // Garante timeout ao navegar
  },
  reporter: [['list'], ['html', { outputFolder: 'playwright-report', open: 'never' }]]
});
