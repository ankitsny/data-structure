class WeightedGraph {
    constructor () {
        this.adajacencies = {};
    }
    addVertex (v) {
        if (!this.adajacencies[v]) this.adajacencies[v] = []; 
    }

    addEdge (v1, v2, weight) {
        this.adajacencies[v1].push({node: v2, weight: weight});
        this.adajacencies[v2].push({node: v1, weight: weight});
    }

}


