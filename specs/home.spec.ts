import { test, expect } from '@playwright/test';
import { HomePage } from '../pages/HomePage';

test.describe('Página Inicial - ge.globo.com', () => {
  let homePage: HomePage;

  test.beforeEach(async ({ page }) => {
    homePage = new HomePage(page);
    await homePage.goto();
  });

  test('Deve exibir pelo menos 10 notícias na página inicial', async () => {
    const count = await homePage.getNewsCount();
    console.log(`✅ Foram encontradas ${count} notícias na home`);
    expect(count).toBeGreaterThanOrEqual(10);
  });

  test('A primeira notícia deve conter título, imagem e resumo', async () => {
    const elements = await homePage.getFirstNewsElements();

    const titleText = await elements.title.textContent();
    const imageSrc = await elements.image.getAttribute('src');
    const summaryText = await elements.summary.textContent();

    expect(titleText?.trim(), 'Título está vazio ou nulo').not.toBeFalsy();
    expect(imageSrc, 'Imagem sem src').not.toBeNull();
    expect(summaryText?.trim(), 'Resumo está vazio ou nulo').not.toBeFalsy();
  });

  test('Ao clicar em uma notícia, deve redirecionar para a matéria completa', async () => {
    await homePage.clickFirstNews();

    const isDetailPage = await homePage.isOnNewsDetailPage();
    const url = await homePage.getCurrentUrl();
    console.log('🌐 URL após o clique:', url);
    expect(isDetailPage).toBeTruthy();
  });
});



