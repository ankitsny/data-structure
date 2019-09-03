#include<stdio.h>

int len (char str[])
{
    int i;
    for ( i = 0; str[i] != '\0'; i++);
    return i;
}

void swap(char str[], int i, int j)
{
    int t;
    t = str[i];
    str[i] = str[j];
    str[j] = t;
}

void Permute (char str[], int l, int h)
{
    int i;
    // printf("%s  i %d  h  %d\n", str, l, h);
    // printf("\nI: %d, l: %d, h: %d", i, l, h);
    if (l == h)
    {
        printf("%s\n", str);
    }
    else
    {
        for (i = l; i <= h; i++)
        {
            swap(str, l, i);
            Permute(str, i + 1, h);
            swap(str, l, i);
        }
    }
}


int main(int argc, char const *argv[])
{
    char str[] = "ABCD";
    Permute(str, 0, 4);
    return 0;
}
