const hero = document.querySelector(".hero");

const stage = document.querySelector(".hero-stage");

const orbA = document.querySelector(".orb-a");

const orbB = document.querySelector(".orb-b");

const word1 = document.querySelector(".hero-word");

const word2 = document.querySelector(".hero-word-2");


function clamp(value, min, max) {

  return Math.min(
    Math.max(value, min),
    max
  );

}


function animateHero() {

  if (!hero) return;


  const rect =
    hero.getBoundingClientRect();


  const total =
    hero.offsetHeight -
    window.innerHeight;


  const progress =
    clamp(
      -rect.top / total,
      0,
      1
    );


  /*
    Background movement based
    on page scroll.
  */

  orbA.style.transform =
    `translate3d(
      ${progress * 22 - 10}vw,
      ${progress * -14}vh,
      0
    )
    scale(
      ${1 + progress * .25}
    )`;


  orbB.style.transform =
    `translate3d(
      ${progress * -20}vw,
      ${progress * 12}vh,
      0
    )
    scale(
      ${1 + progress * .18}
    )`;


  word1.style.transform =
    `translate3d(
      -50%,
      calc(
        -50% +
        ${progress * 130}px
      ),
      0
    )
    scale(
      ${1 + progress * .14}
    )`;


  word2.style.transform =
    `translate3d(
      -50%,
      calc(
        -50% -
        ${progress * 100}px
      ),
      0
    )
    scale(
      ${1 + progress * .2}
    )`;

}


window.addEventListener(
  "scroll",
  animateHero,
  {
    passive: true
  }
);


window.addEventListener(
  "resize",
  animateHero
);


animateHero();



/*
  Mouse parallax
*/

if (
  window.matchMedia(
    "(pointer:fine)"
  ).matches
) {

  window.addEventListener(
    "pointermove",
    (event) => {

      const x =
        event.clientX /
        window.innerWidth -
        0.5;


      const y =
        event.clientY /
        window.innerHeight -
        0.5;


      orbA.style.marginLeft =
        `${x * 18}px`;


      orbB.style.marginTop =
        `${y * 14}px`;

    }
  );

}