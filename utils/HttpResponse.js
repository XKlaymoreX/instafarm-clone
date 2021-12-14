
class HttpResponse {
    constructor(message, statusCode, data, success){
        this.message = message;
        this.statusCode=statusCode;
        this.data = data;
        this.success = success;
    }
}


export default HttpResponse;