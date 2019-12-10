import numpy as np
import os

# get the path of local file
path = os.path.abspath(os.path.dirname(__file__))
filepath = path + '/dot.htm'

A = np.array([[1, 2, 3, 4], [5, 6, 7, 8], [9, 10, 11, 12]])
B = np.array([[1, 2, 3], [4, 5, 6], [7, 8, 9], [10, 11, 12]])

C = np.dot(A, B)

html = '<!DOCTYPE html>\n \
    <html>\n \
    <body>\n \
    <h1>This is a heading </h>\n \
    <p title="I\'ve no idea what it is"> just have a try </p>\n \
    </body>\n \
    </html>'

file = open(filepath, 'w')
file.write(html)
file.close
