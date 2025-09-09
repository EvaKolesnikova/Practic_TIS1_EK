describe('Подача заявки на роль учебного заведения', () => {
    it('Подача заявки на роль учебного заведения', () => {
        cy.visit('https://dev.profteam.su/login');
        cy.get('#app > div.page > div > section > form > div:nth-child(1) > div.form__labels > div:nth-child(1) > div.form-control--medium.form-control > input')
            .click()
            .type('Eva');
        cy.get('#app > div.page > div > section > form > div:nth-child(1) > div.form__labels > div:nth-child(2) > div.form-control--medium.form-control > input')
            .click()
            .type('QWEasd123');
        cy.get('#app > div.page > div > section > form > div.form__buttons > div:nth-child(3) > button')
            .click();
        cy.get(
            '#app > div.page > div > div.page-navigation > div.page-nav > div.page-nav__menu-item > div.page-nav__role-block > button',
            { timeout: 10000 }
        )
            .should('be.visible')
            .click();
        cy.get('body > div:nth-child(6) > div.desktop-modal > div > div.select-role > div.select-role-form > div:nth-child(3)').click();

    });
});

