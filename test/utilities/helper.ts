// export const waitForTextChange = (el: { category: { getText: () => any; }; }, text: any, timeout: any) => {
//     browser.waitUntil(
//         function() {
//             return el.category.getText() === text;

//         },
//         {timeout: timeout}
//     )
// }

export const waitAndClick = (el: any) => {
    el.waitForDisplayed();
    el.click();

}

