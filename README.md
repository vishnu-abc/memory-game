# Memory Game Project

## Table of Contents

-   [Instructions](#instructions)
-   [Scratch Project Link](#Scratch-Project-Link)
-   [How to observe Output](#How-to-observe-Output)
-   [Steps followed](#Steps-followed)
-   [How to play the game](#How-to-play-the-game)
-   [Contributing](#contributing)

## Instructions

The starter project has some HTML and CSS styling to display a static version of the Memory Game project. You'll need to convert this project from a static project to an interactive one. This will require modifying the HTML and CSS files, but primarily the JavaScript file.

To get started, open `app.js` and start building out the app's functionality

For specific, detailed instructions, look at the project instructions in the [Udacity Classroom](https://classroom.udacity.com/me).

## Scratch Project Link

<https://github.com/udacity/fend-project-memory-game>

By using this link we can download the scratch project for memory game.

## How to observe Output

To observe the output open the `index.html` file in the working directory.

## Steps followed

 **_To complete the Project I have done the below steps_**

-   I have downloaded the `zip file` and placed it in my current working folder. Then, I have extracted that zip file.

-   First I have created an array variable called 'cards' and  added an event listener called `click` to all the cards which means  whenever I have clicked the card, the corresponding card should be displayed.

-   After the first click is made, the timer will start which is written in `timer()` function.
-   When the `timer()`function is called the `setInterval()` function which is inside the `timer()`function starts the `timecount`.
-   The cards that are clicked are stored in a array variable called `clicked`. If the no of clicks become two i.e clicked length becomes two, then the cards are compared for matching.

-   If the cards are  `matched`, then the cards remain displayed and clicked is assigned to nothing which means its length is `zero`.

-   If the cards are  `not matched`, then after 300 millisec the cards are not displayed and clicked is assigned to nothing which means its length is `zero`.

-   The no of moves in the game are stored in a variable called `moves` and it is displayed in the game and each time this value varies based on no. of moves made by the player.

-   Based on the no. of moves the star rating is decreased which is provided in the `rating()` function.

-   When the cards are matched, then that two cards will stored in a variable called `success`. At last if the `length` of the values in `success` is equal to `16`, then the `stoptimer()` function is called. When the `stoptimer()` function is called the `clearInterval()` function which is inside the `stoptimer()` function stops the `timecount`

-   Also, after the game is over which means winning the game, the  **popup window** is displayed which provides messages like `You won the game`, 'rating', `time` taken to complete and 'play again' button.

-   When the `play again` is clicked the game starts from the first.

-   Also the game contains `restart` button ,when it is clicked the game starts from first.

-   The cards also shuffles when the play again is clicked and also when the game is restarted or reloaded which is provided in `shuffle()` function.

## How to play the game

First give click on one card and then click another card to match the previous card. Repeat this process untill all the cards are matched.

## Contributing

This repository is the starter code for _all_ Udacity students. Therefore, we most likely will not accept pull requests.

For details, check out [CONTRIBUTING.md](CONTRIBUTING.md).
