var myProduct = {};

myProduct.network = (function() {
    var lastRequestDate;

    function post() {
    }

    function put() {
    }

    function get() {
        console.log("get");
    }

    function http() {
        console.log("http");
    }

    return {
        post: post,
        put: put,
        get: get,
    };
})();
