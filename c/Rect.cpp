#include <iostream>

class Rect
{
    private:
        int length;
        int breadth;
    
    public:
        Rect(int, int);
        ~Rect();

        int Area();
        std::string update();

};

Rect::Rect(int length, int breadth)
{
    // this -> length = length;
    // this -> breadth = breadth;
    Rect::breadth = breadth;
    Rect::length = length;
}

Rect::~Rect()
{
    std::cout << "Destroyed";
}

int Rect::Area() {
    return Rect::length * Rect::breadth;
}

std::string Rect::update() {
    return "Hello World";
}

int main()
{
    Rect r = Rect(2, 3);

    Rect *pp = new Rect(3, 4);

    std::cout<<r.Area()<<"    "<<r.update() << "\n"; 
    
    std::cout<<pp->Area()<<"    "<<(*pp).update() << "\n"; 

}