class Change{
    constructor(selector){
        this.elem = document.querySelector(selector);
        this.elem.onchange = () => this.innerRow();
        this.innerRow();
    }
    createColumn(count,row,i){
        let col = document.createElement('div');
        col.className = 'col col-xx-'+count;
        col.innerHTML = i+1;
        row.appendChild(col);
    }
    innerRow(){
        let count = this.elem.value;
        Array.from(document.getElementsByClassName('row')).map((row)=>{
            row.innerHTML = '';
            for (let i = 0; i<count;i++){
                this.createColumn(count,row,i)
            }
        })
    }
}
window.onload = ()=> {const changeQuantity = new Change('select')};