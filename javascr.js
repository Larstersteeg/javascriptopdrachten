function setColor(color) {
    document.getElementById('field1').style.backgroundColor = color;
    document.getElementById('field2').style.backgroundColor = color;
    document.getElementById('field3').style.backgroundColor = color; 
  }
  function setHeight(height) {
    document.getElementById('field1').style.height = height + "px";
    document.getElementById('field2').style.height = height + "px";
    document.getElementById('field3').style.height = height + "px";
  }
  function setWidth(wide) {
    document.getElementById('field1').style.width = wide + "px";
    document.getElementById('field2').style.width = wide + "px";
    document.getElementById('field3').style.width = wide + "px";
  }

  function changeField() {
    var wide = document.getElementById('wide').value;
    var height = document.getElementById('height').value;
    var color = document.getElementById('color').value;

    setColor(color);
    setWidth(wide);
    setHeight(height);
  }