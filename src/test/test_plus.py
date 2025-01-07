from ..operations.plus import plus

def test_plus():
    '''
    Test plus function

    Arg: None

    Returns: None

    Assert: test positive + positive, positive + negative, negative + negative
    '''
    assert plus(5,10) == 15
    assert plus(6,-8) == -2
    assert plus(-6,-8) == -14