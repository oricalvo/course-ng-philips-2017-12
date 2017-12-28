try {

    const pool1 = new ObjectPool();
    const pool2 = new ObjectPool();

    const ori = {
        id: 1,
        name: "Ori",
    };

    const roni = {
        id: 2,
        name: "Roni",
    };

    const likeOriButNotRealyOri = {
        id: 1,
        name: "Ori",
    };

    pool1.add(ori);
    pool1.add(ori);
    pool1.add(ori);
    pool1.add(roni);
    pool2.add(roni);

    expect(pool1.contains(ori), "Ori is not contained inside pool1");
    expect(pool1.contains(roni), "Roni is not contained inside pool1");
    expect(pool2.contains(roni), "Roni is not contained inside pool2");
    expect(!pool1.contains(likeOriButNotRealyOri), "likeOriButNotRealyOri is contained inside pool1");
    expect(pool1.size == 2, "pool1 is not of size 2");

    console.log("PASS");
}
catch(err) {
    console.log("FAIL: " + err.message);
}

function expect(condition, message) {
    if(!condition) {
        throw new Error(message);
    }
}
