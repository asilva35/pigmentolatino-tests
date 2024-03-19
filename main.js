console.log('Script from theme liquid 05');

const imageStyleDefault = [
  'position: absolute;',
  'top: 50%;',
  'left: 50%;',
  'transform: translate(-50%, -50%);',
  'width:auto;',
  'height:100%;',
  'filter:drop-shadow(rgba(34, 34, 34, 0.37) 8px 8px 5px);',
  'transition: all 0.5s ease-in-out;',
].join(' ');

const imageStyleWithFrame = [
  'position: absolute;',
  'top: 50%;',
  'left: 50%;',
  'transform: translate(-50%, -50%);',
  'width:auto;',
  'height:90%;',
  'border:solid 10px transparent;',
  'border-image: url(https://cdn.shopify.com/s/files/1/0686/9106/7109/files/frame-arena.png?v=1710791496) 10 round;',
  'filter:drop-shadow(rgba(34, 34, 34, 0.37) 8px 8px 5px);',
  'transition: all 0.5s ease-in-out;',
].join(' ');

const imageStyleWithMariaLuisa = [
  'position: absolute;',
  'top: 50%;',
  'left: 50%;',
  'transform: translate(-50%, -50%);',
  'width:auto;',
  'height:90%;',
  'border:solid 80px transparent;',
  'border-image: url(https://cdn.shopify.com/s/files/1/0686/9106/7109/files/maria-luisa-arena.png?v=1710791776) 80 round;',
  'filter:drop-shadow(rgba(34, 34, 34, 0.37) 8px 8px 5px);',
  'transition: all 0.5s ease-in-out;',
].join(' ');

const imageStyleCanvasOnly = [
  'position: absolute;',
  'top: 50%;',
  'left: 50%;',
  'transform: translate(-50%, -50%);',
  'width:auto;',
  'height:80%;',
  'filter:drop-shadow(rgba(34, 34, 34, 0.37) 8px 8px 5px);',
  'transition: all 0.5s ease-in-out;',
].join(' ');

const imageStyleWoodFrame = [
  'position: absolute;',
  'top: 50%;',
  'left: 50%;',
  'transform: translate(-50%, -50%);',
  'width:auto;',
  'height:90%;',
  'border:10px solid transparent;',
  'border-image: url(https://cdn.shopify.com/s/files/1/0636/7025/5768/files/wood-frame.png?v=1709229926) 10 round;',
  'filter:drop-shadow(rgba(34, 34, 34, 0.37) 8px 8px 5px);',
  'transition: all 0.5s ease-in-out;',
].join(' ');

const imageStyleGoldFrame = [
  'position: absolute;',
  'top: 50%;',
  'left: 50%;',
  'transform: translate(-50%, -50%);',
  'width:auto;',
  'height:90%;',
  'border:10px solid transparent;',
  'border-image: url(https://cdn.shopify.com/s/files/1/0636/7025/5768/files/gold-frame.png?v=1709229926) 10 round;',
  'filter:drop-shadow(rgba(34, 34, 34, 0.37) 8px 8px 5px);',
  'transition: all 0.5s ease-in-out;',
].join(' ');

const imageStyleSilverFrame = [
  'position: absolute;',
  'top: 50%;',
  'left: 50%;',
  'transform: translate(-50%, -50%);',
  'width:auto;',
  'height:90%;',
  'border:10px solid transparent;',
  'border-image: url(https://cdn.shopify.com/s/files/1/0636/7025/5768/files/silver-frame.png?v=1709229926) 10 round;',
  'filter:drop-shadow(rgba(34, 34, 34, 0.37) 8px 8px 5px);',
  'transition: all 0.5s ease-in-out;',
].join(' ');

const imageStyleCanvasTensado = [
  'position: absolute;',
  'top: 50%;',
  'left: 50%;',
  'transform: perspective(900px) rotateY(55deg) translate(-50%, -50%);',
  'width:auto;',
  'height:60%;',
  'border:25px solid transparent;',
  'border-image: url(http://127.0.0.1:5500/images/frames/canva_blanco.jpg) 25 round;',
  'filter:drop-shadow(rgba(34, 34, 34, 0.37) 8px 8px 5px);',
  'transition: all 0.5s ease-in-out;',
].join(' ');

const imageStyleCanvasTensadoFrame = [
  'position: absolute;',
  'top: 50%;',
  'left: 50%;',
  'transform: translate(-50%, -50%);',
  'width:auto;',
  'height:90%;',
  'border:solid 25px transparent;',
  'border-image: url(https://cdn.shopify.com/s/files/1/0686/9106/7109/files/canvas-tensado-frame_2637bde6-50da-4cd5-8035-ff7861938bf4.png?v=1710793392) 25 round;',
  'filter:drop-shadow(rgba(34, 34, 34, 0.37) 8px 8px 5px);',
  'transition: all 0.5s ease-in-out;',
].join(' ');

