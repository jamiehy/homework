### Homework Completion

- [x] Use HTML5 structural elements (nav, header, footer)
- [x] Use a CSS Reset file in addition to your style.css file to style the page			
- [x] Use IDs and Classes to to select and style elements on the page			
- [x] Style your text with the Google Fonts provided by your style guide			
- [x] Follow naming conventions, maintain consistency across .html and .css files and use best practices for naming IDs and Classes			
- [x] Indent nested elements to increase your code's readability

### Homework Comments
- I noticed you use the global selector to apply fonts to everything. This is okay here, but might not be a good idea in case your design uses multiple fonts, such as icon fonts. Instead, you might want to add it to the `body` instead.

- Since the button is essentially a link, you can use the `<a>` tag for **Get It Now** and **Sign Up Now**. Also, check out this example to see how to achieve the link without the use of `width` and `height` property: http://codepen.io/calvintan/pen/GqLrbq

- You can use CSS classes on both the logo and link, since they are applied more than once. Then overwrite the default style when necessary. Example below:

```css
.logo {
  color: white;
  font-family: 'Open Sans', sans-serif;
  font-weight: 800;
}

footer .logo {
  color: #f9e42e; /* overwrite for footer */
}
```
Overall nice work Jamie!
