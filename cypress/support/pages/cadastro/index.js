const faker = require('faker')
const el = require('./elements').ELEMENTS

import Routes from '../../routes'

class Cadastro {
    acessarFomularioCreateUser(){
        // acessar a pagina de cadastro
        cy.visit('register');
    }
    
    cadastrarNovoUusuario(){
        //Ação
        // preencher o formulario
        cy.get(el.inputUsername).type(faker.name.firstName() + faker.name.lastName())
        cy.get(el.inputEmail).type(faker.internet.email())
        cy.get(el.inputPassword).type(12345678)
    }
    submeterDadosDoNovoUsuario(){

       
        //confirmar o cadastro de um novo usuário
        cy.get(el.buttonSubmit).click()
    }

    verficarSeUsuarioFoiCriadoComSucesso() {
         //asserções
         cy.wait(`@${Routes.as.postUser}`).then((postUsersResponse) => {
            expect(postUsersResponse.status).to.eq(200)
        })

        cy.wait(`@${Routes.as.getTags}`).then((getTagsResponse) => {
            expect(getTagsResponse.status).to.eq(200)
        })

        cy.wait(`@${Routes.as.getArticless}`).then((getArticlessResponse) => {
            expect(getArticlessResponse.status).to.eq(200)
        })
    }
}

 
export default new Cadastro();