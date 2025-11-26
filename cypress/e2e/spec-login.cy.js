// apague o comentario que tem no json cypress.env.json para não dar erro no json

// teste de login no github usando cypress com variaveis de ambiente
describe('Login no GitHub', () => {
    it('faz login usando variáveis de ambiente', () => {
        const user = Cypress.env('GITHUB_USER')
        const pass = Cypress.env('GITHUB_PASS')

        if (!user || !pass) {
            throw new Error('Defina GITHUB_USER e GITHUB_PASS em cypress.env.json ou como variáveis de ambiente')
        }

        cy.visit('https://github.com/login')

        // Preenche sem logar valores sensíveis no output
        cy.get('#login_field').type(user, { log: false }) 
        cy.get('#password').type(pass, { log: false })
        cy.get('input[name="commit"]').click()

        // Após o submit, pode ocorrer login bem-sucedido ou falha (2FA/anticrawler)
        cy.location('pathname', { timeout: 10000 }).should((path) => {
            if (path.includes('/login')) {
                throw new Error('Permaneceu na página de login — verifique credenciais ou bloqueio por 2FA/anticrawler')
            }
        })

        // Verifica elemento do perfil , define um timeout e verifica se existe
        cy.get('summary[aria-label="View profile and more"], input[name="otp"]', { timeout: 10000 }).should('exist')
    })
})