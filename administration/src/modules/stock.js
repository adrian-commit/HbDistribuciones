module.exports = {
    
    unassigned:(ob)=>{
        let num = ob.total
        if (ob.quantities && ob.quantities.length > 0) {
            let items = ob.quantities.map(q=>q.stock)
            items.forEach(q => {
                num = num - q
            });
        }
        return num
    }

}