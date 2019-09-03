#include<stdio.h>
#include<stdlib.h>

struct Array
{
    int *A;
    int size;
    int length;
};


void Display(struct Array a) 
{
    printf("Numbers are\n");
    for (int i = 0; i < a.length; i++)
    {
        printf("%d\n", a.A[i]);
    }
}



int main(int argc, char const *argv[])
{
    struct Array a;

    int n;


    printf("Enter the size of array\n");
    scanf("%d", &a.size);

    a.A = (int *)malloc(sizeof(int)*a.size);
    a.length = 0;

    printf("Enter the number of Numbers\n");
    scanf("%d", &n);

    printf("Enter %d array elements\n", n);
    for (int i = 0; i < n; i++)
    {
        scanf("%d", &a.A[i]);
    }
    a.length = n;

    Display(a);


    return 0;
}
