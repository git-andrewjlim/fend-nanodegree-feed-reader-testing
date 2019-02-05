$(function() {

    describe('RSS Feeds', function() {

        it('are defined', function() {
            expect(allFeeds).toBeDefined();
            expect(allFeeds.length).not.toBe(0);
        });

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

        it('feed urls are valid urls', function() {
            //Note: URL RegEx from: https://www.regextester.com/93652
            regUrl = /^(http:\/\/www\.|https:\/\/www\.|http:\/\/|https:\/\/)?[a-z0-9]+([\-\.]{1}[a-z0-9]+)*\.[a-z]{2,5}(:[0-9]{1,5})?(\/.*)?$/gm
            for(let i = 0; i < allFeeds.length; i++) {
                expect(allFeeds[i].url).toMatch(regUrl);
            }
        });

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

 
    describe('The menu', function(){

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
            
            beforeEach(function(done){
                loadFeed(0, function(){
                    done();
                });
            });

            it('menu is hidden by default', function() {
                let menuOffScreen = checkMenuSlide()
                expect(menuOffScreen).toBeTruthy();
            });
    
             it('menu changes visibility', function() {
                let menuVisible = document.body;
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


    describe('Initial Entries', function(){

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

    describe('New Feed Selection', function(){

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
