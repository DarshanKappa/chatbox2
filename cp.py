# def fun(n):
#     condition = True
#     i = 1
#     count = 0
#     while(condition):


#         v = 5*i
#         while(v%5==0):
#             count += 1
# #             if count >= n:
# #                 break
# #             v = v/5
# #         if count >= n:
# #             break
# #         i +=1
# #     return i*5


# # print(fun(96))


# def fun(arr, n):
#     count = 0
#     l = n
#     while(l>1):
#         _c = count
#         for i in range(l-1):
#             if arr[i] > arr[i+1]:
#                 count += 1
#                 t = arr[i]
#                 arr[i] = arr[i+1]
#                 arr[i+1] = t
#         if _c==count:
#             return count
#         l -= 1
#     return count


# arr = [5, 5, 5, 5, 5]
# print(fun(arr, len(arr)))


# class Node:
#     """ Class Node """
#     def __init__(self, value):
#         self.left = None
#         self.data = value
#         self.right = None


# def ddl(root):
#     m_head = root
#     m_tail = root
#     if root.left != None:
#         head, tail = ddl(root.left)
#         tail.right = root
#         root.left = tail
#         m_head = head

#     if root.right != None:
#         head, tail = ddl(root.right)
#         root.right = head
#         head.left = root
#         m_tail = tail

#     return m_head, m_tail

# def result(root):
#     head, tail = ddl(root)
#     return head, tail


# node25 = Node(None)
# node30 = Node(72)
# node36 = Node(79)

# node12 = Node(69)
# node12.left = node25
# node12.right = node30
# node15 = Node(80)
# node15.left = node36

# node10 = Node(78)
# node10.left = node12
# node10.right = node15

# r, t = result(node10)
# while(r):
#     print(r.left, r.data, r.right)
#     print('-------------------------')
#     r = r.right


# def result(root, k, no, s, c):
#         _s = root.data if root.data else s
#         _no = no
#         _c = c
#         data = root.data

#         if root.left:
#             n, data = result(root.left, k, _no, _s, c)
#             _s = data if data else _s
#             _no = n
#             if _no == k:
#                 return _no, data
#         if root.data:
#             _no += 1
#         data = root.data if root.data else _s
#         if _no == k:
#             return _no, data

#         if root.right:
#             n, data = result(root.right, k, _no, _s, c)
#             _s = data if data else _s
#             _no = n
#             if _no == k:
#                 return _no, data

#         return _no, data

# def kthLargest( root, k):
#         #your code here
#         n, data = result(root, k, 0, None, 0)
#         if n!=k:
#             return -1
#         return data


# print(kthLargest(node10, 2))


# def fun(arr, n, k):
#     nums = 0
#     start = 0
#     end = 0
#     distance = 0
#     mini_swap = n
#     temp = 0
#     for i in range(n):
#         if arr[i]<= k:
#             nums += 1
#         else:
#             arr[i] = 0
#     if nums == 0:
#         return 0
#     while(end<n):
#         print('--------------------------')
#         print(arr[end], temp, mini_swap)
#         if distance<nums:
#             distance += 1

#         if not arr[end]:
#             temp += 1

#         if distance==nums:
#             if mini_swap>temp:
#                 mini_swap = temp
#             if not arr[start]:
#                 temp -= 1
#             start += 1
#         end += 1


#     return mini_swap

# a = [1,2]
# print(fun(a, len(a), 7))


# def findMid(arr, start, end):
#     mid = (start, end)/2
#     return int(mid)


# def fun(A, N, M):


#     return N


# a = [12, 34, 67, 90]
# print(fun(a, len(a), 2))


def mergeSort(m, n):
    arr = []
    # value = 0
    l1 = len(m)
    l2 = len(n)
    s1 = 0
    s2 = 0
    while s1 < l1 or s2 < l2:
        # print('----------------')
        # print(m, n, arr)
        if not s2 < l2:
            # value += (len(m)-1)
            arr.append(m[s1])
            s1 += 1
        elif not s1 < l1:
            arr.append(n[s2])
            s2 += 1
        else:
            if m[s1] > n[s2]:
                arr.append(n[s2])
                s2 += 1
                # n = n[1:]

            else:
                arr.append(m[s1])
                s1 += 1
                # m = m[1:]
    return arr

    return


def sortFunc(arr, n):

    if n > 1:
        mid = int(n / 2)
        m = sortFunc(arr[:mid], len(arr[:mid]))
        n = sortFunc(arr[mid:], len(arr[mid:]))
        a = mergeSort(m, n)
    else:
        return arr
    return a


def fun(arr, n):
    a = arr
    a = sorted(a)
    print(arr)
    print(a)
    temp = []
    value = 0
    for i in range(n):
        if arr[i] != a[i]:
            if not arr[i] in temp:
                temp.append(a[i])
                value += 1
    return value


# a = [8, 4, 1, 2, 3, 9, 5, 6, 7]
s = "13 1 5 3 6 11 10"
# a = [5, 2,3,4,1]
a = s.split(" ")
# a = map(lambda x : int(x))
print(fun(a, len(a)))

# print(mergeSort([2,3,4,5], [1]))
