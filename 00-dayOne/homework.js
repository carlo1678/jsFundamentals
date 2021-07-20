let body = document.getElementById("wrapper");

const onMouseMove = (e) => {
  body.style.left = e.pageX + "10px";
  body.style.top = e.pageY + "10px";
};

document.addEventListener("mousemove", onMouseMove);
