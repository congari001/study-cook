/**
 * 指定した文字列により返すオブジェクトを変える処理
 */

/**
 * 指定する文字列と生成するオブジェクトの対応表
 */
interface FoodMap {
    "noodle": Noodle;
    "meat": Meat;
}

/**
 * 生成するオブジェクト各種
 */
class Noodle {
    zuruzuru() {
        console.log("ずるずる");
    }
}
class Meat {
    gabugabu() {
        console.log("がぶがぶ");
    }
}

/**
 * 文字列により色々なオブジェクトを返すクラス
 */
class Cook implements FoodMap {
    get noodle(): Noodle {
        return new Noodle();
    }
    get meat(): Meat {
        return new Meat();
    }
}

// 使ってみる
const cook: Cook = new Cook(); //料理人がいたので
const selectMenu: keyof FoodMap = "meat"; // メニューから商品を選んで
const food: FoodMap[typeof selectMenu] = cook[selectMenu]; // 注文したら秒で出てきたので
food.gabugabu(); // 食った

// 完