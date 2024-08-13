import math


class Pagination:


    def __init__(self, items = None, pageSize = 10) -> None:
        self.items = items
        self.pageSize = int(pageSize)
        self.currentPage = 1
        self.totalPages = math.ceil(len(self.items) / self.pageSize)

    def getVisibleItems(self):
        page_start = (self.currentPage - 1)*self.pageSize
        page_end = page_start + self.pageSize
        list_visible = self.items[page_start:page_end]
        return (list_visible)

    def nextPage(self):
        self.currentPage += 1
        return self

    def firstPage(self):
        self.currentPage = 1

    def lastPage(self):
        self.currentPage = self.totalPages


    def goToPage(self, pageNum = 0):
        if pageNum <= 0:    
           self.currentPage = 1
        elif pageNum > self.totalPages:
           self.currentPage = self.totalPages 
        else: self.currentPage = pageNum     
    



alphabetList = list("abcdefghijklmnopqrstuvwxyz")

p = Pagination(alphabetList, 4)  

print(p.getVisibleItems())

p.nextPage()

print(p.getVisibleItems())

p.firstPage()

print(p.getVisibleItems())
p.lastPage()
print(p.getVisibleItems())

p.goToPage(1)
print(p.getVisibleItems())

p.nextPage().nextPage().nextPage()
print(p.getVisibleItems())
