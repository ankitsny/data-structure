
# Array Pair Sum


> Time Complexity `O(n)`


```python
def array_pair_sum(items, sum):
    
    # Check if the length is less than 2
    if len(items) < 2:
        return 0
    
    # Tracking of seen elemets
    seen = set()
    
    # Output
    output = set()
    
    # Loop through all elements
    for i in items:
        print("FOR ITEM " + str(i))
        print("\tSEEN: " + "".join(map(str, seen)))
        remaining = sum - i
        print("\tREMAINING: " + str(remaining))
        if remaining in seen:
            print("\tFOUND IN SEEN: " + str(remaining))
            print("\tFOUND PAIR SUM: " + str(i) + "," +str(remaining))
            output.add((min(i, remaining), max(i, remaining)))
        else:
            print("\tNOT FOUND IN SEEN: "+ str(remaining))
            print("\tADD " + str(remaining) + " IN SEEN")
            seen.add(i)
    print("\n".join(map(str, output)))
    
    return len(output)
            
        
    
```


```python
array_pair_sum([1,3,2,5,-1], 4)
```

    FOR ITEM 1
    	SEEN: 
    	REMAINING: 3
    	NOT FOUND IN SEEN: 3
    	ADD 3 IN SEEN
    FOR ITEM 3
    	SEEN: 1
    	REMAINING: 1
    	FOUND IN SEEN: 1
    	FOUND PAIR SUM: 3,1
    FOR ITEM 2
    	SEEN: 1
    	REMAINING: 2
    	NOT FOUND IN SEEN: 2
    	ADD 2 IN SEEN
    FOR ITEM 5
    	SEEN: 12
    	REMAINING: -1
    	NOT FOUND IN SEEN: -1
    	ADD -1 IN SEEN
    FOR ITEM -1
    	SEEN: 125
    	REMAINING: 5
    	FOUND IN SEEN: 5
    	FOUND PAIR SUM: -1,5
    (1, 3)
    (-1, 5)





    2


