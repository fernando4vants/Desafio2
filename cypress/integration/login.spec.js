import login from '../support/pages/login'

describe('Login', () => {
    it('Realizar login com sucesso', () => {
       login.acessarLogin()
       login.preencherFormulario()
       login.submeterFormulario()

        //verificação

    });
});