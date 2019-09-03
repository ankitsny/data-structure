#include <stdio.h>
#include <stdlib.h>


void main(){
    int *p;
    p = (int *) malloc(5 * sizeof(int));
    // CPP => new int[5]

    printf("%d", sizeof(p));

}
