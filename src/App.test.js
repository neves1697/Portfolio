import { fireEvent, render, screen, within, waitFor } from '@testing-library/react';
import App from './App';

beforeEach(() => {
  window.location.hash = '';
  window.scrollTo = jest.fn();
});

test('opens the home page at the root and highlights the confirmed role', async () => {
  render(<App />);
  expect(await screen.findByRole('heading', { name: /Olá, eu sou Anderson Neves/i })).toBeInTheDocument();
  expect(screen.getByRole('heading', { name: 'Analista de Suporte Nível 3' })).toBeInTheDocument();
  expect(within(screen.getByRole('navigation')).getAllByRole('link')).toHaveLength(5);
  expect(screen.getByRole('link', { name: 'Início', exact: true })).toHaveAttribute('aria-current', 'page');
});

test('navigates all five pages, updating the title and the main focus', async () => {
  render(<App />);
  await screen.findByRole('heading', { name: /Olá, eu sou/i });
  const navigation = screen.getByRole('navigation');
  const routes = [['Projetos', /Conhecimento em prática/i], ['Experiências', /Uma trajetória de aprendizado/i], ['Sobre Mim', /A pessoa por trás das soluções/i], ['Contatos', /Vamos conversar/i], ['Início', /Olá, eu sou/i]];
  for (const [label, heading] of routes) {
    fireEvent.click(within(navigation).getByRole('link', { name: label, exact: true }));
    expect(await screen.findByRole('heading', { level: 1, name: heading })).toBeInTheDocument();
    expect(document.title).toBe(`${label} | Anderson Neves`);
    expect(screen.getByRole('main')).toHaveFocus();
  }
});

test('opens direct project links and recovers unknown addresses', async () => {
  window.location.hash = '#/projetos';
  const { unmount } = render(<App />);
  expect(await screen.findByRole('heading', { level: 1, name: /Conhecimento em prática/i })).toBeInTheDocument();
  expect(screen.getAllByRole('article')).toHaveLength(4);
  unmount();
  window.location.hash = '#/pagina-inexistente';
  render(<App />);
  expect(await screen.findByRole('heading', { level: 1, name: /Olá, eu sou/i })).toBeInTheDocument();
});

test('closes the mobile menu with Escape and after navigation', async () => {
  render(<App />);
  await screen.findByRole('heading', { name: /Olá, eu sou/i });
  fireEvent.click(screen.getByRole('button', { name: 'Abrir menu' }));
  const closeButton = screen.getByRole('button', { name: 'Fechar menu' });
  expect(closeButton).toHaveAttribute('aria-expanded', 'true');
  fireEvent.keyDown(closeButton, { key: 'Escape' });
  expect(screen.getByRole('button', { name: 'Abrir menu' })).toHaveFocus();
  fireEvent.click(screen.getByRole('button', { name: 'Abrir menu' }));
  fireEvent.click(within(screen.getByRole('navigation')).getByRole('link', { name: 'Contatos' }));
  await waitFor(() => expect(screen.getByRole('button', { name: 'Abrir menu' })).toHaveAttribute('aria-expanded', 'false'));
});

test('contact cards point to the existing profiles without a fake submission flow', async () => {
  window.location.hash = '#/contatos';
  render(<App />);
  const channels = await screen.findByRole('region', { name: 'Canais de contato' });
  const links = within(channels).getAllByRole('link');
  expect(links).toHaveLength(2);
  expect(links[0]).toHaveAttribute('href', 'https://www.linkedin.com/in/anderson-neves-405968118/');
  expect(links[1]).toHaveAttribute('href', 'https://github.com/neves1697');
  links.forEach(link => { expect(link).toHaveAttribute('target', '_blank'); expect(link).toHaveAttribute('rel', 'noopener noreferrer'); });
});
