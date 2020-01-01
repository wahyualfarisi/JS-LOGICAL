function countOnes(matrix){
    
    let result = 0;
     matrix.forEach(itemArray => {
        const filterOnlyOne = itemArray.filter(item => item === 1 )

        const sum = filterOnlyOne.reduce((a, b) => a + b , 0)

        result += sum
        
    });

    return result
}

countOnes([
	[1, 0, 1],
	[0, 0, 0],
	[0, 0, 1]
])


