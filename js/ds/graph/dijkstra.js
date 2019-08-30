class PriorityQueue {
    constructor () {
        this.values = []
    }
    enqueue (v, p) {
        this.values.push({val: v, priority: p});
        this.sort();
    }

    dequeue () {
        return this.values.shift();
    }

    sort() {
        this.values.sort((a, b) => a.priority - b.priority)
    }
}

class WeightedGraph {
    constructor () {
        this.adjacencyList = [];
    }

    addVertex (v) {
        if (!this.adjacencyList[v]) this.adjacencyList[v] = [];
    }

    addEdge (v1, v2, weight) {
        this.adjacencyList[v1].push({node:v2, weight: weight});
        this.adjacencyList[v2].push({node:v1, weight: weight});
    }


    dijkstra (start, finish) {
        const node = new PriorityQueue();
        const distances = {};
        const previous = {};

        // Build initial setup

        for (let vertex in this.adjacencyList) {
            if (vertex === start) {
                distances[vertex] = 0;
                node.enqueue(vertex, 0);
            }else {
                distances[vertex] = Infinity;
                node.enqueue(vertex, Infinity);
            }
            previous[vertex] = null;
        }
        const paths = [];
        let smallest
        while (node.values.length) {
            smallest = node.dequeue().val
            if (smallest === finish) {
                while (previous[smallest]) {
                    paths.push(smallest);
                    smallest = previous[smallest];
                }
                console.log(distances);
                break;
                // Base case
            }

            if (smallest || distances[smallest] != Infinity) {
                for (let nextNode of this.adjacencyList[smallest]) {
                    const candidates = distances[smallest] + nextNode.weight
                    // console.log("Candidates: ", candidates);
                    if (candidates < distances[nextNode.node]) {
                        distances[nextNode.node] = candidates;
                        previous[nextNode.node] = smallest;
                        node.enqueue(nextNode.node, candidates);
                    }
                }
            }            
        }
        return paths.concat(smallest).reverse();
    }
}






var graph = new WeightedGraph();
graph.addVertex("A");
graph.addVertex("B");
graph.addVertex("C");
graph.addVertex("D");
graph.addVertex("E");
graph.addVertex("F");



graph.addEdge("A", "B", 4);
graph.addEdge("A", "C", 2);
graph.addEdge("B", "E", 3);
graph.addEdge("C", "D", 2);
graph.addEdge("C", "F", 4);
graph.addEdge("D", "E", 3);
graph.addEdge("D", "F", 1);
graph.addEdge("E", "F", 1);


console.log(graph.dijkstra("A", "E"))