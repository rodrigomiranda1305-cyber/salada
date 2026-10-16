// Configuração da oferta. Preço, checkout e pixel ficam SÓ aqui, nunca espalhados no HTML.
window.SP_CONFIG = {
  produto: 'Salada no Pote',
  preco: '29,90',
  // Preço de referência riscado. Só use um valor que seja real (art. 37 do CDC).
  precoDe: '97,00',

  // Checkout da Yampi. Enquanto estiver vazio, os botões rolam até o preço.
  checkoutUrl: '',

  // Pixel do Meta. Vazio = não carrega.
  pixelId: '3376839502507312',

  // Contato que aparece no rodapé e nas políticas.
  email: 'contato@saladanopote.sbs',
  empresa: 'Salada no Pote',
  cnpj: '',
};
