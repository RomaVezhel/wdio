class WatchesPage {
    open() {
        browser.url("https://ebay.com");
    }

    get fashionLink() {
        return $$(".hl-cat-nav__container a[href*=Fashion]")[0]
    }

    get watchesLink() {
        return $('.hl-cat-nav__sub-cat-col a[href*="Watches-Parts"]');
      }


}

export const watchesPage = new WatchesPage();