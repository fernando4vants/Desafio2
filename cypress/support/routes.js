class Routes {
    as = {
        postArticles:'POSTArticles',
        getArticlesTitle: 'GETArticlesTitle',
        getArticlesTitleComments: 'GETArticlesTitleComments',
        postUser:'POSTUsers',
        getTags:'GETTags',
        getArticless:'GETArticless'
    }

    init(){
        cy.server()
        cy.route('POST', '**/api/articles').as(this.as.postArticles);
        cy.route('GET', '**/api/articles/agilizei-title-**').as(this.as.getArticlesTitle);
        cy.route('POST', '**/api/articles/agilizei-title-**/comments').as(this.as.getArticlesTitleComments);
    }

    initCreateUser(){
        cy.server()
        cy.route('POST', '**/api/users').as(this.as.postUser);
        cy.route('GET', '**/api/tags').as(this.as.getTags);
        cy.route('GET', '**/api/articles/feed?limit=10&offset=0').as(this.as.getArticless);
    }
}

export default new Routes();