const ObjectPool = (function() {
    let nextId = 1000;
    const MAGIC_FIELD = "$$$$magic$$$$";

    function getId(obj) {
        let id = obj[MAGIC_FIELD];
        if(!id) {
            id = obj[MAGIC_FIELD] = ++nextId;
        }

        return id;
    }

    class ObjectPool {
        constructor() {
            this.map = {};
            this.size = 0;
        }

        add(obj) {
            const id = getId(obj);

            if(this.map[id]) {
                return;
            }

            this.map[id] = obj;
            ++this.size;
        }

        contains(obj) {
            const id = getId(obj);

            return !!this.map[id];
        }
    }

    return ObjectPool;
})();
