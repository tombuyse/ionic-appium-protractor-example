describe('Testing the dash tab', function() {
    it('should be able to see the displayed products', function() {
        element.all(by.repeater('product in products')).count().then(function(count) {
            expect(count).toBeGreaterThan(0);
        });
    });

    it('should find all images', function () {
        browser.executeAsyncScript(function (callback) {
            var imgs = document.getElementsByTagName('img'),
                loaded = 0;
            for (var i = 0; i < imgs.length; i++) {
                if (imgs[i].naturalWidth > 0) {
                    loaded = loaded + 1;
                }
            }
            callback(imgs.length - loaded);
        }).then(function (loadedImagesCount) {
            expect(loadedImagesCount).toBe(0);
        });
    });
});
