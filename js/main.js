const mangViecLam = [];
const completeTodos =[...mangViecLam];

let themvieclam = () => {
    let vieclam = document.getElementById('newTask').value;
    mangViecLam.push(vieclam);
    rendervieclam();
    console.log(vieclam);
    // getLocalStorage();
    setLocalStorage();
};window.themvieclam = themvieclam;

document.getElementById('addItem').onclick = themvieclam;

let rendervieclam = () => {
    let contentHTML = "";
    mangViecLam.map((item, index) => {
        
        contentHTML += `
        <ul>
                <li>
                <span>${item}</span>
                <button   class="btn btn-danger clear" onclick="xoavieclam('${item}')"><i class="fa-solid fa-trash"></i></button>
                <button  class="btn btn-success" id="complete" onclick="vieclambutton('${item}')"><i class="fa-solid fa-circle-check"></i></button>
                </li>
         </ul>
        `
    });
  
    document.getElementById('todo').innerHTML = contentHTML;
   
};

rendervieclam();


let vieclambutton = (item) => {
    console.log(completeTodos)
    if (item) {
        completeTodos.push(item);
    } ;
    let complete = "";
    completeTodos.map((item) => { 
            complete +=`
                        <ul>
                            <li>
                                    <span>${item}</span>
                            </li>
                        </ul>
                        `    
     });
    document.getElementById('completed').innerHTML =  complete;
};


let  timViTri = () => { 
    var viTri = -1;
    mangViecLam.map((item,index) => { 
        if(item){
            //nếu tìm thấy
            viTri = index;
        }
     }); 
      return viTri;
    };

let xoavieclam = (item) => {
 
        //chưa tìm thấy sinh viên thì giá trị của viTri là -1
   
        let viTriXoa = timViTri(item) 
        if(viTriXoa > -1){
            //tìm thấy
            mangViecLam.splice(viTriXoa,1);
            rendervieclam(item);
        }
      
}

let buttonSapXepAZ = () => {
    mangViecLam.sort();
    rendervieclam();
    vieclambutton();
};document.getElementById('two').onclick = buttonSapXepAZ;

let buttongiamdan = () => {
    mangViecLam.reverse();
    rendervieclam();
    vieclambutton(completeTodos.item);
};document.getElementById('three').onclick = buttongiamdan;





