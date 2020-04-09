class Event {
    #clientList = {};


    listen(key, fn) {
        if (!this.#clientList[key]) {
            this.#clientList[key] = []
        }
        this.#clientList[key].push(fn)
    }

    trigger() {
        const key = Array.prototype.shift.call(arguments)
        const fns = this.#clientList[key]
        if (!fns || !fns.length) {
            return false
        }
        for (const fn of fns) {
            fn.apply(this, arguments)
        }
    }

    remove(key, fn) {
        const fns = this.#clientList[key];
        if (!fns) {
            return false;
        }
        if (!fn) {
            fns && (fns.length = 0)
        }else {
            for (let i = fns.length; i >= 0 ; i--) {
                if (fns[i] === fn) {
                    fns.splice(i, 1)
                }
            }
        }

    }
}