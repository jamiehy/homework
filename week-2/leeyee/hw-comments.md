### Homework Completion

- [x] Use HTML5 structural elements (nav, header, footer)
- [ ] Use a CSS Reset file in addition to your style.css file to style the page			
- [x] Use IDs and Classes to to select and style elements on the page			
- [x] Style your text with the Google Fonts provided by your style guide			
- [x] Follow naming conventions, maintain consistency across .html and .css files and use best practices for naming IDs and Classes			
- [x] Indent nested elements to increase your code's readability

### Homework Comments
- Almost there on the CSS Reset! Typo on the word `normalize`

- I'm glad you used the `container` class to wrap each of the sections.

- You can use the centering method on the button, which is `margin: 0 auto;`

- Good use of the appropriate HTML tags for the **testimonial** section. You can apply a `<span>` instead of the footer tag to the name. Also, set `font-style: normal;` as you had to cancel out the italic style.

- Below is an example of using classes in multiple places, and overwriting them when needed.

```css
.logo {
  color: white;
  font-family: 'Open Sans', sans-serif;
  font-size: 30px;
  font-weight: 800;
}

/* overwrite for footer */
footer .logo {
  color: #f9e42e;
  font-size: 20px;
}
```
Great work!
