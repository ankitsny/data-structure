#include<stdio.h>


/**
 * 2^5 = 2 * 2 * 2 * 2 * 2
 * pow(m, n) = (m * m * ... m(n - 1)times) * m
 * pow(m, n) = m * (n-1) -> times
 * pow(m, n) = pow(m, n - 1) * m
 * 
 * Recurence relation
 * 1                    if n = 0
 * pow(m, n - 1) * m    if n > 0
 */

int Pow(int m, int n) 
{
    if (n == 0) return 1;

    return Pow(m, n - 1) * m;
}

int Pow2(int m, int n) 
{
    if (n == 0) return 1;

    if (n & 1) // Odd n
    {
        return m * Pow2(m * m, (n - 1)/2);
    }
    
    return Pow2(m * m, n/2);
}



int main(int argc, char const *argv[])
{
    printf("%d", Pow2(2, 5));
    return 0;
}
