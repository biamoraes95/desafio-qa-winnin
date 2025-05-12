import { defineConfig } from '@playwright/test';

export default defineConfig({
  testDir: './specs',
  timeout: 60000,
  retries: 1,
  use: {
    headless: process.env.HEADLESS !== 'false', // ⬅️ Dinâmico: true no GitHub Actions, false localmente
    launchOptions: {
      slowMo: 300,
    },
    viewport: { width: 1280, height: 720 },
    userAgent: 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 Chrome/119.0.0.0 Safari/537.36',
    ignoreHTTPSErrors: true,
    screenshot: 'only-on-failure',
    video: 'retain-on-failure',
    actionTimeout: 15000,
    navigationTimeout: 30000
  },
  reporter: [['list'], ['html', { outputFolder: 'playwright-report', open: 'never' }]]
});

