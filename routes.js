import { Home, About, Works, pageNotFound } from './app.js';

export async function buttonsRouteInteraction() {
  const aboutButton = document.getElementById('aboutButton');
  const worksButton = document.getElementById('worksButton');

  if (aboutButton) {
    aboutButton.addEventListener('click', async () => {
      history.pushState(null, '', '/about');
      await handleLocationChange();
    });
  }

  if (worksButton) {
    worksButton.addEventListener('click', async () => {
      history.pushState(null, '', '/works');
      await handleLocationChange();
    });
  }
}

window.addEventListener('popstate', async () => {
  await handleLocationChange();
});

export async function handleLocationChange() {
  const path = window.location.pathname;

  if (path === '/about') {
    await About();
  } else if (path === '/works') {
    await Works();
  } else if (path === '/') {
    await Home();
  } else {
    console.log('Ruta no encontrada:', path);
    pageNotFound();
  }
}
