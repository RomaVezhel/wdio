import { watchesPage } from "../pages/watches.page";
import { waitAndClick } from "../utilities/helper";

describe.only("Watches page", function () {
  it("should contain link on banner button and verify its clickable", function () {
    watchesPage.open();
    watchesPage.fashionLink.moveTo();
    waitAndClick(watchesPage.watchesLink);
  });
});
