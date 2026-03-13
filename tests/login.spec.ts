import { test } from '@playwright/test';
import { LoginPage } from '../pages/login.page';
import { user } from '../fixtures/user';

test('Login com credenciais válidas', async ({ page }) => {

    const loginPage = new LoginPage(page);

    await loginPage.acessarHome();

    await loginPage.clicarEntrar();

    await loginPage.preencherEmail(user.email);

    await loginPage.preencherSenha(user.senha);

    await loginPage.submeterLogin();

    await loginPage.validarLoginSucesso();

    await page.locator('[data-cy="link/favoritos"]').waitFor();

    await page.screenshot({ path: 'screenshots/login-sucesso.png' });

});