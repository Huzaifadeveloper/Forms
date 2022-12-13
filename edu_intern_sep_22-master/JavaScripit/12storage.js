//There are 3 types of storage
localStorage
>persistant Storage
>it save with respect to browser
>we have to remove it manually


localStorage.setItem('username', 'huzaifauser')
undefined
localStorage.setItem('usertoken', '6432683rywehf')
undefined
localStorage.getItem('username')
'huzaifauser'
localStorage.getItem('username','usertoken')
'huzaifauser'
localStorage.getItem('usertoken')
'6432683rywehf'
localStorage.getItem('usertoken1')
null
localStorage.removeItem('usertoken')
undefined
localStorage.removeItem('username')
undefined

sessionStorage
>persistant Storage
>it save with respect to website
it will remove automatically


