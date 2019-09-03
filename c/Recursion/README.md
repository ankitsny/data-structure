# Recursion

## Types of Recursion
1. Tail Recursion.
2. Head Recursion.
3. Tree Recursion.
4. Indirect Recursion.
5. Nested Recursion.

### Tail Recursion.
> function calling itself at last inside the function. At returning time the function should not perform any action.

```c
// Tail Recursion.
void fun (int n) 
{
    if (n > 0)
    {
        printf("%d", n);
        fun(n - 1);
    }
}
````

### Head Recursion.
> First statement should be the recursive call. At the calling time it should not perform any action. 

```c
// Head Recursion 
void fun (int n)
{
    if (n > 0)
    {
        fun(n - 1);
    }
    printf("%d", n);
}
```

### Tree Recursion.
> A recursive function which calls itself more than 1, then it's a Tree Recursion.

```c
void fun(int n)
{
    if (n > 0)
    {
        fun(n - 1);
        printf("%d", n);
        fun(n - 2);
    }
}
/**
 * since the function is getting called twice, 
 * so the no of call will be `(2^(n + 1)) - 1`
 * if we had called thrice, then `(3^(n + 1)) - 1`
 * where n = input number
 * /
```

### Indirect Recursion.
> If two or more function calling each other then it is a indirect recursion.

```c
void A(int a) 
{
    if (a > 0)
    {
        printf("%d", a);
        B(a);
    }
}

void B(int a)
{
    if (a > 0)
    {
        printf("%d", a);
        A(a - 1);
    }
}
```


### Nested Recursion.
> Nested recursive function will call itself and pass the recursive function call in parameters.

```c
int func(int i)
{
    if (i > 0)
    {
        return func(func(i - 1)); 
    }
}
```