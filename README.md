# Feed Reader Jasmine Testing Project

The Feed Reader Jasmine Testing Project is the fourth project for the <a target="_blank" href="https://www.udacity.com/course/front-end-web-developer-nanodegree--nd001">Udacity Front-End Web Developer Nanodegree</a>.

## About the Project
This is a self contained project to help solidify the understanding of test building using Jasmine.
The application is a feedreader that pulls in rss feeds from external sources, using the Google Feed Reader API. Below the feed reader are the tests that have passed/failed or been exempt from testing

## Project Files
This project requires the following (all included within the repository):
* HTML file (index.html)
* CSSs file (style.css, normalize.css, icomoon.css)
* Fonts (icomoon.eot, icomoon.svg, icomoon.ttf icomoon.woff)
* JavaScript application files (app.js)
* JavaScript Spec files (feedreader.js)

## Instructions
To work with the files:
1. Click on the 'Clone or download' button.
2. Press the 'Download ZIP' button
3. Unzip the files on your computer
4. Open the index.html file within an Internet browser

Alternatively, if you have GitHub installed:
1. Click on the 'Clone or download' button.
2. Copy the github .git URL file (e.g. git@github.com:git-andrewjlim/fend-nanodegree-feed-reader-testing.git)
3. Navigate to your GitHub repository location on your computer
4. In your console type 'git clone ' and paste the .git URL
```
git clone git@github.com:git-andrewjlim/fend-nanodegree-feed-reader-testing.git
```
5. Open the downloaded index.html file within an Internet browser

## Project Link
[Link to project](https://git-andrewjlim.github.io/fend-nanodegree-feed-reader-testing/)

## Topics Covered
The project encompases all the following topics of the 'JavaScript Tools & Testing' chapter:
* Application testing using Jasmine

# Additional Tests
There are additional tests created beyond the original scope of the project.
* RSS Feeds Suite
- feed names are a string: Tests whether the allFeeds object names are strings
- feed urls is a string: Tests whether the allFeeds object urls are strings
- feed urls are valid urls: Tests whether the allFeeds object urls are valid URLs

## Acknowledgments
The original HTML,CSS and JavaScript templates were provided as a basis and one test suite and spec was written as an example.

For one of the tests, I test against a valid regular expression statement, the regular expression was taken from: https://www.regextester.com/93652