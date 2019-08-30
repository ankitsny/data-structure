class HashMap {
    constructor (size = 53) {
        this.mapKey = new Array(size);
    }

    _hash (key) {
        const PRIME_NUM = 31;
        let total = 0;
        for (let i =0; i< Math.min(key.length, 100); i++) {
            let code = key.charCodeAt(i) - 96;
            total = (total * PRIME_NUM + code ) % this.mapKey.length;
        }
        return total;
    }

    set (key, val) {
        const index = this._hash(key);
        console.log("KEY", key, index)
        this.mapKey[index] = val;
    }

    get (key) {
        const index = this._hash(key);
        console.log("KEY", key, index)

        return this.mapKey[index];
    }

}


const m = new HashMap();
m.set("p", "Hello");
// m.set("pp", "Hello");
console.log(m.get('p'), m)