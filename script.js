    let form = document.querySelector('form')
        let ageBox = document.querySelector('#age')
        let nameBox = document.querySelector('#name')
        let btn = document.querySelector('#btn')
        form.addEventListener('submit', (e) => {
            e.preventDefault()
            let age = ageBox.value
            let name = nameBox.value
            if (!age || !name) {
                alert('Please enter valid details')
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