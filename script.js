const arr = document.getElementsByClassName('q');
for(var i = 0; i < arr.length; i++) {
    arr[i].addEventListener('click', function() {
        var arr2 = document.querySelectorAll('p');
        const ans = document.getElementById('p'+this.id);
        const isHidden = ans.classList.contains('hide');
        const img = document.getElementsByClassName('minus');
        const img2 = document.getElementsByClassName('plus');
        for(var j=0; j<arr2.length;j++){
            img[j].style.display='none';
            img2[j].style.display='block'; 
            if(arr2[j]!=ans){
                arr2[j].classList.add('hide');
            }
        }
        if(!isHidden){
            ans.classList.add('hide');
            document.getElementById('m'+this.id).style.display='none';
            document.getElementById('pl'+this.id).style.display='block';
        }
        else{
            ans.classList.remove('hide');
            document.getElementById('pl'+this.id).style.display='none';
            document.getElementById('m'+this.id).style.display='block';
            document.getElementById('m'+this.id).style.marginLeft='auto';
        }
    });
}
