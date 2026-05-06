function solution(num_list) {
    let even = num_list.filter((num) => num % 2 == 0);
    let odd = num_list.filter((num) => num % 2 == 1);
    
    let evenNum = +even.join('');
    let oddNum = +odd.join('');
    
    let answer = evenNum + oddNum;
    return answer;
}