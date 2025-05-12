import { Page } from '@playwright/test';

export class HomePage {
  constructor(private page: Page) {}

  async goto() {
    await this.page.goto('https://ge.globo.com/', { waitUntil: 'domcontentloaded' });
    await this.acceptCookiesIfVisible();
    await this.page.waitForTimeout(2000); // Pequeno delay extra
  }

  async acceptCookiesIfVisible() {
    const cookieBtn = this.page.locator('button:has-text("Continuar")');
    if (await cookieBtn.isVisible({ timeout: 3000 })) {
      await cookieBtn.click();
      console.log('✅ Cookies aceitos automaticamente.');
    }
  }

  async getNewsCount() {
    const newsBlocks = this.page.locator('div[class*="feed-post"]');
    await newsBlocks.first().waitFor({ state: 'visible', timeout: 15000 });

    const count = await newsBlocks.count();
    console.log(`📰 Encontradas ${count} notícias`);
    return count;
  }

  async clickFirstNews() {
    const posts = await this.page.locator('div.feed-post').all();
  
    for (let i = 0; i < posts.length; i++) {
      const post = posts[i];
      const link = post.locator('a').first();
      const href = await link.getAttribute('href');
  
      const isValid = href &&
        !href.includes('video') &&
        (href.includes('/noticia') || href.includes('/futebol') || href.includes('/esporte'));
  
      if (isValid) {
        try {
          await link.scrollIntoViewIfNeeded();
          await link.waitFor({ state: 'visible', timeout: 5000 });
          await link.click();
          console.log(`✅ Link clicado: ${href}`);
          return;
        } catch (error) {
          console.warn(`⚠️ Erro ao clicar no link válido (${href}):`, error);
        }
      }
    }
  
    throw new Error('❌ Nenhuma notícia válida foi encontrada para clique.');
  }  
  
  async getFirstNewsElements() {
    const posts = await this.page.locator('div.feed-post').all();
  
    for (const post of posts) {
      const link = post.locator('a').first();
      const href = await link.getAttribute('href');
  
      const isValid = href &&
        !href.includes('video') &&
        (href.includes('/noticia') || href.includes('/futebol') || href.includes('/esporte'));
  
      if (isValid) {
        const title = post.locator('div.feed-post-body-title').first();
        const image = post.locator('img').first();
        const summary = post.locator('div.feed-post-metadata').first();
  
        return { title, image, summary };
      }
    }
  
    throw new Error('❌ Nenhum artigo válido com título, imagem e resumo foi encontrado.');
  }
  
  async isOnNewsDetailPage() {
    await this.page.waitForLoadState('domcontentloaded');
    const url = await this.page.url();
    return /\/(noticia|futebol|esporte)\//.test(url);
  }
  

  async getCurrentUrl() {
    return this.page.url();
  }
}
