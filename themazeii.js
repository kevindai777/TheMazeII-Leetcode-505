//Objective is similar to 'The Maze' but this time we want to find the shortest
//distance from point A to B.

let maze = 
[[0, 0, 1, 0, 0],
 [0, 0, 0, 0, 0],
 [0, 0, 0, 1, 0],
 [1, 1, 0, 1, 1],
 [0, 0, 0, 0, 0]]


//O(m*n) solution where m is the number of rows and n is the number of columns.
//We find the shortest distance at each pixel all the way until we reach the end

let directions = [[-1,0],[1,0],[0,1],[0,-1]]
    
start.push(0)
let queue = [start]

let distance = new Array(maze.length)
for (let i = 0; i < maze.length; i++) {
    distance[i] = new Array(maze[i].length).fill(Infinity)
}

while (queue.length > 0) {
    let [x,y,currDis] = queue.shift() 
    
    for (let [dx,dy] of directions) {
        let i = x
        let j = y 
        let tempDis = currDis
        
        while (i >= 0 && i < maze.length && j >= 0 && j < maze[0].length && maze[i][j] !== 1) {
            i += dx
            j += dy
            tempDis++
        }
        
        i -= dx
        j -= dy
        tempDis--
        
        if (distance[i][j] > tempDis) {
            distance[i][j] = tempDis
            queue.push([i, j, tempDis])
        }
    }
}

return distance[destination[0]][destination[1]] == Infinity ? -1 : distance[destination[0]][destination[1]]