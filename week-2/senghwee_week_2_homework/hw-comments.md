### Homework Completion

- [x] Use HTML5 structural elements (nav, header, footer)
- [x] Use a CSS Reset file in addition to your style.css file to style the page			
- [x] Use IDs and Classes to to select and style elements on the page			
- [x] Style your text with the Google Fonts provided by your style guide			
- [x] Follow naming conventions, maintain consistency across .html and .css files and use best practices for naming IDs and Classes			
- [x] Indent nested elements to increase your code's readability

### Homework Comments
- I noticed for the **quote** section that you used `<br>` tags to space out the lines. What you could try to do instead, is to set a `width` property on the quote.

- For the footer, you can put the FB and Twitter images into a list instead, so it looks more like:

```html
<ul>
  <li>
    <a href="#"><img src="images/fb.png"></a>
  </li>
  <li>
    <a href="#"><img src="images/twitter.png"></a>
  </li>
</ul>
```
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
Good work!
