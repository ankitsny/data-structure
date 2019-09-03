#include <stdio.h>
#include <stdlib.h>


struct Rectangle
{
    int length;
    int breadth;
};


int main() {
    struct Rectangle rect;
    rect.length = 1;
    rect.breadth = 2;

    int *a;
    int *b[4];


    printf("%d\n", sizeof(b));

    struct Rectangle *rect_ptr;

    rect_ptr = (struct Rectangle*) malloc(sizeof(struct Rectangle));

    rect_ptr->breadth = 6;
    rect_ptr->length = 5;

    char *aa = "ankso";

    printf("%d, %d, %d", rect_ptr->length, rect_ptr->breadth, sizeof(aa));

    return 0;
}