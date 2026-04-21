function solution(num_list) {
    if (num_list.length >= 11) {
        let answer = num_list.reduce((acc, cur) => acc + cur);
        return answer;
    }
    else {
        let answer = num_list.reduce((acc, cur) => acc * cur);
        return answer;
    }
}