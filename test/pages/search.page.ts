class SearchPage {
  get searchInput() {
    return $("#gh-ac");
  }

  get searchBtn() {
    return $("#gh-btn");
  }

  get category() {
    return $("#gh-cat option:nth-child(1)");
  }

  open() {
    browser.url("https://ebay.com")
  }
}

export const searchPage = new SearchPage();
