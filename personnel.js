var info = [
    { name: "나", birth_year: 1978, birth_month: 2, birth_day: 10 },
    { name: "아내", birth_year: 1982, birth_month: 10, birth_day: 03 },
    { name: "아들", birth_year: 2011, birth_month: 11, birth_day: 17 },

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

function draw_table() {
    const rowCnt = info.length;
    const columnCnt = 4;

    document.write('<table border="1">');
    document.write('<th>');            
    document.write('<td> 성명 </td>');
    document.write('<td> 생년월일 </td>');
    document.write('<td> 나이 </td>');
    document.write('<td> 만나이 </td>');
    document.write('</th>');

    for (let i = 0; i < rowCnt; i++) {
        document.write('<tr>');
        document.write('<td>', i+1, "&nbsp", '</td>');
        document.write('<td>', info[i].name, "&nbsp", '</td>');
        document.write('<td>', info[i].birth_year, ".&nbsp", info[i].birth_month, ".&nbsp", info[i].birth_day, ".&nbsp", "</td>");
        document.write('<td>', cal_age(info[i].birth_year, info[i].birth_month, info[i].birth_day), '</td>');
        document.write('<td>', cal_real_age(info[i].birth_year, info[i].birth_month, info[i].birth_day), "</td>");
        document.write('</tr>')
    }
    document.write('</table>');
}
