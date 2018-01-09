class ObjectPool {
    constructor() {
        this.map = {};
        this.size = 0;
    }

    add(obj) {
        const id = getUniqueId(obj);
        if(this.map[id]) {
            return;
        }

        this.map[id] = obj;
        ++this.size;
    }

    contains(obj) {
        const id = getUniqueId(obj);
        return !!this.map[id];
    }
}

const getUniqueId = (function() {
    let nextId = 1000;
    const MAGIC_FIELD = "###ID###";

    function getUniqueId(obj) {
        let id = obj[MAGIC_FIELD];
        if (!id) {
            id = obj[MAGIC_FIELD] = ++nextId;
        }

        return id;
    }

    return getUniqueId;
})();
