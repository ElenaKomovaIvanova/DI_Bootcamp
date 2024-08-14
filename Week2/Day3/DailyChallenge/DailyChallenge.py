import math
from turtle import Turtle


class Circle:

    def __init__(self, radius = 0, diameter = 0) -> None:
        if radius != 0:
            self._radius = radius
            self._diameter = radius * 2
        elif diameter != 0:
            self._diameter = diameter
            self._radius = diameter / 2      

        self.area = math.pi * float(self.radius**2)

    def __repr__(self) -> str:
        return (f"radius {self.radius}, diameter {self.diameter}, area {self.area}")    

    @property
    def radius(self):
        return self._radius
    
    @property
    def diameter(self):
        return self._diameter

    @radius.setter
    def radius(self, value):
        self._radius = value
        self._diameter = value * 2
        self.area = math.pi * self.radius^2

    @diameter.setter
    def diameter(self, value):
        self._diameter = value
        self._radius = value / 2
        self.area = math.pi * self.radius^2

    def __add__(self, other):
        if isinstance(other, Circle):
            circle_new = Circle(self.radius + other.radius)
            return circle_new
        else:
            raise TypeError(f"Cannot add between Curcle type {self} and {type(other)} {other}")
        
    def __eq__(self, other) -> bool:
       if isinstance(other, Circle):
            return (self.radius == other.radius)
       else:
            raise TypeError(f"Objects of different types cannot be compared {type(self)} {self} and {type(other)} {other}")
       
    def __lt__(self, other) -> bool:
        if isinstance(other, Circle):
            return (self.radius < other.radius)
        else:
            raise TypeError(f"Objects of different types cannot be compared {type(self)} {self} and {type(other)} {other}")   
       
    def __le__(self, other) -> bool:
        if isinstance(other, Circle):
            return (self.radius <= other.radius)
        else:
            raise TypeError(f"Objects of different types cannot be compared {type(self)} {self} and {type(other)} {other}")      
        
    def __gt__(self, other) -> bool:
        if isinstance(other, Circle):
            return (self.radius > other.radius)
        else:
            raise TypeError(f"Objects of different types cannot be compared {type(self)} {self} and {type(other)} {other}")         

    def __ge__(self, other) -> bool:
        if isinstance(other, Circle):
            return (self.radius >= other.radius)
        else:
            raise TypeError(f"Objects of different types cannot be compared {type(self)} {self} and {type(other)} {other}")  

circle_1= Circle(diameter=30)    
circle_2= Circle(radius=5)


list_circle = [circle_1, circle_2]
list_sorted = sorted(list_circle)

print(list_circle)
print(list_sorted)

print(circle_1 + circle_2)




        