let option = 'Photo';
let color = 'Arena';
let size = '13x18';

const onChangeOptions = (op) => {
  option = op;
  renderCanvas();
};

const onChangeColor = (op) => {
  color = op;
  renderCanvas();
};

const onChangeSize = (op) => {
  size = op;
  renderCanvas();
};

const renderCanvas = () => {
  const canvas = document.querySelector('#canvas');
  const imageCanvas = document.querySelector('#imageCanvasCnt');
  canvas.className = '';
  imageCanvas.className = '';
  console.log(option);
  imageCanvas.classList.add(option.replaceAll(' ', ''));
  imageCanvas.classList.add(color.replaceAll(' ', ''));
  canvas.classList.add(`s${size.replaceAll(' ', '')}`);
};
