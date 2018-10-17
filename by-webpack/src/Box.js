class Box {
    constructor(){
        this._width = 0;
        this._height = 0;
    }

    set width(width){
        this._width = width;
    }

    set height(height){
        this._height = height;
    }

    get area(){
        return this._width * this._height;
    }
}

export default Box;