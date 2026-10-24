export const KIRK_CONTACT = {
  phone: '+1 (778) 888-2093',
  phoneShort: '(778) 888-2093',
  phoneTel: 'tel:+17788882093',
  phoneSms: (body: string = '') =>
    `sms:+17788882093${body ? `?body=${encodeURIComponent(body)}` : ''}`,
  whatsapp: (text: string = '') =>
    `https://wa.me/17788882093${text ? `?text=${encodeURIComponent(text)}` : ''}`,
  email: 'kirk@kirkauto.ca',
  serviceArea: 'Metro Vancouver & Fraser Valley',
  hours: 'Mon–Sat 9:00 AM – 7:00 PM (By Appt)',
  dealerNum: 'Dealer #[XXXXX]'
};
