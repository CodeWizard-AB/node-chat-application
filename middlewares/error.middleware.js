import createError from "http-errors";

export function notFoundError(req, res, next) {
	next(createError(404, "Your requested content was not found!"));
}

export function defaultError(err, req, res, next) {
	res.locals.error =
		process.env.NODE_ENV === "development" ? err : { message: err.message };
	res.status(err.status || 500);

	if (!res.locals.html) {
		res.locals.title = "Error page";
		res.render("error");
	} else {
		res.json(res.locals.error);
	}
}
