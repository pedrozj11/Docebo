class Accordion {

  constructor(options) {
    this.options = options;
    this.build();
    
  }

  build() {

    const accordion = document.querySelector('#' + this.options.container);

    const title = document.createElement("div");
    title.innerHTML = '<h2>' + this.options.mainTitle + '</h2>';

    accordion.appendChild(title);
    //create accordion
    this.options.panels.forEach(element => {

        let panelTitle = document.createElement("div");


        let title = document.createElement("h3");
        title.textContent = element.title;

        let subtitle = document.createElement("h4");
        subtitle.textContent = element.subtitle;

        let titles = document.createElement("div");

        titles.classList.add('titulos');
        titles.appendChild(title);
        titles.appendChild(subtitle);

        let i = document.createElement("i");
        i.classList.add('fas', 'fa-chevron-down')
        
        panelTitle.classList.add('accordion');
        
        panelTitle.appendChild(titles);
        panelTitle.appendChild(i);
        

        accordion.appendChild(panelTitle);
        

        let panel = document.createElement("div");
        panel.classList.add('accordion-content');
        panel.innerHTML += element.content;

        accordion.appendChild(panel);
    });

    this.slide(accordion);

  }

  slide(accordion) {
     
    let accordions = accordion.getElementsByClassName("accordion");
    for (let i = 0; i < accordions.length; i++) {
   
      accordions[i].addEventListener("click", function() {
        this.classList.toggle("is-open");
        
        let content = this.nextElementSibling;
        if (content.style.maxHeight) {
          // accordion is currently open, so close it
          content.style.maxHeight = null;
          content.style.marginTop = 0 + "px";
        } else {
          // accordion is currently closed, so open it
          content.style.maxHeight = content.scrollHeight + "px";
          content.style.marginTop = 30 + "px";
        }
      }); 
    }
  }
}
