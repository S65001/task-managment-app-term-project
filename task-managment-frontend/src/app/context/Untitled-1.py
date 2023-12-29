def find_gcd(e, phi):
    while True:
        temp = phi % e
        if temp == 0:
            return e
        phi = e
        e = temp


def multiplicative_inverse(m, n):
    m = m
    n = n

    n_spare = n
    m_spare = m
    list_q = []
    list_y = [0, 1]
    if n > m:
        rem = 1
        list_r = [n, m]
        while rem != 0:
            div = n // m
            rem = n % m
            if rem == 0:
                list_r.append(rem)
            else:
                list_q.append(div)
                list_r.append(rem)

            n = m
            m = rem

        for i in range(len(list_q)):
            y_new = list_y[i] - (list_y[i + 1] * list_q[i])
            list_y.append(y_new)

        if list_y[-1] < 0:
            result = list_y[-1] % n_spare
        else:
            result = list_y[-1]
        return result
    if m > n:
        temp = m % n
        m = m_spare = temp
        rem = 1
        list_r = [n, m]
        while rem != 0:
            div = n // m
            rem = n % m
            if rem == 0:
                list_r.append(rem)
            else:
                list_q.append(div)
                list_r.append(rem)

            n = m
            m = rem

        for i in range(len(list_q)):
            y_new = list_y[i] - (list_y[i + 1] * list_q[i])
            list_y.append(y_new)

        if list_y[-1] < 0:
            result = list_y[-1] % n_spare
        else:
            result = list_y[-1]

        return result


# Modular exponentiation
def Modular_exponentiation(num, pow, mod):
    list = []
    number = num
    pow = pow
    mod = mod

    pow_bin = pow
    while pow_bin > 0:
        x = pow_bin % 2
        list.append(x)
        pow_bin = pow_bin // 2

    reversed_list = []
    for value in list:
        reversed_list.insert(0, value)

    f = 1
    for i in reversed_list:
        if i == 1:
            temp = (f * f) % mod
            f = (temp * number) % mod
        elif i == 0:
            f = (f * f) % mod

    return f


p = 3
q = 7
m = 12

n = p * q
phi = (p - 1) * (q - 1)


# calculate e
# e is a number that is coprime with phi(n)
# GCD between e & phi(n) = 1

e = 2
while e < phi:
    if find_gcd(e, phi) == 1:
        break
    e += 1


d = multiplicative_inverse(e, phi)
print(f"value of e is: {e}")
print(f"value of d is: {d}")

c = Modular_exponentiation(m, e, n)
print(f"the cipher txt is: {c}")

m = Modular_exponentiation(c, d, n)
print(f"the original message is: {m}")
