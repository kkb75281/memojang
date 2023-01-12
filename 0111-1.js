class Profile {
    fn;
    ln;
    a;

    constructor(firstName, lastName, age) {
        this.fn = firstName;
        this.ln = lastName;
        this.a = age;
    }

    sayHello() {
        console.log(`Hi my firstname is ${this.fn} and my age is ${this.a}`);

        let data = {
            fullname: `${this.fn} ${this.ln}`,
            age: this.a
        };

        return data;
    }

    changeName(firstName, lastName, age) {
        this.fn = firstName;
        this.ln = lastName;
        this.a = age;
    }
}

// let baksa = new Profile('Baksa', 'Gimm', 38);
// let b_info = baksa.sayHello();
// console.log(b_info);

// baksa.changeName('Gyubi', 'Kwon', 26);
// console.log(baksa.sayHello());

// console.log(baksa.fn);

// let gyubi = new Profile('Gyubi', 'Kwon', 26);
// let g_info = gyubi.sayHello();
// console.log(g_info);

class DateCard {
    // 변수
    year;
    month;
    day;
    where;
    who;
    why;

    // 매개변수 연결
    constructor(year, month, day, where, who, why) {
        this.year = year;
        this.month = month;
        this.day = day;
        this.where = where;
        this.who = who;
        this.why = why;
    }

    // 함수(재활용가능)
    today() {
        console.log(`Hello! Today is ${this.day} ${this.month}, ${this.year}`);

        // 함수 안에서는 일반 자바스크립트처럼 사용 (let 선언 가능)
        let data = {
            year: this.year,
            month: `${this.month}`,
            day: this.day
        }

        return data;
    }

    inviteCard() {
        console.log(`I'll invite you to my ${this.why} party.`)

        let data = {
            when: `${this.day} ${this.month}, ${this.year}`,
            where: `${this.who}'s ${this.where}`
        }

        return data;
    }

    changeInfo(year, month, day, where, who, why) {
        this.year = year;
        this.month = month;
        this.day = day;
        this.where = where;
        this.who = who;
        this.why = why;
    }
}

let info = new DateCard(2023, 'jan', 11);
let today = info.today();
console.log(today);

let gyupp = new DateCard(2023, 'Nov', 16, 'house', 'gyupp', 'birthday');
let inviteCard = gyupp.inviteCard();
console.log(inviteCard);

gyupp.changeInfo(2023, 'Dec', 25, 'playground', 'kyubi', 'christmas');
console.log(gyupp.inviteCard());