#https://www.geeksforgeeks.org/reduce-in-python/


#filter python object with list comprehensions 
aggressive = [x for x in data if x['risk_level'] == 'aggressive']

def lcs(x, y):
    xSub = x[0:len(x)-1]
    ySub = y[0:len(y)-1]

    if len(x) == 0 or len(y) == 0:
        return ''
    elif x[len(x)-1] == y[len(y)-1]:
        return lcs(xSub, ySub) + x[len(x)-1]
    else:
        x = lcs(x, ySub)
        y = lcs(xSub, y)

        return x if len(x) > len(y) else y



a = 'AGGTAB';
b = 'GXTXAYB';

print(lcs(a,b))