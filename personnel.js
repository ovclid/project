var info = [
    { name: "나", bir_party : "음력", birth_year: 1978, birth_month: 2, birth_day: 10, lunar_year: 1978, lunar_month: 1, lunar_day: 4},
    { name: "아내", bir_party : "양력", birth_year: 1982, birth_month: 10, birth_day: 03, lunar_year: 1982, lunar_month: 8, lunar_day: 17 },
    { name: "아들", bir_party : "양력", birth_year: 2011, birth_month: 11, birth_day: 17, lunar_year: 2011, lunar_month: 10, lunar_day: 22 },

];

const today = new Date();

function cal_age(year, month, day) {
    const birthDate = new Date(year, month, day);
    let age = today.getFullYear() - birthDate.getFullYear() + 1;

    return age;
}

function cal_real_age(year, month, day) {
    const birthDate = new Date(year, month, day);
    let age = today.getFullYear() - birthDate.getFullYear();
    const m = today.getMonth() - birthDate.getMonth();

    if (m < 0 || (m === 0 && today.getDate() < birthDate.getDate())) {
        age--;
    }

    return age;
}

function birthday_party(){

}
function draw_table() {
    const rowCnt = info.length;
    const columnCnt = 4;

    document.write('<table border="1">');
    document.write('<th> 순번 </th>');
    document.write('<th> 성명 </th>');
    document.write('<th> 생파 </th>');
    document.write('<th> 생년월일 </th>');
    document.write('<th> 음력생일 </th>');
    document.write('<th> 나이 </th>');
    document.write('<th> 만(세) </th>');

    for (let i = 0; i < rowCnt; i++) {
        if ( i%2 == 0) {
            document.write('<tr>');
        }
        else{
            document.write("<tr style = 'background-color: lightcyan;'>");
        }
        document.write('<td>', i+1, "&nbsp", '</td>');
        document.write('<td>', info[i].name, "&nbsp", '</td>');
        document.write('<td>', info[i].bir_party, "&nbsp", '</td>');
        document.write('<td>', info[i].birth_year, ".&nbsp", info[i].birth_month, ".&nbsp", info[i].birth_day, ".&nbsp", "</td>");
        document.write('<td>', info[i].lunar_year, ".&nbsp", info[i].lunar_month, ".&nbsp", info[i].lunar_day, ".&nbsp", "</td>");
        document.write('<td>', cal_age(info[i].birth_year, info[i].birth_month, info[i].birth_day), '</td>');
        document.write('<td>', cal_real_age(info[i].birth_year, info[i].birth_month, info[i].birth_day), "</td>");
        document.write('</tr>')
    }
    document.write('</table>');
}