document.addEventListener("DOMContentLoaded", () => {
  const modal = document.querySelector(".modal");
  const modalOverlay = document.querySelector(".modal-overlay");
  const bookInput = document.querySelector(".book-input");
  const bookInputError = document.querySelector(".book-input-error");
  const authorInput = document.querySelector(".author-input");
  const authorInputError = document.querySelector(".author-input-error");
  const pagesInput = document.querySelector(".pages-input");
  const pagesInputError = document.querySelector(".pages-input-error");
  const readingStatus = document.querySelector(".book-status");
  const addBook = document.querySelector(".add-books");
  const submitBook = document.querySelector(".submit-book");
  const books = document.querySelector(".books");

  const myLibrary = [];

  function Book(title, author, pages, status) {
    this.title = title;
    this.author = author;
    this.pages = pages;
    this.status = status;
  }

  function addBookToLibrary() {
    const errors = displayErrors();
    if (errors) {
      return;
    }

    const bookTitle = bookInput.value;
    const authorName = authorInput.value;
    const pagesAmount = pagesInput.value;
    const bookProgress = readingStatus.value;

    const addBookName = new Book(
      bookTitle,
      authorName,
      pagesAmount,
      bookProgress
    );

    myLibrary.push(addBookName);
    displayBooks(addBookName);

    clearModal();
    hideModal();
  }

  function removeBookFromLibrary(bookIndex) {
    myLibrary.splice(bookIndex, 1);
    books.removeChild(books.children[bookIndex]);
  }

  function displayBooks(book) {
    const bookCard = document.createElement("div");
    bookCard.classList.add("book-card");

    const title = document.createElement("h2");
    title.classList.add("book-title");
    title.innerHTML = `${book.title}`;

    const author = document.createElement("p");
    author.classList.add("book-author");
    author.innerHTML = `${book.author}`;

    const pages = document.createElement("p");
    pages.classList.add("book-pages");
    pages.innerHTML = `${book.pages} pages`;

    const bookButtons = document.createElement("div");
    bookButtons.classList.add("book-buttons");

    const bookStatus = document.createElement("button");
    bookStatus.classList.add("book-reading-status");
    bookStatus.innerHTML = `${book.status}`;

    const removeBook = document.createElement("button");
    removeBook.classList.add("remove-book");
    removeBook.innerHTML = "Remove";
    removeBook.addEventListener("click", () => {
      const bookIndex = myLibrary.indexOf(book);
      removeBookFromLibrary(bookIndex);
    });

    books.appendChild(bookCard);
    bookCard.appendChild(title);
    bookCard.appendChild(author);
    bookCard.appendChild(pages);
    bookCard.appendChild(bookButtons);
    bookButtons.appendChild(bookStatus);
    bookButtons.appendChild(removeBook);

    changeFontSize.call(title);
    bookStatus.addEventListener("click", function () {
      changeBookStatus.call(this, book);
    });
  }

  function displayAllBooks() {
    myLibrary.forEach((book) => displayBooks(book));
  }

  function displayErrors() {
    let errors = false;

    if (bookInput.value === "") {
      bookInput.classList.add("error");
      bookInputError.style.opacity = "1";
      errors = true;
    } else {
      bookInput.classList.remove("error");
      bookInputError.style.opacity = "0";
      errors = false;
    }

    if (authorInput.value === "") {
      authorInput.classList.add("error");
      authorInputError.style.opacity = "1";
      errors = true;
    } else {
      authorInput.classList.remove("error");
      authorInputError.style.opacity = "0";
      errors = false;
    }

    if (pagesInput.value === "") {
      pagesInput.classList.add("error");
      pagesInputError.style.opacity = "1";
      errors = true;
    } else {
      pagesInput.classList.remove("error");
      pagesInputError.style.opacity = "0";
      errors = false;
    }

    return errors;
  }

  function changeFontSize() {
    if (this.textContent.length > 20) {
      this.style.fontSize = "25px";
      this.style.marginBottom = "-25px";
    } else {
      this.style.fontSize = "30px";
      this.style.marginBottom = "0px";
    }
  }

  function changeBookStatus(book) {
    if (this.textContent === "Read") {
      this.textContent = "Unread";
      book.status = "Unread";
    } else {
      this.textContent = "Read";
      book.status = "Read";
    }

    if (book.status === "Read") {
      book.status = "Unread";
    } else {
      book.status = "Read";
    }
  }

  function clearModal() {
    bookInput.value = "";
    authorInput.value = "";
    pagesInput.value = "";

    errors = false;

    bookInput.classList.remove("error");
    authorInput.classList.remove("error");
    pagesInput.classList.remove("error");

    bookInputError.style.opacity = "0";
    authorInputError.style.opacity = "0";
    pagesInputError.style.opacity = "0";
  }

  function showModal() {
    modal.classList.add("visible");
    modalOverlay.classList.remove("hidden");

    document.addEventListener("keydown", keyboardCloseModal);
  }

  function hideModal() {
    modal.classList.remove("visible");
    modalOverlay.classList.add("hidden");

    document.removeEventListener("keydown", keyboardCloseModal);
  }

  function keyboardCloseModal() {
    const key = event.key;
    if (key === "Escape") {
      hideModal();
    }
  }

  displayAllBooks();
  hideModal();

  addBook.addEventListener("click", showModal);
  submitBook.addEventListener("click", addBookToLibrary);
  bookInput.addEventListener("input", displayErrors);
  authorInput.addEventListener("input", displayErrors);
  pagesInput.addEventListener("input", displayErrors);
  modalOverlay.addEventListener("click", hideModal);
});
