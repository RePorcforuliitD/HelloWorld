new Vue({
    el: "#app",
    data: {
        bmi: 20,               //BMI
        Obesity: "普通体重",    //肥満度
        height: 165,           //身長
        weight: 50,            //体重
        list: [
            { id: 0, value: 18.5, range: "18.5未満", obesity: "低体重" },
            { id: 1, value: 25, range: "18.5～25未満", obesity: "普通体重" },
            { id: 2, value: 30, range: "25～30未満", obesity: "肥満(1度)" },
            { id: 3, value: 35, range: "30～35未満", obesity: "肥満(2度)" },
            { id: 4, value: 40, range: "35～40未満", obesity: "肥満(3度)" },
            { id: 5, value: 45, range: "40以上", obesity: "肥満(4度)" },
        ],
    },
    methods: {
        calculate: function () {
            this.bmi = this.GetBMI();
            this.Obesity = this.GetObesity();
        },
        // BMIを求める関数
        GetBMI: function () {
            meter = this.GetMeter(this.height);
            return (this.weight / (meter * meter)).toFixed(2);
        },
        // 肥満度の文字列を返す関数
        GetObesity: function () {
            for (var i = 0; i < this.list.length - 1; i++) {
                // BMIの値に応じた肥満度を文字列で返す(肥満度の最上位を除く)
                if (this.bmi < this.list[i].value) {
                    return this.list[i].obesity;
                }
            }
            // 肥満度の最上位を返す
            return this.list[length - 1].obesity;
        },
        // 身長の単位を㎝からmに変換
        GetMeter: function (cm) {
            return cm / 100;
        },
        // 適正体重を求める関数
        Tekisei: function () {
            meter = this.GetMeter(this.height);
            return ((meter * meter) * 22).toFixed(1);
        },
    }
})
