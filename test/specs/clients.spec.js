const LoginPage = require( "../pageobjects/LoginPage");

// // Load the PDF.js library
// pdfjsLib = window['pdfjs-dist/build/pdf'];

// // Load the PDF document
// pdfjsLib.getDocument('file.pdf').then(function(pdf) {
//   // Get the number of pages in the PDF document
//   var numPages = pdf.numPages;
//   console.log('Number of pages:', numPages);
// });



describe('Clients Suit', ()=> {
    beforeEach( async() => {
        await LoginPage.open();
        await LoginPage.doLogin('Admin', 'Admin@Navi')
    })

    afterEach( async()=>{
        await browser.reloadSession();
    })

    it('Create client', async ()=> {
        // create client
        await $('button.clients-add-user-dialog').click();
        await browser.pause(5000);

        // check
        const userForm = await $('div.add-user-modal form');
        await expect(userForm).toExist();

        // fill data
        const surnameField = await $('input[formcontrolname="userSurname"]');
        await surnameField.setValue('User_surname');

        const firstnameField = await $('input[formcontrolname="userName"]');
        await firstnameField.setValue('User_name');

        const maleOptionRadio = await $('mat-radio-group mat-radio-button:nth-child(1) div[class="mat-radio-label-content"]');
        await maleOptionRadio.click();

        const emailField = await $('input[formcontrolname="email"]');
        await emailField.setValue('usermail13@gmail.com');

        const phoneNumberField = await $('input[formcontrolname="phone"]');
        await phoneNumberField.setValue('996777708080');

        const datebirthField = await $('input[formcontrolname="birthday"]');
        await datebirthField.setValue('02.10.2001');

        const saveButton = await $('button[name="save"]');
        await saveButton.click();
        await browser.pause(10000);

        // accept alert 
        await browser.acceptAlert();
        await browser.pause(5000);
    })

    it('Open to read and edit', async() => {
        //view created client
        const clientNameLink = await $('tbody tr:nth-child(1)');
        await clientNameLink.waitForClickable();
        await clientNameLink.click();
        await browser.pause(5000);

        //update created client
        const surnameFieldUpdate = await $('input[placeholder="Фамилия"]');
        await surnameFieldUpdate.setValue('UpdatedUsersurname');

        const firstnameFieldUpdate = await $('input[placeholder="Имя"]');
        await firstnameFieldUpdate.setValue('UpdatedUsername');
        
        const thirdFieldUpdate = await $('input[placeholder="Отчество"]');
        await thirdFieldUpdate.setValue('UserPatronymic');

        const birthDateFieldUpdate = await $('input[placeholder="Дата рождения"]');
        await birthDateFieldUpdate.setValue('10.04.2002');

        const saveButton = await $('button[name="save"]');
        await saveButton.click();
        await browser.pause(5000);

        //accept alert 
        await browser.acceptAlert();
        await browser.pause(5000);
    })

    it('Create company', async() => {
        // view created company
        const companyLink = await $('a[href="/companies"');
        await companyLink.click();
        await browser.pause(5000);
// clients-add-user-dialog crm-button
// /------------------------
        await $('button.clients-add-user-dialog.crm-button').click();
        await browser.pause(5000);

        //update created company
        const surnameFieldUpdate = await $('input[formcontrolname="companyName"]');
        await surnameFieldUpdate.setValue('Rockstar');

        const firstnameFieldUpdate = await $('input[formcontrolname="tradeName"]');
        await firstnameFieldUpdate.setValue('Rockstar Gaming');
        
        const createFieldCompany = await $('div.mat-select-arrow');
        await createFieldCompany.click();
        await browser.pause(3000);
//mat-option ng-star-inserted mat-active mat-selected
        const createSpereCompany = await $('mat-option:nth-child(3)');
        await createSpereCompany.click();
        await browser.pause(3000);

        const thirdFieldUpdate = await $('textarea[formcontrolname="comment"]');
        await thirdFieldUpdate.setValue('UserPatronymic');

        const saveButton = await $('button[class="save"]');
        await saveButton.click();
        await browser.pause(5000);
// /------------------------
        //accept alert 
        await browser.acceptAlert();
        await browser.pause(5000);


// menu-item hover-line
        const qrLink = await $('menu-item hover-line');
        await qrLink.click();
        await browser.pause(5000);
        
        })
        
        
        it('QR-Code', async() => {
  
        const companyLink = await $('a[href="/companies"');
        await companyLink.click();
        await browser.pause(5000);

        const searchName = await $('input[placeholder="Все организации"]');
        await searchName.click();
        await searchName.setValue('Rockstar');
        await browser.pause(2000);
        await $('button.bold.mat-button').click();
        await browser.pause(3000);
        const nameLink = await $('table tbody tr:nth-child(1)');
        await nameLink.waitForClickable();
        await nameLink.click();
        await browser.pause(5000);

        await $('li:nth-child(3) a[class="menu-item hover-line"]').click();
        await browser.pause(4000);
        // await $('menu-item:nth-child(3)').click();
        // await browser.pause(5000);  

        //mat-button
        const genqrLink = await $('app-company-qr button');
        await genqrLink.click();
        await browser.pause(5000);

// formcontrolname="moduleWidth"

        const moduleWidth = await $('input[formcontrolname="moduleWidth"]');
        await moduleWidth.setValue('2');

// formcontrolname="strip"
        
        const strip = await $('input[formcontrolname="strip"]');
        await strip.setValue('2');

// formcontrolname="count"
        
        const count = await $('input[formcontrolname="count"]');
        await count.setValue('2');

// mat-dialog-actions button:nth-child(2)
        const download = await $('mat-dialog-actions button:nth-child(2)');
        await download.click();
        await browser.pause(5000);


    })

    
const fs = require('fs');
const path = require('path');

// check if a file with the given filename exists in the Downloads directory
function fileExistsInDownloads(filename) {
  const downloadDirectory = path.join(process.env.USERPROFILE, 'Downloads');
  const filePath = path.join(downloadDirectory, filename);
  return fs.existsSync(filePath);
}
 // МОИ ЗАГРУЗКИ РАСПОЛОГАЮТСЯ В ПАПКЕ <==/-!~~{F:\Downloads}~~!=\==>.
it('should download the file', () => {
    // ... code to trigger file download ...

    // check if the file has been downloaded
    const filename = 'qr-codesWed Mar 22 2023.pdf';
    const fileExists = fileExistsInDownloads(filename);
    expect(fileExists).toBe(true);
  });


})