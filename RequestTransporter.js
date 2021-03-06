class RequestTransporter {

    constructor() {

    }
    /***
     * @typedef {Object} options - Other options for requests
     * @property {Function} callback - Callback function
     * @property {Function} errorCallback - Callback function for errors
     * @property {String} contentType - Content type of the data
     * @property {Boolean} crossDomain - Is cross domain call
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
            processData: "processData" in options ? options.processData: false,
            method: "POST",
            crossDomain: "crossDomain" in options ? options.crossDomain : false,
            contentType: "contentType" in options ? options.contentType : "application/x-www-form-urlencoded;charset=utf-8",
            dataType: "dataType" in options ? options.dataType : "",
            success: (data) => {
                if ("callback" in options) options.callback(data)
            },
            error: (error) => {
                if ("errorCallback" in options) options.errorCallback(error);
            }
        })
    }
}