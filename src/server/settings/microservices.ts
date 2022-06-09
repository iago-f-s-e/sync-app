const HOST_MICROSERVICE = process.env.HOST_MICROSERVICE || '0.0.0.0';
const PORT_PRODUCT_MICROSERVICE = process.env.PORT_PRODUCT_MICROSERVICE || '8081';

export const PRODUCT_MICROSERVICE = `http://${HOST_MICROSERVICE}:${PORT_PRODUCT_MICROSERVICE}/service`;
