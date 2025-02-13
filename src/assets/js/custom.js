// FAQ

const faqItems = Array.from(document.querySelectorAll('.cs-faq-item'));
        for (const item of faqItems) {
            const onClick = () => {
            item.classList.toggle('active')
        }
        item.addEventListener('click', onClick)
        }
        new BlazeSlider(el, {
            all: {
              enableAutoplay: true,
              autoplayInterval: 2000,
              transitionDuration: 300,
              slidesToShow: 3,
            },
            '(max-width: 900px)': {
              slidesToShow: 2,
            },
            '(max-width: 500px)': {
              slidesToShow: 1,
            },
          })