const futImgBox = document.getElementById("fulImgBox"),
futImg = document.getElementById("fulImg");


function openFulImg(reference){
    fulImgBox.style.display = "flex";
    fulImg.src = reference
}

function closeImg(){
    fulImgBox.style.display = "none";
}

