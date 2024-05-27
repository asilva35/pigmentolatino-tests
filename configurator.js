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
      'https://cdn.shopify.com/s/files/1/0838/8866/8990/files/btn-canvas-tensado-frame-v2.png?v=1714084774',
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
let frames_variants = null;
let frame_variant_selected = null;
let item_price = 0;
let product_info = null;

function addFrameOptions(configurator_options) {
  //ADDING FRAME OPTIONS
  const choose_frame = document.createElement('div');
  const cnt = document.createElement('div');
  const slider = document.createElement('div');
  choose_frame.classList.add('configurator_chooseFrame');
  cnt.classList.add('configurator_chooseFrame_cnt');
  slider.classList.add('configurator_chooseFrame_slider');
  frame_options.forEach((option, index) => {
    const btn_frame = document.createElement('div');
    btn_frame.classList.add('configurator_btnFrame');
    btn_frame.dataset.selectedframe = option.selection;

    const img_choose = document.createElement('img');
    img_choose.classList.add('configurator_btnFrame_img');
    img_choose.src = option.img_choose;

    btn_frame.appendChild(img_choose);
    slider.appendChild(btn_frame);
  });
  cnt.appendChild(slider);
  choose_frame.appendChild(cnt);
  configurator_options.appendChild(choose_frame);

  const next_icon = document.createElement('div');
  const prev_icon = document.createElement('div');
  next_icon.classList.add('configurator_chooseFrame_next');
  prev_icon.classList.add('configurator_chooseFrame_prev');

  const next_icon_img = document.createElement('img');
  next_icon_img.src =
    'https://cdn.shopify.com/s/files/1/0838/8866/8990/files/next-icon.png?v=1713277227';
  next_icon_img.alt = 'Next';

  const prev_icon_img = document.createElement('img');
  prev_icon_img.src =
    'https://cdn.shopify.com/s/files/1/0838/8866/8990/files/prev-icon.png?v=1713277231';
  prev_icon_img.alt = 'Prev';

  next_icon.appendChild(next_icon_img);
  prev_icon.appendChild(prev_icon_img);

  choose_frame.appendChild(next_icon);
  choose_frame.appendChild(prev_icon);

  next_icon.addEventListener('click', (e) => {
    slider.style.transform = 'translate(-200px,0)';
  });

  prev_icon.addEventListener('click', (e) => {
    slider.style.transform = 'translate(0,0)';
  });
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
  choose_color_list_cnt.appendChild(choose_color_ul);

  const choose_color_label = document.createElement('div');
  choose_color_label.classList.add('configurator_chooseColor_label');
  choose_color_label.innerHTML = 'Arena';
  choose_color_list_cnt.appendChild(choose_color_label);

  choose_color.appendChild(choose_color_list_cnt);

  const choose_color_li = document.createElement('li');
  choose_color_ul.appendChild(choose_color_li);
  choose_color_li.classList.add('no-color');

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

function addSizesGuide(configurator_options) {
  const sizes_guide = document.createElement('div');
  sizes_guide.classList.add('configurator_sizeguide');

  const link = document.createElement('a');
  link.classList.add('configurator_sizeguide_link');
  link.href = '/sizes-guide';
  link.target = '_blanck';
  link.innerHTML = 'Guía de Tamaños';

  sizes_guide.appendChild(link);

  configurator_options.appendChild(sizes_guide);
}

function addAlternativePrice(configurator_options) {
  let price_str = document.querySelector('.price-item').innerHTML;
  const price_container = document.querySelector('.price__regular');
  const alternative_price = document.createElement('span');
  alternative_price.classList.add('configurator_alternative_price');
  alternative_price.innerHTML = price_str;
  configurator_options.appendChild(alternative_price);
}

function onBtnOptionFrame() {
  const btns_frame = document.querySelectorAll('.configurator_btnFrame');
  btns_frame.forEach((btn) => {
    btn.addEventListener('click', (e) => {
      btns_frame.forEach((btn) => {
        btn.classList.remove('selected');
      });
      e.target.classList.add('selected');
      frame_option_selected = e.target.dataset.selectedframe;
      renderCanvas();
      getItemPrice();
      selectFrameVariant();
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

function onBtnOptionSize() {
  const product_info_container = document.querySelector(
    'select[name="options[Size]"]'
  );
  frame_size_selected = product_info_container.value;
  product_info_container.addEventListener('change', (e) => {
    frame_size_selected = e.target.value;
    renderCanvas();
    getItemPrice();
    setTimeout(() => {
      selectFrameVariant();
    }, 700);
  });
}

function onThumbnailClick() {
  const product_media = document.querySelector('.product__media-list');
  const configurator_canvasProduct = document.querySelector(
    '#configurator_canvasProduct'
  );
  const thumbnails = document.querySelectorAll('.thumbnail-list li');
  const last_thumbnail = thumbnails.length;
  thumbnails.forEach((thumb, i) => {
    const button = thumb.querySelector('button');
    button.dataset.key = i + 1;
    button.addEventListener('click', (e) => {
      const current = Number.parseInt(e.target.dataset.key);
      if (current === last_thumbnail) {
        console.log('LAST');
        product_media.style.display = 'none';
        configurator_canvasProduct.style.display = 'block';
      } else {
        console.log('FIRST');
        configurator_canvasProduct.style.display = 'none';
        product_media.style.display = 'flex';
      }
    });
  });
}

function renderCanvas() {
  const canvas = document.querySelector('#configurator_canvasProduct');
  const imageCanvas = document.querySelector('#configurator_canvasProductCnt');
  canvas.className = '';
  imageCanvas.className = '';
  imageCanvas.classList.add(frame_option_selected.replaceAll(' ', ''));
  imageCanvas.classList.add(frame_color_selected.replaceAll(' ', ''));
  //canvas.classList.add(`s${frame_size_selected.replaceAll(' ', '')}`);
  if (frame_size_selected && product_info) {
    product_info.variants.map((variant, index) => {
      if (variant.title === frame_size_selected) {
        let delta_size = 0;
        if (frame_option_selected === 'CanvasTensadoFrame') {
          delta_size += 20;
        }
        if (frame_option_selected === 'Frame') {
          delta_size += 20;
        }
        if (frame_option_selected === 'MariaLuisa') {
          delta_size += 50;
          if (['13x18', '20x20', '20x30'].includes(frame_size_selected)) {
            delta_size += 40;
          }
          if (
            ['30x30', '30x40', '40x50', '50x50', '50x70'].includes(
              frame_size_selected
            )
          ) {
            delta_size += 60;
          }
          if (
            ['70x70', '60x90', '70x100', '60x150'].includes(frame_size_selected)
          ) {
            delta_size += 80;
          }
        }
        let variant_img_width = variant.featured_image.width;
        let variant_img_height = variant.featured_image.height;
        if (variant_img_width > 400) {
          const delta = variant_img_width / 400;
          variant_img_height /= delta;
          variant_img_width = 400;
        }
        configurator_canvasProductImg.style.backgroundImage = `url(${variant.featured_image.src})`;
        configurator_canvasProductImg.style.width = `${
          variant_img_width + delta_size
        }px`;
        configurator_canvasProductImg.style.height = `${
          variant_img_height + delta_size
        }px`;
        configurator_canvasProductImg.style.backgroundSize = `${variant_img_width}px ${variant_img_height}px`;
      }
    });
  }
  toggleOptionColors();
}

function toggleOptionColors() {
  const configurator_chooseColor_ul = document.querySelector(
    '.configurator_chooseColor_ul'
  );

  const configurator_chooseColor_label = document.querySelector(
    '.configurator_chooseColor_label'
  );

  configurator_chooseColor_ul.querySelectorAll('li').forEach((li) => {
    if (
      ['Frame', 'MariaLuisa', 'CanvasTensadoFrame'].includes(
        frame_option_selected
      )
    ) {
      if (li.classList.contains('no-color')) {
        li.style.display = 'none';
      } else {
        li.style.display = 'block';
      }
    } else {
      if (li.classList.contains('no-color')) {
        li.style.display = 'block';
      } else {
        li.style.display = 'none';
      }
    }
  });

  if (
    ['Frame', 'MariaLuisa', 'CanvasTensadoFrame'].includes(
      frame_option_selected
    )
  ) {
    let label_text = frame_color_selected;
    label_text = label_text.replaceAll('Cafe', 'Café');
    configurator_chooseColor_label.innerHTML = label_text;
    if (frame_color_selected === 'Arena') {
      configurator_chooseColor_label.style.transform = 'translate(0,0)';
    }
    if (frame_color_selected === 'Caramelo') {
      configurator_chooseColor_label.style.transform = 'translate(12px,0)';
    }
    if (frame_color_selected === 'Cafe') {
      configurator_chooseColor_label.style.transform = 'translate(56px,0)';
    }
    if (frame_color_selected === 'Cafe Oscuro') {
      configurator_chooseColor_label.style.transform = 'translate(60px,0)';
    }
    if (frame_color_selected === 'Negro') {
      configurator_chooseColor_label.style.transform = 'translate(110px,0)';
    }
    if (frame_color_selected === 'Blanco') {
      configurator_chooseColor_label.style.transform = 'translate(135px,0)';
    }
    if (frame_color_selected === 'Dorado') {
      configurator_chooseColor_label.style.transform = 'translate(165px,0)';
    }
    if (frame_color_selected === 'Plateado') {
      configurator_chooseColor_label.style.transform = 'translate(175px,0)';
    }
    configurator_chooseColor_label.style.opacity = 1;
  } else {
    configurator_chooseColor_label.style.opacity = 0;
  }
}

function customizeAddTocart() {
  const product_form__buttons = document.querySelector(
    '.product-form__buttons'
  );
  const form = document.querySelector('form[action$="/cart/add"]');
  const input_productid = form.querySelector('input[name="id"]');

  const button = document.createElement('div');
  button.innerHTML = 'Agregar al carrito';
  button.classList.add('configurator_addToCartBtn');
  product_form__buttons.appendChild(button);

  button.addEventListener('click', (e) => {
    let productid = input_productid.value;
    let formData = {
      items: [
        {
          id: productid,
          quantity: 1,
        },
      ],
    };

    if (
      frame_option_selected === 'Frame' ||
      frame_option_selected === 'MariaLuisa' ||
      frame_option_selected === 'CanvasTensadoFrame'
    ) {
      let search_option = `${frame_size_selected}`;
      if (frame_option_selected === 'MariaLuisa') {
        search_option = search_option + '-passepartout';
      }
      if (frame_option_selected === 'CanvasTensadoFrame') {
        search_option = search_option + '-canvas';
      }
      const variant_found = frames_variants.find((variant) => {
        if (variant.title === search_option) {
          return variant;
        }
      });
      if (variant_found) {
        formData.items.push({
          id: variant_found.id,
          quantity: 1,
        });
      }
    }

    console.log(formData);

    fetch(window.Shopify.routes.root + 'cart/add.js', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(formData),
    })
      .then((response) => {
        return response.json();
      })
      .then((data) => {
        if (data && data.items && data.items.length > 0) {
          console.log('Reloading...');
          location.reload();
        }
      })
      .catch((error) => {
        console.error('Error:', error);
      });
  });
}

function customizeBuyNow() {
  const product_form__buttons = document.querySelector(
    '.product-form__buttons'
  );
  const form = document.querySelector('form[action$="/cart/add"]');
  const input_productid = form.querySelector('input[name="id"]');

  const button = document.createElement('div');
  button.innerHTML = 'Comprar ahora';
  button.classList.add('configurator_buyNowBtn');
  product_form__buttons.appendChild(button);
}

function customizeCartActions() {
  const product_form__buttons = document.querySelector(
    '.product-form__buttons'
  );
  const form = document.querySelector('form[action$="/cart/add"]');
  const input_productid = form.querySelector('input[name="id"]');

  const buttonAddCart = document.createElement('div');
  buttonAddCart.innerHTML = 'Agregar al carrito';
  buttonAddCart.classList.add('configurator_addToCartBtn');
  product_form__buttons.appendChild(buttonAddCart);

  const buttonBuyNow = document.createElement('div');
  buttonBuyNow.innerHTML = 'Comprar ahora';
  buttonBuyNow.classList.add('configurator_buyNowBtn');
  product_form__buttons.appendChild(buttonBuyNow);

  buttonAddCart.addEventListener('click', (e) => {
    addProductToCart(input_productid, () => {
      location.reload();
    });
  });

  buttonBuyNow.addEventListener('click', (e) => {
    addProductToCart(input_productid, () => {
      location.href = window.Shopify.routes.root + 'cart';
    });
  });
}

function addProductToCart(input_productid, callback) {
  let productid = input_productid.value;
  let formData = {
    items: [
      {
        id: productid,
        quantity: 1,
      },
    ],
  };

  if (
    frame_option_selected === 'Frame' ||
    frame_option_selected === 'MariaLuisa' ||
    frame_option_selected === 'CanvasTensadoFrame'
  ) {
    let search_option = `${frame_size_selected}`;
    if (frame_option_selected === 'MariaLuisa') {
      search_option = search_option + '-passepartout';
    }
    if (frame_option_selected === 'CanvasTensadoFrame') {
      search_option = search_option + '-canvas';
    }
    const variant_found = frames_variants.find((variant) => {
      if (variant.title === search_option) {
        return variant;
      }
    });
    if (variant_found) {
      formData.items.push({
        id: variant_found.id,
        quantity: 1,
      });
    }
  }

  console.log(formData);

  fetch(window.Shopify.routes.root + 'cart/add.js', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(formData),
  })
    .then((response) => {
      return response.json();
    })
    .then((data) => {
      if (data && data.items && data.items.length > 0) {
        if (callback) callback();
      }
    })
    .catch((error) => {
      console.error('Error:', error);
    });
}

function loadFramesVariants() {
  fetch(window.Shopify.routes.root + 'products/Frames.js')
    .then((response) => response.json())
    .then((frames) => {
      if (frames && frames.variants) {
        frames_variants = frames.variants;
        selectFrameVariant();
        customizeCartActions();
      }
    });
}

function selectFrameVariant() {
  if (
    frame_option_selected === 'Frame' ||
    frame_option_selected === 'MariaLuisa' ||
    frame_option_selected === 'CanvasTensadoFrame'
  ) {
    let search_option = `${frame_size_selected}`;
    if (frame_option_selected === 'MariaLuisa') {
      search_option = search_option + '-passepartout';
    }
    if (frame_option_selected === 'CanvasTensadoFrame') {
      search_option = search_option + '-canvas';
    }
    frame_variant_selected = frames_variants.find((variant) => {
      if (variant.title === search_option) {
        return variant;
      }
    });
    if (frame_variant_selected) {
      let variant_price = frame_variant_selected.price / 100;
      let new_price = `₡ ${(
        Math.round((variant_price + item_price) * 100) / 100
      ).toFixed(2)} CRC`;
      new_price = new_price.replaceAll('.', ',');
      document.querySelector('.configurator_alternative_price').innerHTML =
        new_price;
    }
  } else {
    document.querySelector('.configurator_alternative_price').innerHTML =
      document.querySelector('.price-item').innerHTML;
  }
}

function getItemPrice() {
  let price_str = document.querySelector('.price-item').innerHTML;
  price_str = price_str
    .replaceAll('₡', '')
    .replaceAll('CRC', '')
    .replaceAll(',', '.')
    .trim();
  item_price = Number.parseFloat(price_str);
}

function fetchProduct(configurator_canvasProductImg) {
  const product_path = document.location.pathname.replace('/', '');
  const url = `${window.Shopify.routes.root}${product_path}.js`;
  fetch(url)
    .then((response) => response.json())
    .then((product) => {
      product_info = product;
      renderMainImage(configurator_canvasProductImg);
    });
}

function renderMainImage(configurator_canvasProductImg) {
  if (frame_size_selected && product_info) {
    product_info.variants.map((variant, index) => {
      if (variant.title === frame_size_selected) {
        let variant_img_width = variant.featured_image.width;
        let variant_img_height = variant.featured_image.height;
        if (variant_img_width > 400) {
          const delta = variant_img_width / 400;
          variant_img_height /= delta;
          variant_img_width = 400;
        }
        configurator_canvasProductImg.style.backgroundImage = `url(${variant.featured_image.src})`;
        configurator_canvasProductImg.style.width = `${variant_img_width}px`;
        configurator_canvasProductImg.style.height = `${variant_img_height}px`;
        configurator_canvasProductImg.style.backgroundSize = `${variant_img_width}px ${variant_img_height}px`;
      }
    });
    renderThumbnails();
  }
}

function renderThumbnails() {
  if (product_info && product_info.media && product_info.media.length > 0) {
    const list = document.querySelector(
      '#configurator_canvasProduct_thumbnails ul'
    );
    product_info.media.forEach((media, i) => {
      if (i > 1) return;
      const li = document.createElement('li');
      li.style.backgroundImage = `url(${media.src})`;
      list.appendChild(li);
    });
  }
}

window.onload = () => {
  const productmedia = document.querySelectorAll('.product__media-item');
  const canvas_product = document.querySelector('#configurator_canvasProduct');
  const configurator_canvasProductImg = document.querySelector(
    '#configurator_canvasProductImg'
  );
  const configurator_options = document.querySelector('.configurator_options');
  if (productmedia.length > 0) {
    const img = productmedia[productmedia.length - 1].querySelector('img');

    addAlternativePrice(configurator_options);
    addFrameOptions(configurator_options);
    addColorOptions(configurator_options);
    addSizesGuide(configurator_options);

    getItemPrice();

    onBtnOptionFrame();
    onBtnOptionColor();
    onBtnOptionSize();
    onThumbnailClick();

    loadFramesVariants();

    fetchProduct(configurator_canvasProductImg);
  }
};
