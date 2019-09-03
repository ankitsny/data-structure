#include<stdio.h>

void B(int a);

void A(int a)
{
    if (a > 0)
    {
        printf("%d ", a);
        B(a - 1);
    }
}

void B(int a)
{
    if (a > 0)
    {
        printf("%d ", a);
        A(a - 1);
    }
}

int main()
{
    A(10);
}