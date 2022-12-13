var city="MumBai"
undefined
city.toUpperCase()
'MUMBAI'
city.toLowerCase()
'mumbai'
city.length
6
city.indexOf[1]
undefined
city.charAt(2)
'm'
city.[0]
VM330:1 Uncaught SyntaxError: Unexpected token '['
city[0]
'M'
city[3]
'B'
city.at(-2)
'a'
city.trimEnd(6)
'MumBai'



var city="MumBai"
undefined
city.toUpperCase()
'MUMBAI'
city.toLowerCase()
'mumbai'
city.length
6
city.indexOf[1]
undefined
city.charAt(2)
'm'
city.[0]
VM330:1 Uncaught SyntaxError: Unexpected token '['
city[0]
'M'
city[3]
'B'
city.at(-2)
'a'
city.trimEnd(6)
'MumBai'


var city1 = "Mumbai"
undefined
var city2 = "mumbai" 
undefined
city1==city2
false
city1.toLocaleLowerCase()==city2.toUpperCase()
false
city1.toLowerCase()==city2.toUpperCase()
false
city1.toUpperCase() == city2.toLowerCase()
false
city1.toLowerCase() == city2.toLowerCase()
true


var learner = "I am learning JavaScript"
undefined
learner.replace('JavaScript', 'JS')
'I am learning JS'
learner.replace('JavaScript', 'Java')
'I am learning Java'
var course = "Huzaifa is learning JavaScript"
undefined
course.replaceAll('Huzaifa', 'Fouzan')
'Fouzan is learning JavaScript'
var newcourse = "JavaScript learning JavaScript"
undefined
course.replaceAll('JavaScript' 'JavaScript')
VM903:1 Uncaught SyntaxError: missing ) after argument list
course.replaceAll('JavaScript' 'Js')
VM934:1 Uncaught SyntaxError: missing ) after argument list
course.replaceAll('JavaScript' 'JS')
VM948:1 Uncaught SyntaxError: missing ) after argument list
course.newcourse('JavaScript' 'JS')
VM1034:1 Uncaught SyntaxError: missing ) after argument list
newcourse.replaceAll('JavaScript', 'JS')
'JS learning JS'
var uname = " Huzaifa "
undefined
uname.trim()
'Huzaifa'
var name = " Huzaifa . "
undefined
name.trim()
'Huzaifa .'