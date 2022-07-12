let foo = new Promise(resolve => {
	setTimeout(resolve, 100, '100')
})
console.log(foo)
