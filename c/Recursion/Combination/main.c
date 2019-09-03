#include<stdio.h>

/**
 * Using pascal triangle
 *              (nCr) => n, r = 0 then val = 1
 *              .   .
 *             .     .
 *            .       .
 *      (1C0) 1        1 (1C1)
 *          .  .      .  .
 *         .    .    .     .
 *        .      .  .       .
 * (2C0) 1  (2C1) 2         1 (2C2)
 * 
 * 
 * for 2C1 = 2!/1!(2-1)! => 2/1 = 2
 * 
 * Recurrence Relation
 *          1,                          r = 0 or n = r
 *  nCr  =  
 *          (n-1)C(r-1) + (n-1)C(r)     r > 0 and r != n
 *  
 */

int C (int n, int r)
{
    if (r == 0 || n == r)
    {
        return 1;
    }
    return C(n - 1, r - 1) + C(n - 1, r);
}


void pascal(int n)
{   
    // n denoted by i
    // loop upto n, start with 0 
    for (int i = 0; i < n; i++)
    {
        // print space upto n-ith time
        for (int j = n-i - 1; j > 0; j--)
        {
            printf(" ");
        }

        // print iCk, till i == k
        for (int k = 0; k <= i; k++)
        {
            printf("%d ", C(i, k));
        }
        printf("\n");
    }
}


int main(int argc, char const *argv[])
{
    printf("nCr %d\n", C(2, 1));
    
    pascal(15);

    return 0;
}
