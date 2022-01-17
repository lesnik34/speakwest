export const scrollPageToPoint = (scrollElem: any, scrollStep = 10) => {
  if (!scrollElem) return;
  const { offsetTop } = scrollElem;
  const { pageYOffset } = window;
  const isScrollNeed = Math.abs(offsetTop - pageYOffset) > scrollStep;

  setTimeout(() => {
    if (isScrollNeed) {
      const planningHeight =
        offsetTop > pageYOffset
          ? pageYOffset + scrollStep
          : pageYOffset - scrollStep;
      window.scrollTo(0, planningHeight);
      scrollPageToPoint(scrollElem, scrollStep);
    } else window.scrollTo(0, offsetTop);
  }, 10);
};
