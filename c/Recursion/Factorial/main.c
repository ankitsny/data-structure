#include<stdio.h>

/**
 * fact(5) = 1 * 2 * 3 * 4 * 5;
 * fact(n) = 1 * 2 * 3 * ... * (n - 1) * n
 * fact(n) = fact(n - 1) * n;
 *  
 * Recurrence relation
 * 1               if n = 0
 * f(n - 1) * n    if n > 0
 */

int fact(int n)
{
    if (n == 0) return 1;
    return fact(n - 1) * n;
}

int main(int argc, char const *argv[])
{
    printf("%d", fact(5));
    return 0;
}
