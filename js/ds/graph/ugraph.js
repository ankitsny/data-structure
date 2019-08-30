// class Vertex {
//     constructor (val) {
//         this.val = val;

//     }
// }

class UnDirectedGraph {
    constructor () {
        this.adjacencies = {};
    }

    addVertex (vertex) {
        if (!this.adjacencies[vertex])
            this.adjacencies[vertex] = [];   
    }

    addEdges (v1, v2) {
        if (!v1 || !v1 || !(v1 in this.adjacencies) || !(v2 in this.adjacencies)) return;
        let v1Adj = new Set(this.adjacencies[v1]);
        v1Adj.add(v2); 
        this.adjacencies[v1] = [...v1Adj];
        
        let v2Adj = new Set(this.adjacencies[v2]);
        v2Adj.add(v1); 
        this.adjacencies[v2] = [...v2Adj];
    }

    removeEdge (v1, v2) {
        if (!v1 || !v1 || !(v1 in this.adjacencies) || !(v2 in this.adjacencies)) return;
        let v1Adj = new Set(this.adjacencies[v1]);
        v1Adj.delete(v2); 
        this.adjacencies[v1] = [...v1Adj];
        
        let v2Adj = new Set(this.adjacencies[v2]);
        v2Adj.delete(v1); 
        this.adjacencies[v2] = [...v2Adj];
    }

    removeVertex (v) {
        if (!v || !(v in this.adjacencies)) return;
        delete this.adjacencies[v]
        Object.keys(this.adjacencies).forEach(key => {
            const ind = this.adjacencies[key].indexOf(v);
            if (ind !== -1) this.adjacencies[key].splice(ind, 1);
        });
    }


    DFSRec (start) {
        let result = [];
        let visited = {};
        let adjacencies = this.adjacencies;
        (function dfs(vertex) {
            if (!vertex) return null;
            visited[vertex] = true;
            result.push(vertex);
            adjacencies[vertex].forEach(v => {
                if (visited[v]) return;
                return dfs(v);
            })
        })(start)
        return result;
    }

    DFSItr (start) {
        const stack = [];
        stack.push(start);
        const visited = {};
        const result = [];
        while(stack.length) {
            const vertex = stack.pop();
            if (visited[vertex]) continue;

            visited[vertex] = true;
            result.push(vertex);
            this.adjacencies[vertex].forEach(v => stack.push(v));
        }
        return result;
    }

    BFS (start) {
        const result = [];
        const queue = [];
        const visited = {};
        queue.push(start);
        while(queue.length) {
            const vertex = queue.shift();
            if (visited[vertex]) continue;
            result.push(vertex);
            visited[vertex] = true;
            this.adjacencies[vertex].forEach(v => queue.push(v));
        }
        return result;
    }

}

const g = new UnDirectedGraph();
g.addVertex("A");
g.addVertex("B");
g.addVertex("C");
g.addVertex("D");
g.addVertex("E");
g.addVertex("F");

g.addEdges("A", "B");
g.addEdges("A", "C");
g.addEdges("B", "D");
g.addEdges("C", "E");
g.addEdges("D", "E");
g.addEdges("D", "B");
g.addEdges("D", "F");
g.addEdges("F", "D");
g.addEdges("F", "E");
g.addEdges("E", "D");
g.addEdges("E", "F");
g.addEdges("E", "C");



// g.removeEdge("Lari", "Ramgarh")
// g.removeVertex("Ramgarh")
// console.log(g.DFSRec("A"))
// console.log(g.DFSItr("A"))
console.log(g.BFS("A"))