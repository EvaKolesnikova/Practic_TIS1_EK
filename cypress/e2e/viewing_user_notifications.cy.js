describe('Прочтение уведомлений пользователя', () => {
    it('Прочтение уведомлений пользователя', () => {
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
            '#app > div.page > div > div.header-container.header-personal > div.header-container__user-avatar-info > div > div > div.base-icon.base-icon__medium.base-icon__default.notification-bell__icon__desktop > svg',
            { timeout: 10000 } // ждем до 10 секунд появления элемента
        )
            .should('be.visible')
            .click();
        cy.get(
            '#app > div.page > div > div.header-container.header-personal > div.header-container__user-avatar-info > div > div > div.notification-bell__similar > aside > header > div.link.link--size-small',
            { timeout: 10000 }
        )
            .should('be.visible')
            .click();
    });
});
