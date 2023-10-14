function phepCong(x, y) {
    return x + y;
}

function result(x, y, kt) {
    return kt(x, y);
}

result(1, 2, phepCong);