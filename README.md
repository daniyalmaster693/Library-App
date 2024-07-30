# Library-App
A library app made using HTML, CSS, and Javascript. The app uses a clean and simple UI, and uses object oriented programming principles to add and remove books.

<h2> Outcome </h2>

<img src="https://i.imgur.com/Cm4sU4I.png" alt="The image of the solution to the challenge">

<h2> Links </h2>

<li> Link to task: https://www.theodinproject.com/lessons/node-path-javascript-library </li>
<li> Link to live demo: https://daniyalmaster693-library-app.vercel.app </li>

<h2> What have I learned </h2>

<li> I've learned how to create Modals </li>
<li> I've further improved my understanding of the "this" keyword </li>
<li> I used basic array methods I learned in the past such as push() </li>
<li> I've learned and used anonymous functions to pass paramters for functions </li>
<li> I've used object oriented principles such as object constructors </li>
<li> I've further improved my understanding of Grid </li>

<h2> Keyboard Controls </h2>

<li> Key "Escape": Hide Modal </li>

<h2> How did I complete this project? </h2>

<p> I started by creating all the HTML elements and assigning them classes. I declared my CSS variables for things like colors, transitions, scale animations, other common values. I began removing default styles such as margin and padding on the body, and then added a min height, background color, and a font-family. I then began working on the modal, where I used things like z-index, top, and position. I created a smooth animation used things like transform, transition, and Javascript adding and removing classlists. I created a modal overlay, using things like position and a lower z-index. In addition, I added the ability to close the modal by click on the overlay (which is why I gave the overlay cursor:pointer). Next I created my add book button, which would show the modal. Then, I added and styled inputs, using things like background color, font colors, placeholder colors, focus classes, boders, and outlines. I also learned how to use the select and option HTML elements, for the book status. Now, in the JS, I began working on input validation. I created the error label, styled the input border and outlines, by adding and removing classlists. Now, I began working on creating a system to add and remove books. I created my constructor using the knowledge from previous lessons. I created my system that would allow the inputs to be used to create book objects using the push method. I used things like splice and remove child to remove books from the DOM and array. Now, I began working on displaying the books, by creating elements uisng JS, that would use the pre-made CSS styles. In order to display the books, I called my displayBooks function on each book in the myLibrary array. I created a few more functions, for things like improving the design of a book, when the title is longer then 20 characters, and function to close the modal using the Escape key. Once I finished, I tested the website on multiple browsers, added some responsive design using media queries, and used the built-in device size emulation feature to view what the website would look like on different devices. </p>
