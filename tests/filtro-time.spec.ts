import { test, expect } from '@playwright/test';

test('Busca partidas filtrando por time', async ({ page }) => {

  await page.goto('https://www.kasa.live/');

  const campo = page.getByPlaceholder('Qual time?');

  await campo.click();
  await campo.fill('Minnesota Utd.');

  await page.getByText('Minnesota Utd.').first().click();

  await campo.press('Enter');

  await page.waitForLoadState('networkidle');

  const resultados = page.locator('[data-cy="match-card"]');
  const total = await resultados.count();

  if (total === 0) {

    console.log('Nenhuma partida encontrada.');

  } else {

    for (let i = 0; i < total; i++) {

      const texto = await resultados.nth(i).innerText();

      expect(texto.toLowerCase()).toContain('minnesota utd.');

    }

  }

  await page.screenshot({ path: 'screenshots/filtro-time.png' });

});