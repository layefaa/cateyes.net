import "swiper/css/pagination";


export const CarouselPagination = {
  clickable: true,
  renderBullet: function (index: any, className: any) {
    return '<span class="' + className + '">' + (index + 1) + "</span>";
  },
};

