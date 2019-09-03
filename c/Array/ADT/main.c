#include<stdio.h>
#include<stdlib.h>
#include<stdbool.h>

struct Array
{
    int A[10];
    int size;
    int length;
};

void Append(struct Array *a, int val)
{
    if (a->length < a->size)
    {
        a->A[a->length++] = val;
    }
}

void Insert(struct Array *a, int index, int val)
{
    if (index >= 0 && index <= a->length)
    {

        for (int i = a->length; i > index; i--)
        {
            a->A[i] = a->A[i-1];
        }
        a->A[index] = val;
        a->length++;
    }
}

int Delete(struct Array *a, int index)
{
    if (index >=0 && index < a->length)
    {
        int val = a->A[index];
        for (int i = index; i < a->length-1; i++)
        {
            a->A[i] = a->A[i+1];
        }
        a->length--;
        return val;
    }
    return 0;
}

int LinearSearch(struct Array a, int val)
{

    for (int i = 0; i < a.length; i++)
    {
        if (a.A[i] == val)
        {
            // for optimization we can swap the current index value with 0th index value
            // if the order of element is not the concern
            return i;
        }
    }
    return -1;
}


int BinarySearch(struct Array a, int key)
{
    int l = 0, h = a.length-1;

    while ( l <= h )
    {
        int mid = (l+h)/2;
        
        if (a.A[mid] == key)
        {
            return mid;
        }
        
        if (a.A[mid] < key)
        {
            l = mid + 1;
            continue;
        }
        h = mid-1;
    }
    return -1;
}

int RBinarySearch(struct Array a, int l, int h, int key)
{
    if (l <= h)
    {
        int mid = (l+h)/2;

        if (a.A[mid] == key) 
            return mid;
        else if (key > a.A[mid])
        {
            return RBinarySearch(a, mid+1, h, key);
        }
        else
        {
            return RBinarySearch(a, l, mid-1, key);
        }
    }
    return -1;
}

int Get(struct Array a, int index)
{
    if (index >= 0 && index < a.length)
    {
        return a.A[index];
    }
}

void Set(struct Array *a, int index, int val)
{
    if (index >= 0 && index < a->length)
    {
        a->A[index] = val;
    }
}

int Max(struct Array a)
{
    if (!a.length) return -1;
    int max = a.A[0];

    for (int i = 1; i < a.length; i++)
    {
        if (max < a.A[i]) max = a.A[i];
    }
    return max;
}

int Min(struct Array a)
{
    if (!a.length) return -1;
    int min = a.A[0];

    for (int i = 1; i < a.length; i++)
    {
        if (min > a.A[i]) min = a.A[i];
    }
    return min;
}

int Sum(struct Array a)
{
    int sum = 0;
    
    for (int i = 0; i < a.length; i++)
    {
        sum += a.A[i];
    }
    return sum;
}

float Average(struct Array a)
{
    return (float) Sum(a)/a.length;
}

void swap(struct Array *a, int i, int j)
{
    int t = a->A[i];
    a->A[i] = a->A[j];
    a->A[j] = t;
}

void Reverse(struct Array *a)
{
    int i = 0, j = a->length-1;

    while (i<=j)
    {
        swap(a, i++, j--);
    }
}


void InsertInSorted(struct Array *a, int ele)
{
    if (a->length == a->size) return;

    int i = a->length-1;
    while (i>=0 && a->A[i] > ele)
    {
        a->A[i+1] = a->A[i];
        i--;
    }
    a->A[i+1] = ele;
    a->length++;
}

bool isSorted(struct Array a)
{
    int i = 0;
    while (i < a.length-1 && a.A[i] <= a.A[i+1] )
    {
        printf("%d-%d\n", a.A[i], a.A[i+1]);
        i++;
    }
    return (bool)(i+1 == a.length);
}


void Display(struct Array a) 
{
    printf("Numbers are\n");
    for (int i = 0; i < a.length; i++)
    {
        printf("%d\t", a.A[i]);
    }
    printf("\n");
}


/**
 * 1,2,3,4,-1,-3,5,-6,8
 */

void Rearrarange(struct Array *a)
{
    int i = 0, j = a->length-1;

    while (i <= j)  
    {
        // TODO: find index of +ve val from left
        while (a->A[i] < 0) i++;
        

        // TODO: find index of -ve value from right
        while (a->A[j] >= 0) j--;
        

        // TODO: swap a[i,j];
        if (i < j)
        {
            swap(a, i, j);
        }
        i++;
        j--;
    }
}

void Merge(struct Array a, struct Array b, struct Array *c)
{
    int i = 0, j = 0, k = 0;
    while(i < a.length && j < b.length)
    {
        if (a.A[i] < b.A[j])
        {
            c->A[k++] = a.A[i++];
        }
        else
        {
            c->A[k++] = b.A[j++];
        }
    }

    while (i < a.length)    
    {
        c->A[k++] = a.A[i++];
    }

    while (j < b.length)    
    {
        c->A[k++] = b.A[j++];
    }

    c->length = k;

}

void Union(struct Array a, struct Array b, struct Array *c)
{
    int i = 0, j = 0, k = 0;
    while(i < a.length && j < b.length)
    {
        
        // while both are same, take one and increment i and j both
        // then return
        if (a.A[i] == b.A[j])
        {
            c->A[k++] = a.A[i++];
            j++;
            continue;
        }

        
        if (a.A[i] < b.A[j])
        {
            c->A[k++] = a.A[i++];
        }
        else
        {
            c->A[k++] = b.A[j++];
        }
    }

    while (i < a.length)    
    {
        c->A[k++] = a.A[i++];
    }

    while (j < b.length)    
    {
        c->A[k++] = b.A[j++];
    }

    c->length = k;
    
}


void Intersection(struct Array a, struct Array b, struct Array *c)
{
    int i = 0, j = 0, k = 0;
    while(i < a.length && j < b.length)
    {
        
        // while both are same, take one and increment i and j both
        // then return
        if (a.A[i] == b.A[j])
        {
            c->A[k++] = a.A[i++];
            j++;
            continue;
        }

        
        if (a.A[i] < b.A[j])
        {
            i++;
            // c->A[k++] = a.A[i++];
        }
        else
        {
            j++;
            // c->A[k++] = b.A[j++];
        }
    }

    c->length = k;
    
}


void Difference(struct Array a, struct Array b, struct Array *c)
{
    int i = 0, j = 0, k = 0;
    while(i < a.length && j < b.length)
    {
        
        // while both are same, take one and increment i and j both
        // then return
        if (a.A[i] == b.A[j])
        {
            // c->A[k++] = a.A[i++];
            i++;
            j++;
            continue;
        }

        
        if (a.A[i] < b.A[j])
        {
            c->A[k++] = a.A[i++];
        }
        else
        {
            j++;
            // c->A[k++] = b.A[j++];
        }
    }

    while (i < a.length)    
    {
        c->A[k++] = a.A[i++];
    }
    
    c->length = k;
    
}



int main(int argc, char const *argv[])
{
    struct Array a = {{5,6,7,9,10}, 10, 5};
    struct Array b = {{1,2,3,5,7}, 10, 5};
    struct Array c = {{}, 10, 0};


    Difference(a, b, &c);

    Display(c);


    return 0;
}
