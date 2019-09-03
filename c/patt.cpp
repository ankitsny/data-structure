#include <iostream>
using namespace std;


// 16 11 6 1 -4 1 6 11 16

void rec(int n) 
{

    

    if (!(n > 0)) 
    {
        cout << n << " ";
        return;
    } 
    cout << n << " ";
    n -= 5;

    rec(n);
    n += 5;
    cout << n << " ";
}



int reverse(int n)
{
    // cout << n << endl; 
    if (n <= 0) {
        return 0;
    }
    
    return ((n % 10) * 10) + reverse(n/10); 
}


int main() {
	//code
	
	int T = 221;
    cout << reverse(T);
	return 0;
}



#include <iostream>
using namespace std;


long int reverse(long int n, long int rev = 0)
{
    if (n <= 0) {
        // cout << acc;
        return rev;
    }
    rev = (rev*10) + (n % 10);
    reverse(n/10, rev); 
}

long int reverse2(long int n)
{
    if (n < 0) {
        // cout << acc;
        return 0;
    }
    
    return (n % 10) + 10 * (reverse(n/10)); 
}


int main() {
	//code
	int T;
	cin >> T;
	while(T--)
	{
	    long int n;
	    cin >> n;
	    cout << reverse2(n);
	    cout << "\n";
	}
}