
    $(document).ready(function(){
        $(".opennav").click(function(){
        const navbar=document.querySelector(".navbar");
        navbar.style.display="block";
        $(".navbar").removeClass("clousenavclc");
        });
        
        $(".clousenav").click(function(){
            $(".navbar").addClass("clousenavclc");
            });
      });
