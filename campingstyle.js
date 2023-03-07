function Slider(target) {
    let index = 0;
    const speed = 1000;
    const transform = "translateX(-" + 100 * index + "%)";
    
    const slider = document.querySelector(target);
    const container = document.createElement("div");
    const boxes = [].slice.call(slider.children);
  
    container.style["display"] = "flex";
    container.style["overflow"] = "hidden";
    container.style["transition"] = "transform " + speed / 1000 + "s";
    container.style["transform"] = transform;
  
    boxes.forEach(function(box) {
      box.style["flex"] = "none";
      box.style["width"] = "100%";
      container.appendChild(box.cloneNode(true));
    });
  
    slider.innerHTML = "";
    slider.appendChild(container);
  
    return {
      move: function(i) {
        index = i;
        container.style["transform"] = "translateX(-" + 100 * index + "%)";
      },
      next: function() {
        index++;
        if (index >= boxes.length) {
          index = 0;
        }
        container.style["transform"] = "translateX(-" + 100 * index + "%)";
      },
      prev: function() {
        index--;
        if (index < 0) {
          index = boxes.length - 1;
        }
        container.style["transform"] = "translateX(-" + 100 * index + "%)";
      }
    };
  }
  
  const s1 = new Slider("#slider1");
  
  setInterval(() => {
    s1.next();
  }, 1000);
  