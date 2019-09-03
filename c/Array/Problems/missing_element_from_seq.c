#include<stdio.h>
/**
 * val [5,6,7,9]
 * ind  0,1,2,3
 * 
 * diff 5 - 0
 * for 2nd ele diff = 6 - 1 => 5, not missing 
 * for 3rd ele diff = 7 - 2 => 5, not missing
 * for 4th ele diff = 9 - 3 => 6, missing, missing ele = diff + index
 *                              missing ele = 5 + 3 => 8
 *                              update new diff, now diff = 6
 * 
 * values [6, 9, 10, 11]
 * index   0, 1,  2,  3 
 * 
 * diff =   6 - 0 => 6
 * diff @1, 9 - 1 => 8, missing ele, more than 1
 *                      use loop till the current diff and keep incrementing diff by 1  
 * 
 */
void printMissing(int a[], int size)
{
    int diff = a[0] - 0;
    for (int i = 0; i < size; i++)
    {
        if (a[i] - i != diff)
        {
            // Missing elements
            while (diff < a[i] - i)
            {
                printf("Missing %d\n", diff + i);
                diff++;
            }
        }
    }
}


int main(int argc, char const *argv[])
{
    int a[5] = {1,5,6,7,10};
    printMissing(a, 5);
    return 0;
}
