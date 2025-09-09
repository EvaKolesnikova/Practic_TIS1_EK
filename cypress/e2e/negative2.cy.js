describe('Регистрация пользователя в системе', () => {
    it('Регистрация пользователя в системе', () => {
        cy.visit('https://dev.profteam.su/registration');

        cy.get('#app > div.page > div > section > form > div:nth-child(1) > div.form__labels > div:nth-child(1) > div:nth-child(1) > div > input')
            .click()
            .type('Eva');

        cy.get('#app > div.page > div > section > form > div:nth-child(1) > div.form__labels > div:nth-child(1) > div:nth-child(2) > div > input')
            .click()
            .type('qwe411463@gmail.com');

        cy.get('#app > div.page > div > section > form > div:nth-child(1) > div.form__labels > div:nth-child(1) > div:nth-child(3) > div > input')
            .click()
            .type('QWEasd123');

        cy.get('#app > div.page > div > section > form > div:nth-child(1) > div.form__labels > div:nth-child(1) > div:nth-child(4) > div > input')
            .click()
            .type('111');


    });
});
