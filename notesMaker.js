var popoverlay=document.querySelector(".popoverlay")
        var popup=document.querySelector(".popup")
        var plus=document.getElementById("plus")
        
        
        plus.addEventListener("click",function(){
            popoverlay.style.display="block"
            popup.style.display="block"
        })
        cancelpopup =document.getElementById("cancelpopup")
        cancelpopup.addEventListener("click",function(){
            event.preventDefault()
            popoverlay.style.display="none"
            popup.style.display="none"
        })

        function add(){
            var bname=document.getElementById("Bname").value
            var date=document.getElementById("date").value = new Date().toDateString()
            var description=document.getElementById("description").value
            

            var div=document.createElement("div")
            div.setAttribute("class","content")
            
            var h2=document.createElement("h2")
            h2.textContent=bname
            div.appendChild(h2)

            var h5=document.createElement("h5")
            h5.textContent=date
            div.appendChild(h5)

            var para=document.createElement("p")
            para.textContent=description
            div.appendChild(para)

            var btn = document.createElement("button");
            btn.innerHTML = "Delete";
            btn.addEventListener("click", function() {
                dele();
            });
            div.appendChild(btn)
            

            document.body.appendChild(div)
            popoverlay.style.display="none"
            popup.style.display="none"
        }
        function dele(){
            event.target.parentElement.remove()
        }
