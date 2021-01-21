  
const path = document.querySelectorAll(".dots_item");

function SetNewPlace() {
   path.forEach(p => {
      const title = document.querySelector(`.dots_title[data-for='${ p.dataset.for }']`);
      if (title.dataset.for === p.dataset.for) {
         let CurrentPlace = p.getBoundingClientRect();
         var CurrentTitlePlace = title.getBoundingClientRect();
           var bodyRect = document.body.getBoundingClientRect();
         title.style.left = CurrentPlace.left - bodyRect.left   + "px";
         title.style.top = CurrentPlace.top - bodyRect.top - CurrentTitlePlace.height - 10 + "px";
         console.log(CurrentPlace);
      }
      p.addEventListener("mouseover", () => {
         title.classList.toggle("dots_active")
      });
      
      p.addEventListener("click", () => {
         title.classList.toggle("dots_active")
      });
   });
}
SetNewPlace()
