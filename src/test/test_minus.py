from ..operations.minus import minus

def test_minus():
    '''
    Test minus function

    Arg: None

    Returns: None

    Assert: test positive - positive, positive - negative, negative - negative
    '''
    assert minus(5,10) == -5
    assert minus(6,-8) == 14
    assert minus(-6,-8) == 2