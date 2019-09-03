#include <iostream>


template <class T>
class Arithmatic {
    private:
        T a, b;
    
    public:
        T add();
        T sub();
        Arithmatic(T, T);
};


template <class T>
Arithmatic<T>::Arithmatic(T a, T b) 
{
    this -> a = a;
    this -> b = b; 
}

template <class T>
T Arithmatic<T>::add() 
{
    return this -> a + this -> b;
}

template <class T>
T Arithmatic<T>::sub()
{
    return Arithmatic::a - Arithmatic::b;
}


int main()
{
    Arithmatic<int> a(6, 3);
    
    Arithmatic<float> *b = new Arithmatic<float>(2.6, 7.9);

    // std::cout << a.add() << "\n" << a.sub() << "\n";
    std::cout << b->add() << "\n" << b->sub();

}