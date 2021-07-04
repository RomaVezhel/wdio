class MainPage {

    open() {
        browser.url("https://xmoto.ua/");
    }

    get categoryList() {
        return $$("div#catalog_menu ul li");
    }

    getTextCategoryList() {
        const categoryList = [];
        this.categoryList.map((element) => 
        categoryList.push(element.getText()));

        return categoryList;
    } 

}

export const mainPage = new MainPage();
