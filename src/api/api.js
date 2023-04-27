const URL = "https://moscow.fargospc.ru/test/json/";

const getResource = async (url) => {
  const res = await fetch(url);
  return await res.json();
};

const getCatalog = async () => {
  return getResource(URL).then((catalog) =>
    transformCatalogByCategory(catalog)
  );
};

const getAllGoods = async () => {
  return getResource(URL);
};

const transformCatalogByCategory = (catalog) => {
  const categories = {
    laminate: {
      cards: [],
      src: "laminate.png",
      title: "Ламинат",
    },
    plinth: {
      cards: [],
      src: "plinth.png",
      title: "Плинтус",
    },
    overlay: { cards: [], src: "overlay.png", title: "Подложки" },
    allgoods: { showAll: true, src: "allgoods.png", title: "Все товары" },
  };

  catalog.forEach((item) => {
    const title = item.title.toLowerCase();

    if (title.search(/плинтус\s/i) !== -1) {
      categories.plinth.cards.push(item);
    }

    if (title.search(/ламинат\s/i) !== -1) {
      categories.laminate.cards.push(item);
    }

    if (title.search(/подложка\s/i) !== -1) {
      categories.overlay.cards.push(item);
    }
  });
  return categories;
};

export { getCatalog, getAllGoods };
