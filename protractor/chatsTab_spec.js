describe('Testing the chats tab', function() {
    it('should be able to click on the chats tab', function() {
        expect(element(by.css('a[icon-on=ion-ios-chatboxes]')).isPresent()).toBe(true);
        element(by.css('a[icon-on=ion-ios-chatboxes]')).click();
    });

    it('should be able to see all chats', function() {
      element.all(by.repeater('chat in chats')).count().then(function(count) {
        expect(count).toBeGreaterThan(0);
      });
    });
});
