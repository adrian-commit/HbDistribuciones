module.exports = {
    comission:(orders, number)=>{
        let total = 0
        const desc = Number(number)
        orders.forEach(order => {
            let num = (order.total * number)/100
            total = total + num 
        });
        return total
    }
}