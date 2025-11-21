describe('Teste de requisição na tela inicial do GitHub', () => {
    it('faz request HTTP e verifica conteúdo da página inicial', () => {
        // Requisição direta ao HTML da home
        cy.request('https://github.com/').then((resp) => {
            expect(resp.status).to.eq(200)
            expect(resp.body).to.include('<title>GitHub')
            expect(resp.headers).to.have.property('content-type')
        })

        // Visita a página e valida título/visibilidade
        cy.visit('https://github.com/')
        cy.title().should('include', 'GitHub')
        cy.get('body').should('be.visible')
    })
})