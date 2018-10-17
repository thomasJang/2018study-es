class Box {
    constructor(width = 100, height = 100){
        this._width = width;
        this._height = height;
    }

    get area(){
        return this._width * this._height;
    }

    set width(width) {
        this._width = width;
    }

    set height(height) {
        this._height = height;
    }

    get width(){
        return this._width;
    }
}