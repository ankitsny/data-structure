#include<iostream>

template<class T>
class Array
{
    private:
    T *A;
    int size;
    int length;

    public:
    Array()
    {
        this->size = 10;
        this->length = 0;
        this->A = new T[10];
    }
    Array(int size)
    {
        this->size = size;
        this->length = 0;
        this->A = new T[size];
    }
    ~Array()
    {
        delete []this->A;
    }

    void Append(T val);
    void Insert(int index, T val);
    T Delete(int index);
    T Get(int index);
    void Display();

};

template<class T>
T Array<T>::Get(int index)
{
    
    if (index >= 0 && index < this->length)
    {
        return this->A[index];
    }
    return -1;
}



template<class T>
void Array<T>::Append(T val)
{
    if (this->length < this->size)
    {
        this->A[this->length++] = val;
    }
}

template<class T>
void Array<T>::Insert(int index, T val)
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

template<class T>
T Array<T>::Delete(int index)
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

template<class T>
void Array<T>::Display() 
{
    std::cout<<"Numbers are\n";
    for (int i = 0; i < this->length; i++)
    {
        std::cout<<this->A[i] << "\t";
    }
    std::cout<<std::endl;
}

int main(int argc, char const *argv[])
{
    Array<int> *a = new Array<int>(5);
    Array<float> *f = new Array<float>(5);

    a->Append(1);
    a->Append(1);
    a->Append(1);
    a->Append(1);


    f->Append(1.01);
    f->Append(1.01);
    f->Append(1.01);
    f->Append(1.01);

    a->Display();
    f->Display();

    return 0;
}
