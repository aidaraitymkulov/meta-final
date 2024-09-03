export const examples = () => {
    function isPalendrome(word){
        const revWord = word.split('').reverse().join('')
        console.log(revWord)
        if(revWord === word){
            console.log(true)
        } else{
            console.log(false) 
        }
    }
    isPalendrome('qwerty')
    isPalendrome('шалаш')

    function findMax(arr){
        let max = arr[0]
        let min = arr[0]
        for(let i = 0; i < arr.length; i++){
            if(max < arr[i]){
               max = arr[i]
            }
            if(arr[i] < min){
                min = arr[i]
            }
        }
        console.log(`min: ${min}, max: ${max}`)
    }
findMax([99, 34, 12, 1, 2, 3, 4, 5, 6,])
findMax([-1, -2, -3, -5])

// function isDuplicate(arr){
//     const duplicateArr = []
//     for(let i = 0; i < arr.length; i++){
//             console.log(arr[i])
//     }
// }

// isDuplicate([1, 2, 3, 4, 5])

}
