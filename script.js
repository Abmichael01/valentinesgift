const supriseCont = document.querySelector(".suprise-cont")
const welcome = document.querySelector(".welcome")
const box = document.querySelector(".box-cont")








function updateCountdown() {
    // Get the current time
    const now = new Date();
    
    // Calculate the time until next tomorrow
    const nextTomorrow = new Date(now);
    nextTomorrow.setDate(now.getDate() + 1);
    nextTomorrow.setHours(0, 0, 0, 0); // Set time to 00:00:00
    
    // Calculate the difference in milliseconds
    const difference = nextTomorrow - now;
    
    
    // Calculate the remaining hours, minutes, and seconds
    if(difference <= 0){
        box.addEventListener("click", ()=>{
            const audio = document.getElementById("myAudio");
            audio.play();
            supriseCont.style.display = "flex"
            welcome.style.display = "none"
        })
    }else{
        const hours = Math.floor(difference / (1000 * 60 * 60));
        const minutes = Math.floor((difference % (1000 * 60 * 60)) / (1000 * 60));
        const seconds = Math.floor((difference % (1000 * 60)) / 1000);
        
        // Display the countdown
        const countdownElement = document.querySelector(".countdown");
        countdownElement.innerHTML = `${hours}:${minutes}:${seconds}`;

        box.addEventListener("click", ()=>{
            const audio = document.getElementById("myAudio");
            audio.play();
            
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
  
  // Initial call to update the countdown
  updateCountdown();
  
  // Update the countdown every second
  setInterval(updateCountdown, 1000);
  