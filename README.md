# Frontend Mentor - Interactive rating component solution

This is a solution to the [Interactive rating component challenge on Frontend Mentor](https://www.frontendmentor.io/challenges/interactive-rating-component-koxpeBUmI). Frontend Mentor challenges help you improve your coding skills by building realistic projects. 

## Table of contents


  - [The challenge](#the-challenge)
  - [Screenshot](#screenshot)
  - [Built with](#built-with)
  - [What I learned](#what-i-learned)
  - [Continued development](#continued-development)


### The challenge

Users should be able to:

- View the optimal layout for the app depending on their device's screen size
- See hover states for all interactive elements on the page
- Select and submit a number rating
- See the "Thank you" card state after submitting a rating

### Screenshot

![](images/screenshot.png)


### Built with

- Semantic HTML5 markup
- CSS custom properties
- Flexbox
- Javascript (Vanilla)


### What I learned

I had some troubles setting the background and border-radius: 50% (a background circle) on a svg image. For some reason it was getting cropped and I couldn't center it within the circle background.
I solved this in the end by wrapping the svg image inside a container, setting all the properties (including width and height) on a container which also had display: flex set on it.

I played with the width in order to make the component responsive for ALL screen sizes, which also includes the smallest of 320px (iPhone5). 
This time, instead of using the min() or max() function to set the width for my wrapper, I decided to go with a clamp function. 
This allowed me to set the minimum width od 300px, which made the component responsive even on 320px screens. Also the largest width possible set to 414px will make sure that the wrapper doesn't strech on 4k or 1080p screens.
Perhaps some fine tuning would be alright, resizing margins or padding a little bit if we want it to be 100% perfect, but I think this is an elegant way to avoid using media queries at all and still be responsive for all screen sizes.


### Continued development

Javascript part was fun and it's definitely something where I see myself needing to learn more.
I finished this task with no problems, but I would love to be able to incorporate a way to warn a user to choose a rating in case they don't select any value 1-5. 
A user shouldn't be able to click Submit button then, because there would be an alert displayed, warning them to choose a value 1-5 first.




