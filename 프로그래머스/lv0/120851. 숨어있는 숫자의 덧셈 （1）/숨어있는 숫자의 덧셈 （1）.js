function solution(my_string) {
    return my_string.replace(/[^0-9]/g, '').split('').reduce((acc, cur) => parseInt(acc) + parseInt(cur), 0);
}