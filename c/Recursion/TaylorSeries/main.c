#include<stdio.h>



int Pow(int m, int n) 
{
    if (n == 0) return 1;

    return Pow(m, n - 1) * m;
}


int fact(int n)
{
    if (n == 0) return 1;
    return fact(n - 1) * n;
}


double taylor(int x, int n)
{
    static double p = 1, f = 1;

    double r;

    if (n == 0) return 1;

    r = taylor(x, n - 1);

    p = p * x;
    f = f * n;

    return r + (p/f);



    // if (n > 0){
    //     return (Pow(x, n - 1)/fact(n - 1)) + (Pow(x, n)/fact(n));
    // }
    // return 1;
}


// Taylor series by Horners rule
double e (int x, int n)
{
    static double s = 1;
    if (n == 0) return s;

    s = 1 + x*s/n; 
    return e(x, n - 1);

}


int main(int argc, char const *argv[])
{
    int x = 1;
    int n = 10;
    printf("%lf\n", e(x, n));
    return 0;
}
