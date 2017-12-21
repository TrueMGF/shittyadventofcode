/*part 1
Imagine a spiral of death that starts with 1 right at the center. Now take a step to the right, and spiral around counter-clockwise, adding 1 for each step.
you'll get some meme like this:
17  16  15  14  13
18   5   4   3  12
19   6   1   2  11
20   7   8   9  10
21  22  23---> ..
now, get the manhattan distance from an input field to the field labeled 1.

hints i've taken: every "square" iteration has an odd square number on the bottom right
*/

let input = 368078;

function part1(input){
    let sq_done = false;
    let i = 1;
    while (Math.pow(i,2) < input){
        i+=2;
    }
    let pos = input-Math.pow(i-2,2);
    console.log(i,Math.pow(i,2),Math.pow(i-2,2));
    console.log(`Between ${i-2}^2 and ${i}^2 are ${Math.pow(i,2)-Math.pow(i-2,2)} numbers. Our input is on position ${pos}`);
    //The greatest distance should only be one eigth of this. The closer to a flat division by 4, the further away it has to be.
    //therefore: reduce the value we're looking for to the modulo of 1/4th of the total amount of possible numbers inbetween.
    //let quarter_sq = (Math.pow(i,2)-Math.pow(i-2,2))/4; //turns out this is always i-1, and I have no fucking idea why.
    pos = pos%(i-1);
    let ohgodpleaseberight = (i-1)+Math.abs(((i-1)/2)-pos);
    console.log((i-1)/2,pos,Math.abs(((i-1)/2)-pos),ohgodpleaseberight);

}

part1(input);