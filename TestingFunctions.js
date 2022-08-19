describe( "", function() {
    it("5", function() {
        let arr = [-1, 2, 3, -9];
        let expected = 5;
        assert.equal( getMaxSubSum( arr ), expected );
    });

    it( "5", function() {
        let arr = [2, -1, 2, 3, -9];
        let expected = 5 ;
        assert.equal( getMaxSubSum( arr ), expected );
    });

    it( "11", function() {
        let arr = [-1, 2, 3, -9, 11];
        let expected = 11 ;
        assert.equal( getMaxSubSum( arr ), expected );
    });

    it( "12", function() {
        let arr = [-1, 9, 3, -9, 11];
        let expected = 12 ;
        assert.equal( getMaxSubSum( arr ), expected );
    });

    it( "3", function() {
        let arr = [-2, -1, 1, 2];
        let expected = 3 ;
        assert.equal( getMaxSubSum( arr ), expected );
    });

    it( "100", function() {
        let arr = [100, -9, 2, -3, 5];
        let expected = 100 ;
        assert.equal( getMaxSubSum( arr ), expected );
    });

    it( "6", function() {
        let arr = [1, 2, 3];
        let expected = 6 ;
        assert.equal( getMaxSubSum( arr ), expected );
    });

    it( "0", function() {
        let arr = [-1, -2, -3];
        let expected = 0 ;
        assert.equal( getMaxSubSum( arr ), expected );
    });
});