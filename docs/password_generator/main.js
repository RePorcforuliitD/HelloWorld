new Vue({
    el: "#app",
    data: {
        digits: "8",
        numbers: false,
        symbols: false,
        words: [],
    },
    methods: {
        generate(line, row) {
            var seed_letters = "abcdefghijklmnopqrstuvwxyz";
            var seed_numbers = "0123456789";
            var seed_symbols = "!#$%&";
            var seed;

            var length = Number(this.digits);

            seed = seed_letters + seed_letters.toUpperCase();
            if (this.numbers) {
                seed += seed_numbers;
            }
            if (this.symbols) {
                seed += seed_symbols;
            }

            this.words = [];
            for (var i = 0; i < line; i++) {
                this.words[i] = [];
                for (var j = 0; j < row; j++) {
                    this.words[i][j] = this.password_generate(length, seed);
                }
            }
        },
        password_generate(length, seed) {
            var pass = "";
            for (var i = 0; i < length; i++) {
                pass += seed[Math.floor(Math.random() * seed.length)];
            }
            return pass;
        },
        sougou_generate() {
            var table = document.createElement('table');
            table.classList.toggle('table');

            this.generate(5, 5);

            for (var i = 0; i < 5; i++) {
                var rows = table.insertRow(-1);

                for (var j = 0; j < 5; j++) {
                    var td = rows.insertCell(-1);
                    //td.innerHTML = String(`${i}-${j}`);
                    console.log(this.words[i][j]);
                    console.log(`${i}-${j}`);
                    td.innerHTML = String(`${this.words[i][j]}`);
                }
            }

            var parent_object = document.getElementById("area");
            parent_object.textContent = null;
            parent_object.appendChild(table);
        }
    }
})
