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

const transformCatalogByCategory = (catalog) => {
  const categories = {
    laminate: [],
    plinth: [],
    overlay: [],
  };

  catalog.forEach((item) => {
    const title = item.title.toLowerCase();

    if (title.search(/плинтус\s/i) !== -1) {
      categories.plinth.push(item);
    }

    if (title.search(/ламинат\s/i) !== -1) {
      categories.laminate.push(item);
    }

    if (title.search(/подложка\s/i) !== -1) {
      categories.overlay.push(item);
    }
  });
  return categories;
};

export { getCatalog };