const productwrapper = document.querySelector('.product_main_wrapper');
const productmedia = document.querySelectorAll('.product__media-item');
const canvas_product = document.querySelector('#canvas-product');

if (productmedia.length > 0) {
  productmedia[0].style = 'display:none;';
  const img = productmedia[0].querySelector('img');

  //CREATE IMAGE ELEMENT
  const image = new Image();
  image.src = img.src;
  image.style = imageStyleDefault;
  image.id = 'main-canvas-image';
  canvas_product.appendChild(image);

  //CREATE 3D BOX ELEMENT
  const box3d = document.createElement('div');
  const box3DWidth = 490;
  const box3DHeight = 617;
  box3d.id = 'box';
  box3d.style = `display:none;position: absolute; top: 50%; left: 50%; transform: translate(-50%,-50%) rotateY(30deg) rotateX(30deg); width: ${box3DWidth}px; height: ${box3DHeight}px;transform-style: preserve-3d;transition: all 0.5s ease-in-out;`;
  canvas_product.appendChild(box3d);
  const box3dFront = document.createElement('div');
  const box3dBack = document.createElement('div');
  const box3dRight = document.createElement('div');
  const box3dLeft = document.createElement('div');
  const box3dTop = document.createElement('div');
  const box3dBottom = document.createElement('div');

  const box3dFaceStyle =
    'display:block;position: absolute;width: 100%;height: 100%;';

  box3dFront.style =
    box3dFaceStyle +
    'transform: translateZ( -50px) rotateY(0deg);background:rgba(255,0,0,0.5);';
  box3dBack.style =
    box3dFaceStyle +
    'transform: translateZ( -50px) rotateY(180deg);background:rgba(255,255,0,0.5);';
  box3dRight.style =
    box3dFaceStyle +
    'transform: translateZ( -150px) rotateY(90deg);background:rgba(255,0,255,0.5);';
  box3dLeft.style =
    box3dFaceStyle +
    'transform: translateZ( -150px) rotateY(-90deg);background:rgba(0,255,0,0.5);';
  box3dTop.style =
    box3dFaceStyle +
    'transform: translateZ( -100px) rotateX(90deg);background:rgba(0,255,255,0.5);';
  box3dBottom.style =
    box3dFaceStyle +
    'transform: translateZ( -100px) rotateX(-90deg);background:rgba(255,50,0,0.5);';

  box3d.appendChild(box3dFront);
  box3d.appendChild(box3dBack);
  box3d.appendChild(box3dRight);
  box3d.appendChild(box3dLeft);
  box3d.appendChild(box3dTop);
  box3d.appendChild(box3dBottom);

  //CLICK EVENT IN btn-frame
  const btn_frame = document.querySelectorAll('.btn-frame');
  btn_frame.forEach((btn) => {
    btn.addEventListener('click', (e) => {
      const selectedframe = e.target.dataset.selectedframe;
      if (selectedframe === 'no-frame') {
        image.style = imageStyleDefault;
        image.style.display = 'block';
        box3d.style.display = 'none';
      } else if (selectedframe === 'with-frame') {
        image.style = imageStyleWithFrame;
        image.style.display = 'block';
        box3d.style.display = 'none';
      } else if (selectedframe === 'with-maria-luisa') {
        image.style = imageStyleWithMariaLuisa;
        image.style.display = 'block';
        box3d.style.display = 'none';
      } else if (selectedframe === 'canvas-only') {
        image.style = imageStyleCanvasOnly;
        image.style.display = 'block';
        box3d.style.display = 'none';
      } else if (selectedframe === 'canvas-tensado') {
        image.style = imageStyleCanvasTensado;
        image.style.display = 'none';
        box3d.style.display = 'block';
      } else if (selectedframe === 'canvas-tensado-frame') {
        image.style = imageStyleCanvasTensadoFrame;
        image.style.display = 'block';
        box3d.style.display = 'none';
      }
    });
  });

  //CLICK EVENT IN btn-color
  const btn_color = document.querySelectorAll('.btn-color');
  btn_color.forEach((btn) => {
    btn.addEventListener('click', (e) => {
      const color = e.target.dataset.color;
      if (color === 'arena') {
        image.style.border = '10px solid #F0DFD3';
      } else if (color === 'caramelo') {
        image.style.border = '10px solid #9F6329';
      } else if (color === 'cafe') {
        image.style.border = '10px solid #663912';
      } else if (color === 'cafe oscuro') {
        image.style.border = '10px solid #4C3327';
      } else if (color === 'negro') {
        image.style.border = '10px solid #0E0E0E';
      } else if (color === 'blanco') {
        image.style.border = '10px solid #F5F5F6';
      } else if (color === 'dorado') {
        image.style.border = '10px solid #BCBF79';
      } else if (color === 'plateado') {
        image.style.border = '10px solid #DCD8DB';
      }
    });
  });
}
