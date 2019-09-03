#include<stdio.h>
#include<stdlib.h>




/**
 * A[i][j][K]
 * base add = 2000
 * a[a][b][c] = bAdd + (a*j*k + b*k + c) * sizeof(D)
 * 
 * B[i][j]
 * a[a][b] = bAdd + (a*j + b) * sizeof(D)
 */

int main(int argc, char const *argv[])
{
    int A[3][4] = {{1,2,3}, {4,5,6}, {7,8,9}}; // in the stack

    int *B[3]; // in stack

    B[0] = (int *)malloc(3*sizeof(int)); // heap
    B[1] = (int *)malloc(3*sizeof(int)); // heap
    B[2] = (int *)malloc(3*sizeof(int)); // heap

    int **C;

    C = (int **)malloc(3 * sizeof(int *)); // on heap memory
    C[0] = (int *)malloc(3*sizeof(int)); // on heap
    C[1] = (int *)malloc(3*sizeof(int)); // on heap
    C[2] = (int *)malloc(3*sizeof(int)); // on heap

    return 0;
}
