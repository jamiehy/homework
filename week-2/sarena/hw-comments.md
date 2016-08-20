### Homework Completion

- [x] Use HTML5 structural elements (nav, header, footer)
- [x] Use a CSS Reset file in addition to your style.css file to style the page			
- [x] Use IDs and Classes to to select and style elements on the page			
- [x] Style your text with the Google Fonts provided by your style guide			
- [x] Follow naming conventions, maintain consistency across .html and .css files and use best practices for naming IDs and Classes			
- [x] Indent nested elements to increase your code's readability

### Homework Comments
- Nice use of a `container` style to wrap the contents of each section. One thing to note is perhaps you want to use `class="container"` instead of `id="container"`, as ID is for one-off use.

- Since the button is essentially a link, you can use the `<a>` tag for **Get It Now** and **Sign Up Now**. Also, check out this example to see how to achieve the link without the use of `width` property: http://codepen.io/calvintan/pen/GqLrbq

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
Good work Sarena!
