import { Selector } from 'testcafe';

fixture `MUCH overview`
    .page `http://mus.ph00a1.cz.infra/ui/`
    .httpAuth({
        username: 'much_tester',
        password: 'much_tester'
    });

test('Login', async t => {
    await t
        .typeText('#IDToken1', 'much_tester')
        .typeText('#IDToken2', 'much_tester')
        .click('#kc-login')
        .click(Selector('header').nth(1).find('.MuiSvgIcon-root'));
});