# Quiz-Game

July 31, 2020

I started this quiz game by setting up the code for the countdown clock.  After setting up my HTML, I inserted the countdown div and began building my quiz game from there.  I started with the website alerting the user that they had 1 minute to complete the 5 questions, which are blank at the moment.  Once they click "OK" the timer begins. 

**I am still working on the functionality of seconds being taken off of the timer.  

/Users/rbraun04/Desktop/Screen Shot 2020-07-31 at 12.23.47 AM.png

I then built out the question and answer functions using a variety of variables.  I followed an instructionary video on YouTube to map out the questions and answers (which are currently gibberish).  The video helped to clarify how to set the questions into a variable, how they are called through the functions, and how the answers are compared.

I added "clearInterval" in the else section of the checkAnswer function as well as when the timer hits 0 in case the user does not select any questions.

I also added a prompt in the scoreRender function that asks for the users initials.  Their response is then stored into a variable and stored into LocalStorage.  I may attempt to write a score card that compares all the stored scores and lists them in order.

The next step will be styling and theming the quiz game and adding a few extra flares, perhaps alerts to trigger when time is getting low, or if answers are obviously wrong some sort of animation triggers.


August 1, 2020

Added to the function "answerisWrong" to subtrect 5 seconds any time a wrong answer is selected.  

Adding background images, going down a "Pop art" theme, maybe turn this quiz into random pop questions.
