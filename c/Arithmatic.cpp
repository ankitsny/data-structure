#include <iostream>

class Arithmatic {
    private:
        int a, b;
    
    public:
        int add();
        int sub();
        Arithmatic(int, int);
};

Arithmatic::Arithmatic(int a, int b) 
{
    this -> a = a;
    this -> b = b; 
}

int Arithmatic::add() 
{
    return this -> a + this -> b;
}

int Arithmatic::sub()
{
    return Arithmatic::a - Arithmatic::b;
}


int main()
{
    Arithmatic a(6, 3);
    
    Arithmatic *b = new Arithmatic(2, 1);

    std::cout << a.add() << "\n" << a.sub() << "\n";
    std::cout << b->add() << "\n" << b->sub();

}