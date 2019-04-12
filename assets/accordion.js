class Accordion {

  constructor(options) {
    this.options = options;
    this.build();
    
  }


  //function to create the accordion
  
  build() {

    // Creating Main Title

    const accordion = document.querySelector('#' + this.options.container);

    const title = document.createElement("div");
    title.innerHTML = '<div class="title-container"><h2>' + this.options.mainTitle + '</div></h2>';

    accordion.appendChild(title);

    // Iterating every panel

    this.options.panels.forEach(element => {

        
        // Panel Title

        let panelTitle = document.createElement("div");


        let title = document.createElement("h3");
        title.textContent = element.title;
        
        let subtitle = document.createElement("h4");
        subtitle.textContent = element.subtitle;

        let titles = document.createElement("div");

        titles.classList.add('titulos');
        titles.appendChild(title);
        console.log(subtitle);
        if(subtitle.textContent != '') {

            titles.appendChild(subtitle);
        }

        let i = document.createElement("i");
        i.classList.add('fas', 'fa-chevron-down')
        
        panelTitle.classList.add('accordion-header');
        
        panelTitle.appendChild(titles);
        panelTitle.appendChild(i);
        

        accordion.appendChild(panelTitle);
        
        // Panel Content

        let panel = document.createElement("div");
        panel.classList.add('accordion-content');
        panel.innerHTML += element.content;

        accordion.appendChild(panel);
    });

    this.slide(accordion);

  }

  // function to slide it when clicking 

  slide(accordion) {
     
    let accordions = accordion.getElementsByClassName("accordion-header");
    
    for (let i = 0; i < accordions.length; i++) {
   
      accordions[i].addEventListener("click", function() {
        this.classList.toggle("is-open");
        
        let content = this.nextElementSibling;
        if (content.style.maxHeight) {
          // accordion is currently open, so close it
          content.style.maxHeight = null;
          this.style.marginTop = 0 + "px";
          this.style.transition = "all 0.2s ease-in-out"
          content.style.marginBottom = 0 + "px";
          content.style.transition = "all 0.2s ease-in-out"
        } else {
          // accordion is currently closed, so open it
          content.style.maxHeight = content.scrollHeight + "px";
          this.style.marginTop = 30 + "px";
          this.style.transition = "all 0.2s ease-in-out"
          content.style.marginBottom = 30 + "px";
          content.style.transition = "all 0.2s ease-in-out"
        }
      }); 
    }
  }
}
