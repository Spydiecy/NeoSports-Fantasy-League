#include <iostream>
using namespace std;
#include<vector>
#include<unordered_map>
#include<algorithm>
#include<unordered_set>
class Base
{
    public:
    virtual void fun()=0;
    int getX(int a)
    {
        return a ;
    }
};
class Derived:public Base
{
    public:
    
    void fun() override{}
   
    void display(int a)
    {
        cout<<getX(a);
    }
};
int main()
{

    Derived d;
    d.getX(5);

}
