export const handleDragStart = (e, data) => {
  e.dataTransfer.setData("text/plain", JSON.stringify(data));
};

export const handleDrag = (e) => {
  e.preventDefault();
};

export const handleDragEnd = (e) => {
  e.preventDefault();
};
