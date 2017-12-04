
// Loop through this array of objects and console.log <name>’s job title is <title>”

let colleagues = [
    {name: "Bob", department: "sales", title: "sales manager"},
    {name: "Tina", department: "finance", title: "director of finance"},
    {name: "Randy", department: "IT", title: "hardware guy"},
    {name: "Glenda", department: "C-suite", title: "CEO"}
];


for (let i = 0; i < colleagues.length; i++) {
    let sentence = `${colleagues[i].name}'s job title is ${colleagues[i].title}`;
    console.log(sentence);
}