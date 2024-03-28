export const recommendations = [
  {
    status: 'Normal',
    sinais: '6 em 6h',
    medico: 'Rotina',
    recommendation: ['Avaliação de enfermagem de rotina'],
  },
  {
    status: 'Alterado',
    sinais: '4 em 4h',
    medico: 'Rotina',
    recommendation: [
      'Verificar glicemia capilar e verificar glicemia 1 hora após o resgate',
      'Avaliar a permeabilidade de acessos venosos.',
    ],
  },
  {
    status: 'Moderado',
    sinais: '1 em 1h',
    medico: 'Até 15 min',
    recommendation: [
      'Verificar glicemia capilar e verificar glicemia 1 hora após o resgate',
      'Avaliar a permeabilidade de acessos venosos.',
      'Providenciar monitorização multiparâmetros (Pressão, FC, FR, Sat O²).',
      'Aproximar carrinho de emergência e materiais para oferta de oxigênio suplementar',
    ],
  },
  {
    status: 'Crítico',
    sinais: 'Imediata',
    medico: 'Imediata',
    recommendation: [
      'Fazer contato com sala de emergência/UTI para encaminhar paciente',
      'Verificar glicemia capilar',
      'Avaliar a permeabilidade de acessos venosos',
      'Providenciar monitorização multiparâmetros (Pressão, FC, FR, Sat O²).',
      'Aproximar carrinho de emergência e materiais para oferta de oxigênio suplementar',
    ],
  },
];
