import { Page, expect } from '@playwright/test';
import { user } from '../fixtures/user';

export class LoginPage {

  constructor(private page: Page) {}

  async acessarHome() {
    await this.page.goto('https://www.kasa.live/');
  }

  async clicarEntrar() {
    await this.page.getByRole('button', { name: 'Entrar' }).click();
  }

  async preencherEmail(email: string) {
    await this.page.getByPlaceholder('E-mail').fill(email);
  }

  async preencherSenha(senha: string) {
    await this.page.getByPlaceholder('Senha').fill(senha);
  }

  async submeterLogin() {
  await this.page.locator('[data-cy="login-submit"]').click();
}

async validarLoginSucesso() {
  await expect(this.page.locator('[data-cy="link/favoritos"]')).toBeVisible();
}
}