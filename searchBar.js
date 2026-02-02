 const places = [
      { name: "Bishkek", url: "https://www.advantour.com/rus/kyrgyzstan/altyn-arashan.htm" },
      { name: "Osh", url: "/osh" },
      { name: "Issyk-Kul", url: "https://www.advantour.com/rus/kyrgyzstan/altyn-arashan.htm" },
      { name: "Almaty", url: "/almaty" },
      { name: "Charyn Canyon", url: "/charyn-canyon" },
      { name: "Kaindy Lake", url: "/kaindy-lake" }
    ];

   const searchWrappers = document.querySelectorAll('.search-bar');

    searchWrappers.forEach(wrapper => {
      const input = wrapper.querySelector('input');
      const list = wrapper.querySelector('.suggestions');
      const btn = wrapper.querySelector('img');

      function normalize(text) {
        return text.toLowerCase().replace(/[\s-_]/g, '');
      }

      input.addEventListener('input', () => {
        const value = normalize(input.value);
        list.innerHTML = '';

        if (!value) {
          list.style.display = 'none';
          return;
        }

        const filtered = places.filter(p =>
          normalize(p.name).includes(value)
        );

        filtered.forEach(place => {
          const li = document.createElement('li');
          li.textContent = place.name;
          li.onclick = () => window.location.href = place.url;
          list.appendChild(li);
        });

        list.style.display = filtered.length ? 'block' : 'none';
      });

      input.addEventListener('keydown', e => {
        if (e.key === 'Enter' && input.value.trim()) {
          window.location.href = `/search?place=${encodeURIComponent(input.value)}`;
        }
      });

      btn.addEventListener('click', () => {
        if (input.value.trim()) {
          window.location.href = `/search?place=${encodeURIComponent(input.value)}`;
        }
      });

      document.addEventListener('click', e => {
        if (!e.target.closest('.search-wrapper')) {
          list.style.display = 'none';
        }
      });
    });

    