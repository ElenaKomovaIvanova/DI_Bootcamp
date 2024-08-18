import random

class Gene:
    def __init__(self, value=None):
        self.value = value if value is not None else random.choice([0, 1])

    def mutate(self):
        self.value = 1 if self.value == 0 else 0

    def __repr__(self):
        return str(self.value)

class Chromosome:
    def __init__(self):
        self.genes = [Gene() for _ in range(10)]

    def mutate(self):
        for gene in self.genes:
            if random.random() < 0.5:
                gene.mutate()

    def __repr__(self):
        return ''.join(str(gene) for gene in self.genes)

class DNA:
    def __init__(self):
        self.chromosomes = [Chromosome() for _ in range(10)]

    def mutate(self):
        for chromosome in self.chromosomes:
            chromosome.mutate()

    def is_all_ones(self):
        return all(gene.value == 1 for chromosome in self.chromosomes for gene in chromosome.genes)

    def __repr__(self):
        return '\n'.join(str(chromosome) for chromosome in self.chromosomes)

class Organism:
    def __init__(self, dna, environment):
        self.dna = dna
        self.environment = environment
        self.generations = 0

    def mutate(self):
        if random.random() < self.environment:
            self.dna.mutate()
        self.generations += 1

    def has_perfected(self):
        return self.dna.is_all_ones()

def simulate(max_generations=10000):
    dna = DNA()
    environment = 0.5  # Probability of mutation
    organism = Organism(dna, environment)

    while not organism.has_perfected():
        organism.mutate()

        if organism.generations % 1000 == 0:
            print(f"Generation: {organism.generations}")
            print(organism.dna)

        if organism.generations > max_generations:
            print("Max generations reached. Stopping simulation.")
            return -1  # Indicate that perfection was not achieved within the limit

    return organism.generations

# Run the simulation
generations_needed = simulate()
if generations_needed != -1:
    print(f"The organism reached perfect DNA in {generations_needed} generations.")
else:
    print("The organism did not reach perfect DNA within the generation limit.")
