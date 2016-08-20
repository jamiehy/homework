### Homework Completion

- [x] Use HTML5 structural elements (nav, header, footer)
- [x] Use a CSS Reset file in addition to your style.css file to style the page			
- [x] Use IDs and Classes to to select and style elements on the page			
- [x] Style your text with the Google Fonts provided by your style guide			
- [x] Follow naming conventions, maintain consistency across .html and .css files and use best practices for naming IDs and Classes			
- [x] Indent nested elements to increase your code's readability

### Homework Comments
- Cool that you used a centering technique that we hadn't shown in class, using the `transform` property. I feel in this case, a `text-align: center;` property would be sufficient.

- Instead of writing your margins line by line, here's a shorthand method you can use instead.

```css
.headline {
  /* before */
  margin-left: 1em;
  margin-right: 1em;
  margin-top: 4em;
  margin-bottom: 2em;

  /* after */
  margin: 4em 1em 2em 1em;
  /* margin: top right bottom left */
}
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
