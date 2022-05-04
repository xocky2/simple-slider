let currentImageIndex = 0;
        let imagens = document.querySelectorAll(".slide");

        function proximo(){
            console.log("ATUAL:",currentImageIndex);
            imagens[currentImageIndex].classList.remove('ativa');  
            if (currentImageIndex < 2){       
                currentImageIndex ++;
            }else{
                currentImageIndex = 0;
            }
            imagens[currentImageIndex].classList.add('ativa');
        }

        function anterior(){
            imagens[currentImageIndex].classList.remove('ativa');  
            if (currentImageIndex == 0){
                currentImageIndex = 2;
            }else{
                currentImageIndex --;
            }
            imagens[currentImageIndex].classList.add('ativa');
        }

        function btn(clicked_id){
            let id = clicked_id;

            imagens[0].classList.remove('ativa');
            imagens[1].classList.remove('ativa');
            imagens[2].classList.remove('ativa');
            console.log(clicked_id);
            imagens[clicked_id].classList.add('ativa');
            currentImageIndex = clicked_id;

        }