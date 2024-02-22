const fakeItems = [
  {
    description:
      'No mês de janeiro, eu fiz um curso de React que me ajudou a desenvolver diversas habilidades. Dentre elas, a habilidade de criar componentes reutilizáveis e a habilidade de criar aplicações web com React.',
    values: ['Empreendedorismo', 'All together'],
  },
  {
    description:
      'No mês de janeiro, eu fiz um curso de React que me ajudou a desenvolver diversas habilidades. Dentre elas, a habilidade de criar componentes reutilizáveis e a habilidade de criar aplicações web com React.',
    values: ['Inovação'],
  },
  {
    description:
      'No mês de janeiro, eu fiz um curso de React que me ajudou a desenvolver diversas habilidades. Dentre elas, a habilidade de criar componentes reutilizáveis e a habilidade de criar aplicações web com React.',
    values: ['Resultados, Empreendedorismo'],
  },
];

export const ListItems = () => {
  return (
    <div className="text-white">
      <ul>
        {fakeItems.map((item, index) => (
          <li key={index} className="p-4 border rounded-xl">
            <div>{item.description}</div>
            <ol>
              {item.values.map((value, index) => (
                <li
                  className="rounded-xl border border-red-900 inline-block px-3"
                  key={index}
                >
                  {value}
                </li>
              ))}
            </ol>
          </li>
        ))}
      </ul>
    </div>
  );
};
