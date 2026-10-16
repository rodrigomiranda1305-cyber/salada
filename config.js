// Configuração da oferta. Preço, checkout e pixel ficam SÓ aqui, nunca espalhados no HTML.
window.SP_CONFIG = {
  produto: 'Saladas no Pote',
  preco: '29,90',
  // Preço de referência riscado. Só use um valor que seja real (art. 37 do CDC).
  precoDe: '97,00',
  // Valor riscado em cada bônus. Vazio = mostra só "GRÁTIS HOJE!".
  precoBonus: '',

  // Cronômetro de 15 minutos no topo e na oferta + aviso "oferta expira hoje".
  // Deixe false enquanto a oferta não tiver prazo de verdade (art. 37 do CDC).
  contador: false,

  // Checkout da Yampi. Enquanto estiver vazio, os botões rolam até o preço.
  checkoutUrl: '',

  // Pixel do Meta. Vazio = não carrega.
  pixelId: '3376839502507312',

  // Nome que aparece em "Saladas da nutricionista ...". Vazio = mostra o espaço reservado.
  especialista: '',

  // Contato que aparece no rodapé e nas políticas.
  email: 'contato@saladanopote.sbs',
  empresa: 'Saladas no Pote',
  cnpj: '',
};
