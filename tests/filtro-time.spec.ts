import { test, expect } from '@playwright/test';


test('Busca partidas filtrando por time com paginação', async ({ page }) => {
  const timeBusca = 'Minnesota Utd.';

  await page.goto('https://www.kasa.live/');

  const campo = page.getByPlaceholder('Qual time?');
  await campo.click();
  await campo.fill(timeBusca);
  await campo.press('Enter');

  // Fecha popover clicando fora
  await page.mouse.click(0, 0);
  await page.waitForLoadState('networkidle');

  let paginaAtual = 1;
  let temProxima = true;

  while (temProxima) {
    console.log(`✅ Checando página ${paginaAtual}...`);

    // Localiza todos os cards na página
    const cards = page.locator('.css-7mca6u'); // seletor de container de card
    const totalCards = await cards.count();

    if (totalCards === 0) {
      console.log('⚠️ Nenhum card encontrado nesta página.');
    }

    for (let i = 0; i < totalCards; i++) {
      const card = cards.nth(i);
      const timesNoCard = card.locator('p[title]');
      const totalTimes = await timesNoCard.count();

      let encontrouTime = false;
      for (let j = 0; j < totalTimes; j++) {
        const nomeTime = await timesNoCard.nth(j).innerText();
        if (nomeTime.includes(timeBusca)) {
          encontrouTime = true;
          break;
        }
      }

      // Assert: cada card precisa ter pelo menos um time correto
      expect(encontrouTime).toBeTruthy();
    }

    // Tenta ir para a próxima página
    const botaoProximo = page.locator('button[aria-label="próxima página"]:not([disabled])');
    if (await botaoProximo.count() > 0) {
      await botaoProximo.click();
      await page.waitForLoadState('networkidle');
      paginaAtual++;
    } else {
      temProxima = false; // chegou na última página
    }
  }

  await page.screenshot({ path: 'screenshots/filtro-time-paginado.png', fullPage: true });
  await page.pause();
});