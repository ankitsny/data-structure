#include<stdio.h>

/**
 * sum upto n
 * sum(5) = 1 + 2 + 3 + 4 + 5
 * sum(n) = 1 + 2 + ... + (n - 1) + n
 * sum(n) = sum(n - 1) + n
 * 
 * Recurrence Relation
 * 0                if n = 0
 * sum(n - 1) + n   if n > 0
 */

int sum(int n)
{
    // T O(n);
    // S O(n);
    if (n == 0)
    {
        return 0;
    }
    return sum(n - 1) + n;
}

int sum2(int n)
{
    // T O(1);
    // S O(1);
    return (n * (n - 1)) / 2;
}

// Using loops
// T O(n)
// S O(1)


int main()
{
    printf("%d", sum(5));
    
    
    return 0;
}