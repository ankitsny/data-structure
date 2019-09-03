#include<iostream>

class Array
{
    private:
    int *A;
    int size;
    int length;

    public:
    Array()
    {
        this->size = 10;
        this->length = 0;
        this->A = new int[10];
    }
    Array(int size)
    {
        this->size = size;
        this->length = 0;
        this->A = new int[size];
    }
    ~Array()
    {
        delete []this->A;
    }

    void Append(int val);
    void Insert(int index, int val);
    int Delete(int index);
    int Get(int index);
    void Display();

};


int Array::Get(int index)
{
    
    if (index >= 0 && index < this->length)
    {
        return this->A[index];
    }
    return -1;
}




void Array::Append(int val)
{
    if (this->length < this->size)
    {
        this->A[this->length++] = val;
    }
}

void Array::Insert(int index, int val)
{
    if (index >= 0 && index <= this->length)
    {

        for (int i = this->length; i > index; i--)
        {
            this->A[i] = this->A[i-1];
        }
        this->A[index] = val;
        this->length++;
    }
}


int Array::Delete(int index)
{
    if (index >=0 && index < this->length)
    {
        int val = this->A[index];
        for (int i = index; i < this->length-1; i++)
        {
            this->A[i] = this->A[i+1];
        }
        this->length--;
        return val;
    }
    return 0;
}


void Array::Display() 
{
    printf("Numbers are\n");
    for (int i = 0; i < this->length; i++)
    {
        printf("%d\t", this->A[i]);
    }
    printf("\n");
}

int main(int argc, char const *argv[])
{
    Array *a = new Array(5);

    a->Append(1);
    a->Append(1);
    a->Append(1);
    a->Append(1);
    a->Display();

    return 0;
}
