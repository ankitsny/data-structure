# Combination
    ```
    nCr => n!/r!(n-r)!
    ```
> nCr can be determined from Pascal's triangle
```
                            0c0
                             1
                            / \  
                        
                        /         \

                    /                 \
                  1c0                 1c1  
                   1                    1
                /     \              /     \

              /           \      /            \
            2c0              2c1              2c2
            1                 2                  1

    // nCr = (n-1) C (r - 1) + (n-1) C (r)
    // base condition r = 0 or n = r then return 1
    
    2C1 = (2-1) C (1-1) + (2-1) C (1);
    2C1 =  (1)  C  (0)  +  (1)  C (1);
    2C1 =       1       +       1;
    2C1 =               2;

```     