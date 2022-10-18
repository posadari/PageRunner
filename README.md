# PageRunner
https://devpost.com/software/page-runner?ref_content=my-projects-tab&ref_feature=my_projects

## Inspiration
Have you ever felt tired using your hands? Is it too much to reach over to the remote control and press a button, scroll down on a screen, or flip through the pages of a book?

We wanted to create a hack that could enable our incorrigibly lazy habits--that grants the power of mind control (not really)!

While we joke about that, this hack also makes reading more accessible for those with repetitive strain injuries or those requiring accommodations for fine motor skills, reducing the load on them to flip through a book's pages. Reading is something everyone should be able to enjoy, hands down.

## What it does
We created a web app that allows users to turn pages on an e-book without clicking or touching the screen for a hands-free reading experience. Look left to go to the previous page and right to go to the next page, and you'll find yourself burning through each chapter in no time without having to lift a finger.

## How we built it
Our web app combines eye tracking with an ebook reading interface, built entirely with Javascript and React, and utilizes facemesh machine learning models through the WebgazerJS API.

## Challenges we ran into
The WebgazerJS API, while powerful, still suffers from the limitations of our webcams (suboptimal for eye-tracking). Thus, we had to design a process to calibrate eye-tracking and spend time tweaking the zones for user eye-interaction.

## Accomplishments that we're proud of
We're proud of getting a working product out! Neither of us had dabbled in eye-tracking before, so we were pleasantly surprised with our success. We're also proud of the interface; we think our desk looks pretty neat :D

## What we learned
We learned a lot about eye tracking and the nature of a facemesh machine learning model--how they use user interaction paired with eye data to train over time. There was also a lot of stumbling through React's ref system, and some finer details of React that we now understand.

## What's next for Page Runner
In the future, we want to add more books and allow the user to switch books with their eyes! Imagine the possibilities of imagination!
