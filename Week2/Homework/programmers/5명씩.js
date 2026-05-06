function solution(names) {
    let answer = names.filter((name, index) => index % 5 == 0);
    return answer;
}