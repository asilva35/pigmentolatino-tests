const frame_options = [
  {
    selection: 'Photo',
    img_choose:
      'https://cdn.shopify.com/s/files/1/0686/9106/7109/files/btn-no-frame-v2.png?v=1710786795',
  },
  {
    selection: 'Frame',
    img_choose:
      'https://cdn.shopify.com/s/files/1/0686/9106/7109/files/btn-with-frame.png?v=1710787013',
  },
  {
    selection: 'MariaLuisa',
    img_choose:
      'https://cdn.shopify.com/s/files/1/0686/9106/7109/files/btn-with-maria-luisa.png?v=1710787013',
  },
  {
    selection: 'Canvas',
    img_choose:
      'https://cdn.shopify.com/s/files/1/0686/9106/7109/files/btn-canvas-only.png?v=1710787013',
  },
  {
    selection: 'CanvasTensado',
    img_choose:
      'https://cdn.shopify.com/s/files/1/0686/9106/7109/files/btn-canvas-tensado.png?v=1710787013',
  },
  {
    selection: 'CanvasTensadoFrame',
    img_choose:
      'https://cdn.shopify.com/s/files/1/0686/9106/7109/files/btn-canvas-tensado-frame.png?v=1710787013',
  },
];

const color_options = [
  {
    color: 'Arena',
    hex: '#F0DFD3',
  },
  {
    color: 'Caramelo',
    hex: '#9F6329',
  },
  {
    color: 'Cafe',
    hex: '#663912',
  },
  {
    color: 'Cafe Oscuro',
    hex: '#4C3327',
  },
  {
    color: 'Negro',
    hex: '#0E0E0E',
  },
  {
    color: 'Blanco',
    hex: '#F5F5F6',
    border: '#494949',
  },
  {
    color: 'Dorado',
    hex: '#BCBF79',
  },
  {
    color: 'Plateado',
    hex: '#DCD8DB',
  },
];

let frame_option_selected = 'Photo';
let frame_color_selected = 'Arena';
let frame_size_selected = '13x18';

function addFrameOptions(configurator_options) {
  //ADDING FRAME OPTIONS
  const choose_frame = document.createElement('div');
  choose_frame.classList.add('configurator_chooseFrame');
  frame_options.forEach((option, index) => {
    const btn_frame = document.createElement('div');
    btn_frame.classList.add('configurator_btnFrame');
    btn_frame.dataset.selectedframe = option.selection;

    const img_choose = document.createElement('img');
    img_choose.classList.add('configurator_btnFrame_img');
    img_choose.src = option.img_choose;

    btn_frame.appendChild(img_choose);
    choose_frame.appendChild(btn_frame);
  });
  configurator_options.appendChild(choose_frame);
}

function addColorOptions(configurator_options) {
  //ADDING COLOR OPTIONS
  const choose_color = document.createElement('div');
  choose_color.classList.add('configurator_chooseColor');

  const choose_color_legend = document.createElement('legend');
  choose_color_legend.classList.add('form__label');
  choose_color_legend.innerHTML = 'Color';
  choose_color.appendChild(choose_color_legend);

  const choose_color_list_cnt = document.createElement('div');
  choose_color_list_cnt.id = 'configurator_chooseColor_list_cnt';
  choose_color.appendChild(choose_color_list_cnt);

  const choose_color_ul = document.createElement('ul');
  choose_color_ul.classList.add('configurator_chooseColor_ul');
  choose_color.appendChild(choose_color_ul);

  const choose_color_li = document.createElement('li');
  choose_color_ul.appendChild(choose_color_li);

  const choose_color_img = document.createElement('img');
  choose_color_img.src =
    'https://cdn.shopify.com/s/files/1/0686/9106/7109/files/no-color.png?v=1710787795';
  choose_color_img.alt = 'no-color';
  choose_color_li.appendChild(choose_color_img);

  color_options.forEach((option, index) => {
    const choose_color_li = document.createElement('li');
    choose_color_ul.appendChild(choose_color_li);

    const choose_color_btn = document.createElement('div');
    choose_color_btn.classList.add('configurator_chooseColor_btnColor');
    choose_color_btn.dataset.color = option.color;
    choose_color_btn.style.backgroundColor = option.hex;
    if (option.border)
      choose_color_btn.style.border = `solid 1px ${option.border}`;
    choose_color_btn.innerHTML = '&nbsp;';

    choose_color_li.appendChild(choose_color_btn);
  });

  configurator_options.appendChild(choose_color);
}

function onBtnOptionFrame() {
  const btn_frame = document.querySelectorAll('.configurator_btnFrame');
  btn_frame.forEach((btn) => {
    btn.addEventListener('click', (e) => {
      frame_option_selected = e.target.dataset.selectedframe;
      renderCanvas();
    });
  });
}

function onBtnOptionColor() {
  const btn_color = document.querySelectorAll(
    '.configurator_chooseColor_btnColor'
  );
  btn_color.forEach((btn) => {
    btn.addEventListener('click', (e) => {
      frame_color_selected = e.target.dataset.color;
      renderCanvas();
    });
  });
}

function renderCanvas() {
  const canvas = document.querySelector('#configurator_canvasProduct');
  const imageCanvas = document.querySelector('#configurator_canvasProductCnt');
  canvas.className = '';
  imageCanvas.className = '';
  console.log(frame_option_selected, frame_color_selected, frame_size_selected);
  imageCanvas.classList.add(frame_option_selected.replaceAll(' ', ''));
  imageCanvas.classList.add(frame_color_selected.replaceAll(' ', ''));
  canvas.classList.add(`s${frame_size_selected.replaceAll(' ', '')}`);
}

window.onload = () => {
  const productmedia = document.querySelectorAll('.product__media-item');
  const canvas_product = document.querySelector('#configurator_canvasProduct');
  const configurator_canvasProductImg = document.querySelector(
    '#configurator_canvasProductImg'
  );
  const configurator_options = document.querySelector('.configurator_options');
  if (productmedia.length > 0) {
    productmedia[0].style = 'display:none;';
    const img = productmedia[0].querySelector('img');

    configurator_canvasProductImg.style.backgroundImage = `url(${img.src})`;

    addFrameOptions(configurator_options);
    addColorOptions(configurator_options);

    onBtnOptionFrame();
    onBtnOptionColor();
  }
};
