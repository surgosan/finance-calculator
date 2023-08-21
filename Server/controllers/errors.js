const errors = {
    badRequest: (message) => {
        return {
            status: 400,
            message: message || 'Bad Request',
        };
    },

    unauthorized: (message) => {
        return {
            status: 401,
            message: message || 'Unauthorized',
        };
    },

    notFound: (message) => {
        return {
            status: 404,
            message: message || 'Not Found',
        };
    },

    internalServerError: (message) => {
        return {
            status: 500,
            message: message || 'Internal Server Error',
        };
    },

    errorHandler: (res, error, message) => {
        const errorMessage = error.message || message;
        const errorResponse = errors.internalServerError(errorMessage);

        res.status(errorResponse.status).send({
            error: errorResponse.message
        })
    }
};

module.exports = errors;
