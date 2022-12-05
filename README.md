# Frontend Mentor - Notifications page solution

This is a solution to the [Notifications page challenge on Frontend Mentor](https://www.frontendmentor.io/challenges/notifications-page-DqK5QAmKbC).

## Table of contents

- [Overview](#overview)
  - [The challenge](#the-challenge)
  - [Screenshot](#screenshot)
  - [Links](#links)
- [My process](#my-process)
  - [Built with](#built-with)
  - [What I learned](#what-i-learned)
  - [Continued development](#continued-development)
  - [Useful resources](#useful-resources)
- [Author](#author)

## Overview

### The challenge

Users should be able to:

- Distinguish between "unread" and "read" notifications
- Select "Mark all as read" to toggle the visual state of the unread notifications and set the number of unread messages to zero
- View the optimal layout for the interface depending on their device's screen size
- See hover and focus states for all interactive elements on the page

### Screenshot

![](<./images/Notifications%20page%20challenge%20on%20Frontend%20Mentor%20(mobile)%20--%20By%20Mayowa%20Odebode.png>)
![](<./images/Notifications%20page%20challenge%20on%20Frontend%20Mentor%20(web)%20--%20By%20Mayowa%20Odebode.png>)

### Links

- Solution URL: [Solution URL](https://notification-component.netlify.app/)
- Live Site URL: [Live Site URL](https://notification-component.netlify.app/)

## My process

### Built with

- Semantic HTML5 markup
- CSS custom properties
- Flexbox
- Javascript
- AOS (Animate On Scroll) Library

### What I learned

```js
Learnt how to toggle display
function toggleNotifText() {
  document.querySelector(".nm-cc__message").classList.toggle("show-message");
}

Learnt how to loop through elements
  for (let i = 0; i < 3; i++) {
    let nmCard = nmCards[i];
    nmCard.classList.toggle("unread");
    let nIcon = nIcons[i];
    nIcon.classList.toggle("hide-notif-icon");
  }
```

### Continued development

- Implement a drop-down message box onclick of each notification card
- To implement a popup modal on click of profile picture or picture commented on

### Useful resources

- [CSS Scan](https://getcssscan.com/css-box-shadow-examples) - This helped me by providing ready-made drop-shadow options to pick from.
- [MDN Web Docs](https://developer.mozilla.org/en-US/docs/Web/API/DOMTokenList/toggle) - This is an amazing resource which helped me understand how to toggle displays. I'd recommend it to anyone still learning this concept.
- [Animation Library - AOS](https://michalsnik.github.io/aos/) - Great resource that helped with bringing this project to life with some subtle smooth animations.

## Author

- Website - [Mayowa Odebode](https://mayowa-odebode.netlify.app/)
- Frontend Mentor - [@peter-xidian](https://www.frontendmentor.io/profile/Peter-Xidian)
- Twitter - [@maydort](https://twitter.com/maydort)
