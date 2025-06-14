export type TarefaInterface = {
	id: number;
	title: string;
	completed: boolean;
};

const dados: Array<TarefaInterface> = [
	{ id: 1, title: "delectus aut autem", completed: false },
	{
		id: 2,
		title: "quis ut nam facilis et officia qui",
		completed: false,
	},
	{
		id: 3,
		title: "fugiat veniam minus",
		completed: false,
	},
	{
		id: 4,
		title: "et porro tempora",
		completed: true,
	},
	{
		id: 5,
		title: "laboriosam mollitia et enim quasi adipisci quia provident illum",
		completed: false,
	},
	{
		id: 6,
		title: "qui ullam ratione quibusdam voluptatem quia omnis",
		completed: false,
	},
	{
		id: 7,
		title: "illo expedita consequatur quia in",
		completed: false,
	},
	{
		id: 8,
		title: "quo adipisci enim quam ut ab",
		completed: true,
	},
	{
		id: 9,
		title: "molestiae perspiciatis ipsa",
		completed: false,
	},
	{
		id: 10,
		title: "illo est ratione doloremque quia maiores aut",
		completed: true,
	},
	{
		id: 11,
		title: "vero rerum temporibus dolor",
		completed: true,
	},
	{
		id: 12,
		title: "ipsa repellendus fugit nisi",
		completed: true,
	},
	{
		id: 13,
		title: "et doloremque nulla",
		completed: false,
	},
	{
		id: 14,
		title: "repellendus sunt dolores architecto voluptatum",
		completed: true,
	},
	{
		id: 15,
		title: "ab voluptatum amet voluptas",
		completed: true,
	},
];

const carregar = (): Promise<TarefaInterface[]> => {
	return new Promise((resolve, reject) => {
		// const sucesso = Math.random() > 0.2; // 80% de chance de sucesso
		const sucesso = true;

		if (sucesso) {
			resolve(dados);
		} else {
			reject(new Error("Erro 500: Falha ao carregar dados da API"));
		}
	});
};

export {carregar};

export default dados;
