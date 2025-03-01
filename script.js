<!DOCTYPE html>
<html lang="en">

<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Document</title>
</head>

<body>
    <form>
        <input type='number' id='age' placeholder='Enter age'>
        <input type='text' id='name' placeholder='Enter name'>
        <button type='submit' id='btn'>Submit</button>
    </form>
    <script>
        //your JS code here. If required.
        let form = document.querySelector('form')
        let ageBox = document.querySelector('#age')
        let nameBox = document.querySelector('#name')
        let btn = document.querySelector('#btn')
        form.addEventListener('submit', (e) => {
            e.preventDefault()
            let age = ageBox.value
            let name = nameBox.value
            if (!age || !name) {
                alert('Please enter valid details.')
                return
            }
            new Promise((resolve, reject)=>{
                if(age>18){
                    setTimeout(() => {
                        resolve('Welcome, '+name +'.'+ ' You can vote.') 
                    }, 4000)
                }
                else{
                    setTimeout(() => {
                        reject('Oh sorry '+name +'.'+ " You aren't old enough.")
                    }, 4000)
                }
            })
            .then(data =>{
                alert(data)
            })
            .catch(err =>{
                alert(err)
            })
        })
    </script>
</body>

</html>