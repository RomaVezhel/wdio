import { mainPage } from "../pages/xmotoMain.page";

describe.skip("Open web site", function () {
  it("look at list of elements", function () {
    mainPage.open();
   const categoryList = mainPage.getTextCategoryList();
   console.log(categoryList);
   
  });
});
