class MainPage {

    open() {
        browser.url("https://xmoto.ua/");
    }

    get categoryList() {
        return $$("div#catalog_menu ul li");
    }

    getTextCategoryList() {
        return this.categoryList.map((element) => 
        console.log(element.getText())
        );
    } 

}

export const mainPage = new MainPage();
