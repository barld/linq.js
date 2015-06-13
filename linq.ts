Array.prototype.add = function<T>(item: T): void {
	this.push(item);
}

Array.prototype.addRange = function<T>(items: T[]): void {
	this.push(items);
}

Array.prototype.clear = function(): void {
    this.length = 0;
}

Array.prototype.contains = function(item): boolean {
    for (var i = 0; i < this.length; i++)
    {
        if (item === this[i])
            return true;
    }
    return false;
}

Array.prototype.exists = function<T>(match: (item: T) => boolean): boolean {
    for (var i = 0; i < this.length; i++) {
        if (match(this[i]))
            return true;
    }
    return false;
}

Array.prototype.where = function <T>(predicate: (item: T) => boolean): T[]{
    var result = new Array<T>();
    for (var i = 0; i < this.length; i++) {
        if (predicate(this[i]))
            result.add(this[i]);
    }
    return result;
}