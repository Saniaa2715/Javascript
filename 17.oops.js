class Session {
    // private
    #teacher;

    constructor(name, count) {
        // this = {}
        this.name = name;
        this.count = count;
        this.#teacher = 'aniruddha';
    }

    static teach() {
        console.log('yap yap yap for 2 hrs');
    }

    setTime(time) {
        this.time = time;
    }

    get fullName() {
        return this.name + " " + this.surname; 
    }

    set fullName(newValue) {
        // validate newValue
        // this.name = ...
    }
}

const jsSession = new Session("JavaScript", 23);
const gitSession = new Session("git", 23)
jsSession.fullName; // 

jsSession.setTime(12)
gitSession.setTime(13)

const setTim = jsSession.setTime.bind(jsSession);
setTim(12);



function Response(params, query, body) {
    this.params = params;
    this.query = query;
    this.body = body;
}

// all about this
class ThisClass {
    methodOne = () => {
        // object
        console.log(this);
    }

    constructor() {
        // object
        console.log(this);
    }

    static thisUsage() {
        // class itself
        console.log(this);
    }

    methodThisUsage() {
        // the object
        console.log(this);
    }
}

const thisClass = new ThisClass();

const obj = {
    name: 'Aniruddha',
    
    methodOne: function() {
        console.log(this);
    },

    methodTwo: () => {
        console.log(this);
    }
}