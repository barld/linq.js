Array.prototype.add = function (item) {
    this.push(item);
};

Array.prototype.addRange = function (items) {
    this.push(items);
};

Array.prototype.clear = function () {
    this.length = 0;
};

Array.prototype.contains = function (item) {
    for (var i = 0; i < this.length; i++) {
        if (item === this[i])
            return true;
    }
    return false;
};

Array.prototype.exists = function (match) {
    for (var i = 0; i < this.length; i++) {
        if (match(this[i]))
            return true;
    }
    return false;
};

Array.prototype.where = function (predicate) {
    var result = new Array();
    for (var i = 0; i < this.length; i++) {
        if (predicate(this[i]))
            result.add(this[i]);
    }
    return result;
};
//# sourceMappingURL=linq.js.map
