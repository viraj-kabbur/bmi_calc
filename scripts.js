const button = document.querySelector('button')

button.addEventListener('click', function(e) {
    e.preventDefault()

    const height = parseInt(document.querySelector('.height').value)
    const weight = parseInt(document.querySelector('.weight').value)
    const results = document.querySelector('.results')
    const results2 = document.querySelector('.results2')

    if(height<0 || isNaN(height))
        {
            results.innerHTML = 'Enter a valid value'
        }
    else if (weight<0 || isNaN(weight))
        {
            results.innerHTML = 'Enter a valid value'
        }
    else {
        const bmi = (weight/ ((height*height)/10000)).toFixed(2)
        
        if (bmi<=18.5) {
            results.innerHTML = `BMI is ${bmi}`
            results2.innerHTML = 'You are Underweight' 
        }
        else if(bmi>=18.6 && bmi<=24.9)
           {
                results.innerHTML = `BMI is ${bmi}`
                results2.innerHTML = 'You are Healthy' 
            }
            else if(bmi>=25 && bmi<=29.9)
                {
                     results.innerHTML = `BMI is ${bmi}`
                     results2.innerHTML = 'You are Overweight' 
                 }
                 else if(bmi>=30 && bmi<=39.9)
                    {
                         results.innerHTML = `BMI is ${bmi}`
                         results2.innerHTML = 'You are Obese' 
                     }
                     else {
                        results.innerHTML = `BMI is ${bmi}`
                         results2.innerHTML = 'You are Severely Obese'
                     }
    }
})
