def lcs(a,b):
	aSub = a[0:len(a)-1]
	bSub = b[0:len(b) -1]

	if len(a) == 0 or len(b) == 0:
		return ''
	elif a[len(a)-1] == b[len(b)-1]:
		return lcs(aSub, bSub) + a[len(a)-1]
	else:
		x = lcs(a, bSub)
		y = lcs(aSub, b)

		return x if len(x) > len(y) else y



a = 'AGGTAB';
b = 'GXTXAYB';

print(lcs(a,b))