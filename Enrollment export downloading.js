import { Selector } from 'testcafe';

fixture `MUCH overview`
    .page `http://mus.ph00a1.cz.infra/ui/`
    .httpAuth({
        username: 'much_tester',
        password: 'much_tester'
    });

test('Enrollment export downloading', async t => {
    await t
        .typeText('#IDToken1', 'much_tester')
        .typeText('#IDToken2', 'much_tester')
        .click('#kc-login')
        .click(Selector('header').nth(1).find('.MuiSvgIcon-root'))
        .click(Selector('#VISIT_IMPORT_EXPORT [class^="MuiButtonBase-root MuiListItem-root MuiMenuItem-ro"]'))
        .click(Selector('header').nth(3).find('span').withText('ENROLLMENT EXPORT'))
        .click(Selector('#customExportFilter').nth(1).find('span').withText('GENERATE'))
        .expect(Selector('footer span').withText('Export has been executed').innerText).eql('Export has been executed')
        .click(Selector('#enrollmentExportPanel button').withText('REFRESH'))



        const downloadButton = Selector('#customExportFilter').nth(1).find('button').withText('DOWNLOAD').nth(1)    
        const refreshButton = Selector('#enrollmentExportPanel button').withText('REFRESH')

        if (await downloadButton.visible) {
            await t.click(downloadButton);
        }  else if (await refreshButton.visible) {
            await t.click(refreshButton);
        }  else 
            await t.click(downloadButton)
        

});