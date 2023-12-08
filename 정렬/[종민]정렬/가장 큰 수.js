/*① 이번 문제는 sort의 로직을 이용한 문제입니다. sort는 a와 b를 인자로 받아 연산을 처리할 때 
결과값이 양수이면 a와 b의 자리를 바꾸고, 음수일 경우 바꾸지 않고 다음 a와 b를 비교하여 
최종적으로 비교할 수 없는 때 까지(자리 스위칭이 일어나지 않을 때까지) 연산을 처리합니다. 
*/
/*② 가령 [1,5,2,4,8] 이라는 배열이 있다고 하면, 오름차순의 효과를 주기 위해서 a-b로 연산을 처리하는데, 
1에서 5를 빼면 음수이므로 자리를 바꾸지 않고, 5에서 2를 빼면 양수이므로 
2와 5를 스위칭 하고, 다시 5와 4를 빼서 양수면 스위칭 하고, 다시 5와 8을 뺄때 음수이므로 
스위칭이 일어나지 않으므로 최종적으로 오름차순 정렬 된 [1,2,4,5,8] 값으로 정렬됩니다.
*/
/*③ 오름차순의 경우, 큰 값이 먼저 앞에 와야하기 때문에 b에서 a를 빼줍니다. 
만약 [1,5,2,4,8] 이라는 수를 오름차순 하려면 8이 맨 앞으로 와야하는데, 
일단 5(b)에서 1(a)을 빼면 양수이므로 스위칭이 발생됩니다. 다시 2와 1을 빼면 양수이므로 스위칭이 일어나고, 
4에서 1을 빼면 양수이므로 또 스위치칭, 8과 1을 빼면 양수이므로 스위칭이 되어 
첫번째 순회값은 1(제일 작은 값)이 맨 오른쪽으로 가면서 정렬된 [5,2,4,8,1] 배열이 등장합니다.

다음 과정도 해당 로직대로 가게 될 경우 사이클을 돌때마다 [5,4,8,2,1], [5,8,4,2,1], [8,5,4,2,1]
순으로 정렬되고 최종적으로 5(b) - 8(a)은 음수이므로 스위칭이 일어나지 않아 내림차순 효과를 줄 수 있는 것이죠.
*/

/*④ 예를 들어 [2,12,8] 이라는 배열이 있다고 합시다. 우리가 원하는 가장 큰 값은 8212입니다.
이때 오름차순으로 값을 구하는 로직(b - a)을 적용해 보면 값은 1282거 나옵니다.
의도된 값이 아니죠.그럼 내림차순을 적용하면 어떻게 될까요 ? 
그렇다면 2812가 나올 것입니다. 8이 먼저 나와야 하나 그렇지 못하죠. 
*/

/*⑤ 문제는 10 이상의 숫자가 배열에 들어있을때 우리가 생각하는 가장 큰 숫자를 
맨 앞으로 보낼 수 없다는 대에 있습니다. 그래서 다름 사람들의 문제 해석을 봤는데, 
b+a의 값에서 a+b의 값을 빼는대에 그 해법을 알 수 있었습니다.
*/
/* 만약 배열 [2,12,8] 에서 (b+a) - (a+b)의 첫번째 로직이 돌게 되면 122 - 212아 생성되고,
음수이므로 자리 변화는 일어나지 않습니다. 그 후 812와 128에서는 결과값이 양수이므로 
8과 12를 스위칭 하게되죠. 그 후 변환 된 배열 [2,8,12]에서 82 - 28을 수행하면 양수이므로 
2와 8을 스위칭 한 [8,2,12]배열로 정리되고, 결과적으로 우리가 원하는 값으로 바꿔주기 위해 
join 메서드로 문자열 변환을 해주면 "2812" 가 완성되는 것이죠. 

이때 배열 안의 요소들이 숫자라면 우리가 원하는대로 b+a와 a+b 연산으로 값을 붙이는게 아니라 
더해져버리는 일이 발생되기 때문에 배열들의 요소를 map 메서드로 전부 문자열로 바꾸어 줍니다. 
그 후 sort 메서드에서 해당 문자열끼리 더한 값에서 - 연산을 주게 되면 자바스크립트 엔진에서는 
피연산자들의 값이 문자열이더라도 안에 있는 숫자를 보고 숫자로 자동 형변환을 하기 때문에 
우리가 원하는 숫자끼리의 연산이 가능해집니다. 단 '815'-'158' 같이 자바스크립트 엔진에서 판단했을 때 
어느정도 자동 형변환이 가능한 것처럼 보이는 경우가 아닌, '10' - 'a' 처럼 같은 문자열이더라도 
자바스크립트에서 감산 연산이 어렵다고 판단되는 경우 NaN을 반환하니 주의해야 합니다.
*/

/*이 로직은 같은 자리값에 대한 b-a에서는 큰 수가 왼쪽(큰 쪽)으로 이동하고, 
자릿수가 다른 값과의 비교에서는 왼쪽 자리수부터 다시 비교를 하여 큰 값을 왼쪽으로 보내는 로직입니다. 
그래서 다른 자릿수라 하더라도 왼쪽 자리수를 비교하여 큰 값이 왼쪽으로 가게 되어있고, 
b(13), a(123) 의 경우에도 왼쪽 첫번째 자리수는 같지만 두번째 자리수는 b가 더 크기 때문에 
b가 왼쪽으로 갈 수 있는 것이죠.
*/

/*
만약 배열이 [9,57,8,13,18,4,30,31] 이렇게 입력되었다고 해봅시다.
첫번째 정리된 배열은 [9,8,57,18,4,30,31,13]이 되고
두번째 정리된 배열은 [9,8,57,4,30,31,18,13]이 되고
세번째 정리된 배열은 [9,8,57,4,31,30,18,13]이 되고
네번째 부터는 스위칭 되는 값이 없기에 최종적으로 마지막 배열을 문자열로 변환한 
"9857431301813" 조합이 가장 큰 수가 되는 것이죠.
*/

function solution(numbers){
    const answer = numbers
	.map(numbers => String(numbers))
    // answer에 numbers 배열을 map 메서드로 요소 하나하나를 전부 문자열로 변환하여 재구성한 후
    .sort((a,b) => (b+a) - (a+b)).join('');
    /*sort 메서드로 위의 로직대로 연산을 처리합니다.
    그럼 결과적으로 윗쪽의 설명과 같이 해당 로직이 처리되어 
    우리가 원하는 가장 큰 배열의 값 조합을 얻을 수 있을 것이고
    */
    // 마지막으로 join 메서드로 각 배열의 문자열들을 빈틈없이 묶어서 반환 받고
    
    return answer[0] === '0' ? '0' : answer;
    /*최종 처리 된 answer를 반환하면 되는데,이때 0만 있는 배열에 대한 처리 때문에 
    삼항 연산자로 해당 배열이 0만 이루어져 있을 경우 그냥 0만 출력하도록 합니다. 
    얘를 들어 [0,0,0] 이라고 하면 결과값도 '000' 일것이므로 
    해당 문자열의 첫번째 값이 0일 경우 0의 개수에 관계 없이 '0'을 반환하도록 하는 것이죠.
    */
} 