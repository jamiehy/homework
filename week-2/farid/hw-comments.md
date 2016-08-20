### Homework Completion

- [x] Use HTML5 structural elements (nav, header, footer)
- [x] Use a CSS Reset file in addition to your style.css file to style the page			
- [x] Use IDs and Classes to to select and style elements on the page			
- [x] Style your text with the Google Fonts provided by your style guide			
- [x] Follow naming conventions, maintain consistency across .html and .css files and use best practices for naming IDs and Classes			
- [x] Indent nested elements to increase your code's readability

### Homework Comments
- I found your culprit to the width-scrolling problem! You set `width: 100%;` on the Relaxr logo and pushed it to the right. To solve it, simply remove the width. You can avoid using the `overflow-x: hidden` ;)

- Love the button hover effect! And the experimenting with `transition` property though we haven't taught that yet. Here is an easier alternative to achieving the same effect: http://codepen.io/calvintan/pen/GqLrbq

- I saw that you tried to use `:last-child` in the footer. Another thing you could try is create a class for the logo style, and apply the same style to the footer logo but overwrite the colour.

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
Nice work Farid!
