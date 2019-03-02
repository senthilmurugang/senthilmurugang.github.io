class RequestTransporter {

    constructor() {

    }
    /***
     * @typedef {Object} options - Other options for requests
     * @property {Function} callback - Callback function
     * @property {Function} errorCallback - Callback function for errors
     * @property {String} contentType - Content type of the data
     */
    /**
     * Ajax Post request wrapper
     * @param {String} url - Request URL
     * @param {*} data - Data to be postted
     * @param {options} options - Other options
     */
    post(url, data, options = {}) {
        $.ajax({
            url: url,
            data: data,
            method: "POST",
            contentType: options.contentType ? options.contentType : "application/x-www-form-urlencoded",
            dataType: options.dataType ? options.dataType : "",
            success: (data) => {
                if (options.callback) options.callback(data)
            },
            error: (error) =>{
                if(options.errorCallback) options.errorCallback(error);
            }
        })
    }
}