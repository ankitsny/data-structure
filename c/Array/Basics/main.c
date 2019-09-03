#include<stdio.h>
#include<stdlib.h>


int main(int argc, char const *argv[])
{
    int a[2];

    int *p;

    p = (int *) malloc(5 * sizeof(int)); 
    p[0] = 1;
    printf("%d", p[0]);
    return 0;
}
