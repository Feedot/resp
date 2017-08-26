class Change{
    constructor(){
    }
    createColumn(count,row,i){
        let col = document.createElement('div');
        col.className = 'col col-xx-'+count;
        col.innerHTML = i+1;
        row.appendChild(col);
    }
    innerRow(){
        let count = document.querySelector('select').value,
            self = this;
        Array.from(document.getElementsByClassName('row')).map((row)=>{
            row.innerHTML = '';
            for (let i = 0; i<count;i++){
                self.createColumn(count,row,i)
            }
        })
    }
}
window.onload = function () {
    (function(){
        let changeQuantity = new Change();
        changeQuantity.innerRow()
        document.querySelector('select').onchange = ()=>{
            changeQuantity.innerRow()
        }
    }())
}