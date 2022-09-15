export default function notFoundError(entity:string) {
	throw {
		type: "notFound",
		message: `${entity} não encontrado(a)!`
	};
}