
# Find Missing Element from the two array

```python
    arr1 = [1,2,3,4,5,6]
    arr2 = [2,1,4,3,6]
    # So 5 is missing here
```

> Time Complexity `O(n)`


```python
def finder(l1, l2):
    # Create Hash map to count the frequency
    count = {}
    
    # Loop through l1
    for i in l1:
        if i in count:
            count[i] += 1
        else:
            count[i] = 1
    
    # Loop through l2 and decrease the counts of each elements
    for i in l2:
        if i in count:
            count[i] -= 1
        else:
            count[i] = 1
    
    # Loop through the count hashmap and check the frequency
    # If frequency of any element is greatere than 0 then that element is missing
    for i in count:
        if count[i] != 0:
            return i
    return "Nothing is missing"
    
```


```python
finder([1,2,3,4,5,6], [2,1,4,3,6])
```




    5



## Testing Using nose


```python
"""
Testing on jupyter notebook using nose
"""
"""
from nose.tools import assert_equal

class TestFinder(object):
    def test(self, sol):
        assert_equal(sol([5,5,7,7], [5,7,7]), 5)
        assert_equal(sol([1,2,3,4,5,6,7], [3,7,2,1,4,6]), 5)
        assert_equal(sol([9,8,7,6,5,4,3,2,1], [9,8,7,5,4,3,2,1]), 6)
        print("TEST PASSED")

# Run Test
r = TestFinder()
t.test(finder)

"""
print("")
```

    


## Testing using unitest


```python
"""
import unittest

class TestFFindMethod(unittest.TestCase):

    def test_finder(self):
        self.assertEqual(finder([5,5,7,7], [5,7,7]), 5)
        self.assertEqual(finder([1,2,3,4,5,6,7], [3,7,2,1,4,6]), 5)
        self.assertEqual(finder([9,8,7,6,5,4,3,2,1], [9,8,7,5,4,3,2,1]), 6)


if __name__ == '__main__':
    unittest.main()
"""   
print("")
```

    

