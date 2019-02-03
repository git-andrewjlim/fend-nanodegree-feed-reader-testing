/* feedreader.js
 *
 * This is the spec file that Jasmine will read and contains
 * all of the tests that will be run against your application.
 */

/* We're placing all of our tests within the $() function,
 * since some of these tests may require DOM elements. We want
 * to ensure they don't run until the DOM is ready.
 */
$(function() {
    /* This is our first test suite - a test suite just contains
    * a related set of tests. This suite is all about the RSS
    * feeds definitions, the allFeeds variable in our application.
    */
    describe('RSS Feeds', function() {
        /* This is our first test - it tests to make sure that the
         * allFeeds variable has been defined and that it is not
         * empty. Experiment with this before you get started on
         * the rest of this project. What happens when you change
         * allFeeds in app.js to be an empty array and refresh the
         * page?
         */
        it('are defined', function() {
            expect(allFeeds).toBeDefined();
            expect(allFeeds.length).not.toBe(0);
        });


        /* TODO: Write a test that loops through each feed
         * in the allFeeds object and ensures it has a URL defined
         * and that the URL is not empty.
         */
        it('feed urls are defined', function() {
            for(let i = 0; i < allFeeds.length; i++) {
                expect(allFeeds[i].url).toBeDefined();
            }
        });

        it('feed urls are not empty', function() {
            for(let i = 0; i < allFeeds.length; i++) {
                expect(allFeeds[i].url.length).not.toBe(0);
            }
        });

        it('feed urls is a string', function() {
            for(let i = 0; i < allFeeds.length; i++) {
                expect(typeof(allFeeds[i].url)).toEqual('string');
            }
        });

        it('feed urls is a valid url', function() {
            //Note: URL RegEx taken from: https://www.regextester.com/93652
            regUrl = /^(http:\/\/www\.|https:\/\/www\.|http:\/\/|https:\/\/)?[a-z0-9]+([\-\.]{1}[a-z0-9]+)*\.[a-z]{2,5}(:[0-9]{1,5})?(\/.*)?$/gm
            for(let i = 0; i < allFeeds.length; i++) {
                expect(allFeeds[i].url).toMatch(regUrl);
            }
        });

        /* TODO: Write a test that loops through each feed
         * in the allFeeds object and ensures it has a name defined
         * and that the name is not empty.
         */
        it('feed names are defined', function() {
            for(let i = 0; i < allFeeds.length; i++) {
                expect(allFeeds[i].name).toBeDefined();
            }
        });

        it('feed names are not empty', function() {
            for(let i = 0; i < allFeeds.length; i++) {
                expect(allFeeds[i].url.name).not.toBe(0);
            }
        });

        it('feed names are a string', function() {
            for(let i = 0; i < allFeeds.length; i++) {
                expect(typeof(allFeeds[i].name)).toEqual('string');
            }
        });
    });


    /* TODO: Write a new test suite named "The menu" */
    describe('The menu', function(){
        /* TODO: Write a test that ensures the menu element is
         * hidden by default. You'll have to analyze the HTML and
         * the CSS to determine how we're performing the
         * hiding/showing of the menu element.
         */
        it('menu element slider exists', function() {
            let menuItem = document.querySelectorAll('.menu-hidden .slide-menu');
            expect(menuItem[0]).not.toBeNull();
        });

        it('should only be one menuItem', function() {
            let menuItem = document.querySelectorAll('.menu-hidden .slide-menu');
            expect(menuItem.length).toBe(1);
        });

        describe('menu visibility', function() {
            checkMenuSlide = function() {
                // this checks to see if the .slide menu has a transform setting below 0 (offscreen)
                const menuItem = document.querySelectorAll('.menu-hidden .slide-menu');
                const slideMenu = window.getComputedStyle(menuItem.item(0), null);
                const menuPositionMatrix = slideMenu.transform.split(', ');
                const menuPosition = parseInt(menuPositionMatrix[4]);
                const menuOffScreen = menuPosition < 0;

                return menuOffScreen;
            };

            it('menu is hidden by default', function() {
                let menuOffScreen = checkMenuSlide()
                expect(menuOffScreen).toBeTruthy();
            });
    
             /* TODO: Write a test that ensures the menu changes
              * visibility when the menu icon is clicked. This test
              * should have two expectations: does the menu display when
              * clicked and does it hide when clicked again.
              */
            beforeEach(function(done){
                loadFeed(0, function(){
                    done();
                });
            });

             it('menu changes visibility', function() {
                let menuVisible = document.querySelector('.menu-hidden');
                const menuClickLink = menuClick = $('.menu-icon-link');
                //initial state
                expect(menuVisible.className).toBe("menu-hidden");

                //first click
                menuClickLink.click();
                expect(menuVisible.className).not.toBe("menu-hidden");

                //second click
                menuClickLink.click();
                expect(menuVisible.className).toBe("menu-hidden");
             });
        });

    });

    /* TODO: Write a new test suite named "Initial Entries" */
    describe('Initial Entries', function(){
        /* TODO: Write a test that ensures when the loadFeed
         * function is called and completes its work, there is at least
         * a single .entry element within the .feed container.
         * Remember, loadFeed() is asynchronous so this test will require
         * the use of Jasmine's beforeEach and asynchronous done() function.
         */

        beforeEach(function(done){
            loadFeed(0, function(){
                done();
            });
        });

        it('loadFeed should be populated', function() {
            let feedEntries = document.querySelectorAll('.feed .entry-link');
            expect(feedEntries.length).not.toBe(0);
        });
    });

    /* TODO: Write a new test suite named "New Feed Selection" */
    describe('New Feed Selection', function(){
        /* TODO: Write a test that ensures when a new feed is loaded
         * by the loadFeed function that the content actually changes.
         * Remember, loadFeed() is asynchronous.
         */

        let feed1, feed2;

        beforeEach(function(done){
            loadFeed(0, function(){
                feed1 = document.querySelector('.feed').innerText;
                loadFeed(1, function(){
                    feed2 = document.querySelector('.feed').innerText;
                    done();
                });
            });
        });

        it('feeds should change', function() {
            // compare the two variables
            feedCompare = feed1 === feed2;
            expect(feedCompare).toBeFalsy();
        });
    });
}());
