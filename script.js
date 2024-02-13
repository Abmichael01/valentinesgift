const supriseCont = document.querySelector(".suprise-cont")
const welcome = document.querySelector(".welcome")
const box = document.querySelector(".box-cont")

const b = document.querySelector(".box")
const c = document.querySelector(".box-cover")

const stop = document.querySelector(".stop")




function updateCountdown() {
    
    const now = new Date();
    
    
    const nextTomorrow = new Date(now);
    nextTomorrow.setDate(now.getDate() + 1);
    nextTomorrow.setHours(0, 0, 0, 0); 
    
    
    const difference = nextTomorrow - now;
    
    
    if(difference <= 0){
        box.addEventListener("click", ()=>{

            box.classList.add("big")
            
            const audio = document.getElementById("myAudio");
            audio.pause()
            audio.play();

            stop.style.display = "inline-block"
            stop.addEventListener("click", ()=>{
                stopAudio(audio)
            })

            setTimeout(()=>{
                supriseCont.style.display = "flex"
                welcome.style.display = "none"
            }, 300)
        })
    }else{
        const hours = Math.floor(difference / (1000 * 60 * 60));
        const minutes = Math.floor((difference % (1000 * 60 * 60)) / (1000 * 60));
        const seconds = Math.floor((difference % (1000 * 60)) / 1000);
        
        
        const countdownElement = document.querySelector(".countdown");
        countdownElement.innerHTML = `${hours}:${minutes}:${seconds}`;

        box.addEventListener("click", ()=>{
            const audio = document.getElementById("myAudio");
            audio.play();
            
            stop.style.display = "inline-block"

            stop.addEventListener("click", ()=>{
                stopAudio(audio)
            })

            const msg = document.querySelector(".msg");
            msg.classList.add("error")

            if(msg.classList.contains("error")){
                setTimeout(()=>{
                    msg.classList.remove("error")
                }, 5000)
            }

        })

        
    }
  }
  
 
  updateCountdown();
  

  setInterval(updateCountdown, 1000);

  function stopAudio(audio){
    audio.pause()
  }
  