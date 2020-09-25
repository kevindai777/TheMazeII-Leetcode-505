//Java Solution

class Solution {
    public int shortestDistance(int[][] maze, int[] start, int[] destination) {
        int[][] distances = new int[maze.length][maze[0].length];
        for (int i = 0; i < distances.length; i++) {
            Arrays.fill(distances[i], Integer.MAX_VALUE);
        }
        
        int[][] directions = new int[][] {{1,0}, {-1,0}, {0,1}, {0,-1}};
        
        Queue<int[]> queue = new LinkedList<>();
        queue.add(new int[] {start[0], start[1], 0});
        
        while (!queue.isEmpty()) {
            int[] curr = queue.poll();
            
            for (int i = 0; i < directions.length; i++) {
                int j = curr[0];
                int k = curr[1];
                int tempDis = curr[2];
                
                while (j >= 0 && j < maze.length && k >= 0 && k < maze[0].length && maze[j][k] != 1) {
                    j += directions[i][0];
                    k += directions[i][1];
                    tempDis++;
                }
                
                j -= directions[i][0];
                k -= directions[i][1];
                tempDis--;
                
                if (distances[j][k] > tempDis) {
                    distances[j][k] = tempDis;
                    queue.add(new int[] {j, k, tempDis});
                }
            }
        }
        
        return distances[destination[0]][destination[1]] == Integer.MAX_VALUE ? -1 : distances[destination[0]][destination[1]];
    }
}