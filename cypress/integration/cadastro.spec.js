const faker = require('faker')

import cadastro from '../support/pages/cadastro'
import Routes from '../support/routes'

describe('Cadastro', () => {
    
    it('Cadastrar um novo usuário', () => {
        Routes.initCreateUser()
        // Ação
        cadastro.acessarFomularioCreateUser()
        cadastro.cadastrarNovoUusuario()
        cadastro.submeterDadosDoNovoUsuario()
        //verificação
        cadastro.verficarSeUsuarioFoiCriadoComSucesso()
    
        
    });
});