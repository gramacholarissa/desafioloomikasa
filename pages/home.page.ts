import { Page } from '@playwright/test';

export class HomePage {

  constructor(private page: Page) {}

  async acessarSite() {
    await this.page.goto('https://www.kasa.live/');
  }

  async buscarTime(nomeTime: string) {

    const campoTime = this.page.getByPlaceholder('Qual time?');

    await campoTime.click();
    await campoTime.fill(nomeTime);

    await this.page.getByText(nomeTime).first().click();

    await this.page.locator('[data-cy="search-button"]').click();
  }

}