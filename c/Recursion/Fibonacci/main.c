#include<stdio.h>


/**
 * 0 1 1 2 3 5 8
 * 0 1 2 3 4 5 6
 * 
 * Recurrence Relation fib(n)
 * 0                        if n = 0
 * 1                        if n = 1
 * fib(n - 1) + fib(n - 1)  if n > 1
 * 
 */

static int c0 = 0;
static int c1 = 0;

int fib (int n)
{   
    c0 += 1;
    if (n == 0) return 0;
    if (n == 1) return 1;
    return fib(n - 2) + fib(n - 1);
}

int M[1000];

int MFib(int n)
{
    c1 += 1;
    if (n <= 1 ) 
    {
        M[n] = n;
        return n;
    }


    if (M[n - 2] == -1) 
    {
        M[n - 2] = MFib(n - 2);
    }

    if (M[n - 1] == -1)
    {
        M[n - 1] = MFib(n - 1);
    }
    M[n] = M[n - 2] + M[n - 1];
    return M[n - 2] + M[n - 1];
}


int main(int argc, char const *argv[])
{
    for (int i = 0; i < 1000; i++) 
    {
        M[i] = -1;
    }

    printf("With Memo:\nREC Calls: %d\n%d\n", c1, MFib(6));
    printf("With Memo:\nREC Calls: %d\n%d\n", c1, MFib(7));
    printf("Without Memo:\nREC Calls: %d\n%d\n", c0, fib(7));
    
    return 0;
}
