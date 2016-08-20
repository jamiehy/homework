### Homework Completion

- [x] Use HTML5 structural elements (nav, header, footer)
- [x] Use a CSS Reset file in addition to your style.css file to style the page			
- [x] Use IDs and Classes to to select and style elements on the page			
- [ ] Style your text with the Google Fonts provided by your style guide			
- [x] Follow naming conventions, maintain consistency across .html and .css files and use best practices for naming IDs and Classes			
- [x] Indent nested elements to increase your code's readability

### Homework Comments
- You might have missed out on including the Google Font link. You will have to grab the fonts from http://www.google.com/fonts and search for **Open Sans**.

- Noticed that you used the `<a>` tags for links, which is great!

- You can use CSS classes on both the logo and link, since they are applied more than once. Then overwrite the default style when necessary. Here's an example below:

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

Nice work Kawaljit!
