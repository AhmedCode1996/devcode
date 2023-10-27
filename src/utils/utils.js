const delay = (promise) =>
  new Promise((resolve) => setTimeout(resolve, 2000)).then(() => promise);
