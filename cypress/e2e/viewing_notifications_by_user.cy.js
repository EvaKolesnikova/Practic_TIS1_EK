describe('Просмотр уведомлений пользователем', () => {
    it('Просмотр уведомлений пользователем', () => {
        cy.visit('https://dev.profteam.su/login');
        cy.get('#app > div.page > div > section > form > div:nth-child(1) > div.form__labels > div:nth-child(1) > div.form-control--medium.form-control > input')
            .click()
            .type('Eva');
        cy.get('#app > div.page > div > section > form > div:nth-child(1) > div.form__labels > div:nth-child(2) > div.form-control--medium.form-control > input')
            .click()
            .type('QWEasd123');
        cy.get('#app > div.page > div > section > form > div.form__buttons > div:nth-child(3) > button')
            .click();
    });
});
